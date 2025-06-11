import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold text-blue-400 mb-2">CareerGrid</h2>
          <p className="text-sm text-gray-300">
            Building the future of tech communities, one connection at a time.
          </p>
        </div>

        {/* Column 2 */}
<div>
  <h3 className="text-md font-semibold mb-2">Company</h3>
  <ul className="space-y-1 text-sm text-gray-400">
    <li>
      <Link to="/about" className="hover:text-blue-400">About Us</Link>
    </li>
    <li>
      <Link to="/careers" className="hover:text-blue-400">Careers</Link>
    </li>
    <li>
      <Link to="/blogs" className="hover:text-blue-400">Blogs</Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
    </li>
  </ul>
</div>

       

        {/* Column 3 */}
        <div>
          <h3 className="text-md font-semibold mb-2">Location</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Noida, Uttar Pradesh, India</li>
            <li>+917091298828</li>
            <li>Email: <a href="mailto:careergrid24@gmail.com" className="hover:text-blue-400">careergrid24@gmail.com</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-md font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund & Cancelation Policy</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700">
        © 2025 CareerGrid. All rights reserved.
      </div>
    </footer>
  );
}
