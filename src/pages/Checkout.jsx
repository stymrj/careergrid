import React, { useState } from 'react';
import { loadRazorpay } from '../utils/razorpay'; // We'll make this next

export default function Checkout() {
  const [email, setEmail] = useState('');

  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your real Razorpay key
      amount: 19900, // ₹199 in paise
      currency: 'INR',
      name: 'CareerGrid',
      description: 'ChatGPT Subscription - 1 Month',
      handler: function (response) {
        // Here, you would call your backend to save payment & send email
        alert("Payment successful! You’ll receive access on your email shortly.");
      },
      prefill: {
        email: email,
      },
      theme: {
        color: '#22c55e',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Get ChatGPT Pro Access</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handlePayment}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
        >
          Pay ₹199 & Subscribe
        </button>
      </div>
    </div>
  );
}
