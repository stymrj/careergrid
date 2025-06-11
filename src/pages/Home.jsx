import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="text-black bg-[#f5f5f5] w-screen min-h-screen overflow-y-auto scroll-smooth">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12">
        {/* Tagline */}
        <p className="text-gray-600 text-base md:text-lg mb-3 font-medium">
          Empowering the Next Generation of Tech Talent 🚀
        </p>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
          Join <span className="text-red-500">1,000+ Developers</span> <br />
          <span className="text-green-600">Level Up for Jobs, Internships & Placements</span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-gray-600 text-sm sm:text-base max-w-xl">
          At <strong>CareerGrid</strong>, we help students and professionals prepare for tech roles with 
          curated resources, job updates, interview prep, and India's most vibrant peer community.
        </p>

        {/* CTA Button */}
        <a
          href="https://whatsapp.com/channel/0029VaccquKFHWq514zVzA35"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 px-6 py-3 text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition flex items-center gap-2"
        >
          Join Our WhatsApp Channel <FaWhatsapp className="text-xl" />
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-600">
          <a
            href="https://wa.me/+917091298828"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/stymrj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.linkedin.com/in/careergrid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@satyam_gupta_vlogs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaDiscord />
          </a>
        </div>
      </section>
    </div>
  );
}
