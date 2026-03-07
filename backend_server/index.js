const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from React frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
}));

app.use(express.json());

// Create Gmail transporter using OAuth2
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `📩 New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed;">New Message from Soleno.AI Contact Form</h2>
        <hr style="border-color: #e5e7eb;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background:#f5f3ff; padding:16px; border-radius:8px; border-left:4px solid #7c3aed;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <hr style="border-color: #e5e7eb; margin-top:24px;">
        <p style="color:#6b7280; font-size:12px;">Sent via Soleno.AI Contact Form</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent from ${name} (${email})`);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('Soleno.AI Email Server is running ✅');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
