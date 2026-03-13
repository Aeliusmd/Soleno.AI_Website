import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function handler(req, res) {
    // ── CORS headers ──────────────────────────────────────────────────────
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed.' });
    }
    // ──────────────────────────────────────────────────────────────────────

    try {
        const { name, email, message, recaptchaToken } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // ── reCAPTCHA v3 verification ─────────────────────────────────────────
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
            console.log(`🤖 reCAPTCHA — success: ${success}, score: ${score}`);
            if (!success || score < 0.5) {
                return res.status(400).json({ error: 'reCAPTCHA failed. Possible bot detected.' });
            }
        } catch (err) {
            console.error('reCAPTCHA verification error:', err.message);
            return res.status(500).json({ error: 'Could not verify reCAPTCHA. Try again.' });
        }
        // ──────────────────────────────────────────────────────────────────────

        // ── Gmail OAuth2 transporter ──────────────────────────────────────────
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
        // ──────────────────────────────────────────────────────────────────────

        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent from ${name} (${email}) - ID: ${info.messageId}`);
        return res.status(200).json({ message: 'Email sent successfully!' });

    } catch (globalError) {
        console.error('❌ Global Server error:', globalError.message);
        return res.status(500).json({ error: 'Internal Server Error. Please check Vercel Function logs.' });
    }
}
