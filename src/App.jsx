import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import PYQs from './pages/PYQs';
import Interview from './pages/Interview';
import Jobs from './pages/Jobs';
import Blogs from './pages/Blogs';
import Products from './pages/Products';
import Login from './auth/Login';
import Profile from './auth/Profile';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/pyqs" element={<PYQs />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aitools" element={<AiTools />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}
