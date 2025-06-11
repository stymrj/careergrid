import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Routes
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import PYQs from "./pages/PYQs";
import Interview from "./pages/Interview";
import Jobs from "./pages/Jobs";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import AiTools from "./pages/AiTools";
import Roadmaps from './pages/Roadmaps';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';




// Auth Pages
// ✅ Clean imports
import BlogList from './pages/blogs/BlogList';
import BlogDetail from './pages/blogs/BlogDetail';
import Login from './pages/auth/Login';
import Profile from './pages/auth/Profile';

export default function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/pyqs" element={<PYQs />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aitools" element={<AiTools />} />
        <Route path="/roadmaps" element={<Roadmaps />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        {/* Blogs */}
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />

        {/* Routes for the Footer Functions */}

        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}
