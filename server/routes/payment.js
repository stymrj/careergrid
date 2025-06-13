const express    = require('express');
const nodemailer = require('nodemailer');
const router     = express.Router();

router.post('/', async (req, res) => {
  const { name, email, product, payment_id } = req.body;
  if (!name || !email || !product || !payment_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"CareerGrid" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🎉 Your ChatGPT Pro Access is Ready!',
      html: `
        <h2>Hello ${name},</h2>
        <p>✅ Your payment was successful!</p>
        <ul>
          <li><strong>Product:</strong> ${product}</li>
          <li><strong>Payment ID:</strong> ${payment_id}</li>
        </ul>
        <p>Enjoy your access! 🚀</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email Error:', error);
    res.status(500).json({ error: 'Email sending failed' });
  }
});

module.exports = router;
