// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://stymrj:123Satyam#@careergrid-cluster.xcrswyo.mongodb.net/careergrid?retryWrites=true&w=majority&appName=careergrid-cluster'
    );
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1); // Exit if connection fails
  }
};

module.exports = connectDB;
