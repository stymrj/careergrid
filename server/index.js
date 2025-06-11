const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // to load variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://careergrid.in'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// ✅ Health Check
app.get('/', (req, res) => {
  res.send('✅ Server is up and running!');
});

// ✅ Payment Success API
app.post('/api/payment-success', async (req, res) => {
  const { name, email, contact, product, payment_id } = req.body;

  if (!name || !email || !product || !payment_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // stored in .env
        pass: process.env.EMAIL_PASS  // stored in .env
      }
    });

    const mailOptions = {
      from: '"CareerGrid" <careergrid24@gmail.com>',
      to: email,
      subject: '🎉 Your ChatGPT Pro Access is Ready!',
      html: `
        <h2>Hello ${name},</h2>
        <p>✅ Your payment was successful. Here are the details:</p>
        <ul>
          <li><strong>Product:</strong> ${product}</li>
          <li><strong>Payment ID:</strong> ${payment_id}</li>
          <li><strong>Validity:</strong> 1 Month</li>
        </ul>
        <p>🧠 You now have access to ChatGPT Pro.</p>
        <p>If you need help, feel free to <a href="mailto:support@careergrid.in">contact support</a>.</p>
        <br/>
        <p>Thank you,<br/>Team CareerGrid 🚀</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent to:', email);
    res.json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('❌ Email Error:', error);
    res.status(500).json({ error: 'Email sending failed' });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


// blogs.js
const express = require('express');
const router = express.Router();

let blogs = []; // Temporary in-memory store (replace with DB later)

router.get('/', (req, res) => {
  res.json(blogs);
});

router.post('/', (req, res) => {
  const { title, slug, content, coverImage, author, date } = req.body;
  if (!title || !slug || !content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newBlog = { title, slug, content, coverImage, author, date, id: blogs.length + 1 };
  blogs.push(newBlog);
  res.json({ success: true, blog: newBlog });
});

router.get('/:slug', (req, res) => {
  const blog = blogs.find(b => b.slug === req.params.slug);
  if (!blog) return res.status(404).json({ error: 'Blog not found' });
  res.json(blog);
});

module.exports = router;


const blogRoutes = require('./blogs');
app.use('/api/blogs', blogRoutes);


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'careergrid24@gmail.com',
      pass: 'rbwz jobt lhpw bbff' // Use your Gmail App Password
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'careergrid24@gmail.com',
    subject: '📨 New Contact Form Submission',
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('❌ Contact Form Error:', error);
    res.status(500).json({ error: 'Email sending failed' });
  }
});
