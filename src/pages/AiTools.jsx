import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function AiTools() {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', contact: '' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!user.name || !user.email || !user.contact) {
      alert('Please fill all details first.');
      return;
    }

    const options = {
      key: "rzp_test_PjDeiqrqNkrXid",
      amount: 19900,
      currency: "INR",
      name: "CareerGrid",
      description: "ChatGPT Pro - 1 Month",
      handler: function (response) {
        alert("✅ Payment successful! ID: " + response.razorpay_payment_id);

        // 🔁 Send to backend
        fetch("http://localhost:5000/api/payment-success", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...user,
            product: "ChatGPT Pro - 1 Month",
            payment_id: response.razorpay_payment_id
          })
        })
          .then(res => res.json())
          .then(data => {
            console.log("✅ Server response:", data);
            alert("Access will be sent shortly to your email.");
          })
          .catch(err => {
            console.error("❌ Backend error:", err);
            alert("There was a problem sending your access. Please contact support.");
          });
      },
      prefill: user,
      theme: { color: "#10b981" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">🚀 ChatGPT Pro Access</h2>
        <p className="text-gray-600 text-lg mb-6">
          Get premium AI access — delivered to your inbox within 30 minutes.
        </p>

        <div className="bg-white shadow-xl rounded-xl border border-green-100 p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-left">
              <h3 className="text-lg font-semibold">🎁 Limited Time Deal</h3>
              <p className="text-sm text-gray-500">Valid till <span className="text-red-600 font-medium">June 30</span></p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-green-600">₹199</span>
              <span className="line-through text-gray-400 ml-2">₹999</span>
              <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">Save 80%</span>
            </div>
          </div>

          <ul className="text-left space-y-2 text-gray-700 mb-6">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" />Instant ChatGPT Pro access</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" />Delivered to your email</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" />1 Month Validity</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" />Mobile & Desktop support</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" />No login sharing</li>
          </ul>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Buy Now
            </button>
          ) : (
            <>
              <div className="space-y-3 mb-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  onChange={handleInput}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleInput}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  name="contact"
                  type="tel"
                  placeholder="Phone"
                  onChange={handleInput}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button
                onClick={handlePayment}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
              >
                Pay ₹199 & Get Access
              </button>
            </>
          )}

          <p className="text-sm text-gray-500 mt-4">
            We'll send access details to your email after successful payment.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-6">Need help? Email <span className="underline">support@careergrid.in</span></p>
      </div>
    </div>
  );
}
