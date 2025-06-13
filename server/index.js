// server/index.js
const express   = require('express');
const cors      = require('cors');
const dotenv    = require('dotenv');
const connectDB = require('./config/db');

console.log('▶️ Loading server/index.js');   // ← Debug line

dotenv.config();
connectDB();

const app = express();
// … your CORS & express.json() …

app.get('/', (_, res) => res.send('✅ Backend running'));
// ... your requires, middleware, mounts ...

app.use('/api/auth',  require('./routes/authRoutes'));
app.use('/api/user',  require('./routes/userRoutes'));
app.use('/api/blogs', require('./routes/blogs'));

// DEBUG: list all registered routes
if (app._router && app._router.stack) {
  console.log('🔍 Registered routes:');
  app._router.stack
    .filter(layer => layer.route)
    .forEach(layer => {
      const methods = Object.keys(layer.route.methods).join(',').toUpperCase();
      console.log(`  ${methods} ${layer.route.path}`);
    });
} else {
  console.log('⚠️ No routes found on app._router');
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
