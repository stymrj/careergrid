const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogs');
const contactRoutes = require('./routes/contact');
const paymentRoutes = require('./routes/payment');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://careergrid.in'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('✅ Server is up and running!'));
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/payment-success', paymentRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
