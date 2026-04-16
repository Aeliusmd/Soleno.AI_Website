const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from React frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
}));

app.use(express.json());

const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = process.env.SMTP_SECURE
  ? String(process.env.SMTP_SECURE).toLowerCase() === 'true'
  : smtpPort === 465;
const authMode = (process.env.MAIL_AUTH_MODE || 'auto').toLowerCase();
const fromEmail = process.env.EMAIL_USER;
const toEmail = process.env.EMAIL_TO || fromEmail;
const fromName = process.env.FROM_NAME || 'Soleno.AI';

function createTransporter() {
  if (!fromEmail) {
    throw new Error('EMAIL_USER is missing. Add it in backend_server/.env');
  }

  const hasOauth =
    process.env.OAUTH_CLIENT_ID &&
    process.env.OAUTH_CLIENT_SECRET &&
    process.env.OAUTH_REFRESH_TOKEN;
  const hasAppPassword = Boolean(process.env.EMAIL_PASS);

  if (!['auto', 'oauth2', 'app-password'].includes(authMode)) {
    throw new Error('MAIL_AUTH_MODE must be one of: auto, oauth2, app-password');
  }

  let auth;

  if (authMode === 'oauth2') {
    if (!hasOauth) {
      throw new Error('MAIL_AUTH_MODE=oauth2 but OAuth credentials are incomplete.');
    }
    auth = {
      type: 'OAuth2',
      user: fromEmail,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    };
  } else if (authMode === 'app-password') {
    if (!hasAppPassword) {
      throw new Error('MAIL_AUTH_MODE=app-password but EMAIL_PASS is missing.');
    }
    auth = {
      user: fromEmail,
      pass: process.env.EMAIL_PASS,
    };
  } else if (hasAppPassword) {
    // In auto mode, prefer app password to avoid fragile OAuth token setup.
    auth = {
      user: fromEmail,
      pass: process.env.EMAIL_PASS,
    };
  } else if (hasOauth) {
    auth = {
      type: 'OAuth2',
      user: fromEmail,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    };
  } else {
    throw new Error(
      'Mail credentials missing. Configure OAuth values or EMAIL_PASS (Gmail App Password).'
    );
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth,
    connectionTimeout: 15000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
}

const transporter = createTransporter();

// Verify mail connection once at startup for early feedback.
transporter.verify((err) => {
  if (err) {
    if (String(err.message || '').toLowerCase().includes('invalid_grant')) {
      console.error('❌ Mail transporter verification failed: invalid_grant (OAuth refresh token rejected).');
      console.error('   Fix: switch to Gmail App Password by setting MAIL_AUTH_MODE=app-password and EMAIL_PASS in backend_server/.env');
    } else {
      console.error('❌ Mail transporter verification failed:', err.message);
    }
  } else {
    console.log(`✅ Mail transporter ready (${smtpHost}:${smtpPort}) [mode=${authMode}]`);
  }
});

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Contact form endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // ── reCAPTCHA v3 verification ────────────────────────────────────────
  if (!recaptchaToken) {
    return res.status(400).json({ error: 'reCAPTCHA token missing.' });
  }
  try {
    const verifyRes = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        },
      }
    );
    const { success, score } = verifyRes.data;
    const configuredMinScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? '0.3');
    const minScore = Number.isFinite(configuredMinScore) ? configuredMinScore : 0.3;
    console.log(`🤖 reCAPTCHA — success: ${success}, score: ${score}, minScore: ${minScore}`);
    if (!success || score < minScore) {
      return res.status(400).json({ error: 'reCAPTCHA failed. Possible bot detected.' });
    }
  } catch (err) {
    console.error('reCAPTCHA verification error:', err.message);
    return res.status(500).json({ error: 'Could not verify reCAPTCHA. Try again.' });
  }
  // ─────────────────────────────────────────────────────────────────────

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  const adminMailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: toEmail,
    replyTo: email,
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed;">New Message from Soleno.AI Contact Form</h2>
        <hr style="border-color: #e5e7eb;">
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background:#f5f3ff; padding:16px; border-radius:8px; border-left:4px solid #7c3aed;">
          ${safeMessage}
        </div>
        <hr style="border-color: #e5e7eb; margin-top:24px;">
        <p style="color:#6b7280; font-size:12px;">Sent via Soleno.AI Contact Form</p>
      </div>
    `,
  };

  const userMailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to: email,
    subject: 'We received your message - Soleno.AI',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #111827;">Thanks for contacting Soleno.AI</h2>
        <p>Hi ${safeName},</p>
        <p>We received your message and our team will get back to you soon.</p>
        <div style="background:#f9fafb; padding:16px; border-radius:8px; border:1px solid #e5e7eb;">
          <p style="margin:0 0 8px 0;"><strong>Your message:</strong></p>
          <p style="margin:0; color:#374151;">${safeMessage}</p>
        </div>
        <p style="margin-top:20px;">Best regards,<br />Soleno.AI Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    console.log(`✅ Admin + confirmation emails sent for ${name} (${email})`);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    res.status(500).json({
      error: 'Failed to send email. Check SMTP credentials/network and try again.',
      details: error.message,
    });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('Soleno.AI Email Server is running ✅');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
