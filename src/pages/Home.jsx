import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaLinkedinIn, FaYoutube, FaDiscord } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="text-black bg-[#f5f5f5] w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#f5f5f5]">
        <p className="text-gray-600 text-sm md:text-base mb-2">Empowering Students for Career Success</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Join <span className="text-red-500">1000+</span> Engineers<br />
          <span className="text-green-500">Preparing for Jobs, Internships & More</span>
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          CareerGrid is your gateway to structured learning, curated resources and
          India’s most impactful job-prep community.
        </p>

        <a
          href="https://whatsapp.com/channel/0029VaccquKFHWq514zVzA35"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-2 text-green-500 border border-green-500 rounded-full hover:bg-green-500 hover:text-white flex items-center gap-2"
        >
          Become a member <FaWhatsapp className="text-xl" />
        </a>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="https://wa.me/+917091298828" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></a>
          <a href="https://t.me/stymrj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTelegramPlane /></a>
          <a href="https://www.linkedin.com/in/careergrid" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@satyam_gupta_vlogs" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500"><FaDiscord /></a>
        </div>
      </section>
    </div>
  );
}
