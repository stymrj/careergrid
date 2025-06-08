import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-12 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} CareerGrid. All rights reserved.
    </footer>
  );
}
