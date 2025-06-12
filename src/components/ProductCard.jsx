import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function ProductCard({ product }) {
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
      amount: product.price * 100,
      currency: "INR",
      name: "CareerGrid",
      description: product.title,
      handler: function (response) {
        alert("✅ Payment successful! ID: " + response.razorpay_payment_id);
        fetch("http://localhost:5000/api/payment-success", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...user,
            product: product.title,
            payment_id: response.razorpay_payment_id
          })
        })
        .then(res => res.json())
        .then(data => alert("Access will be sent shortly to your email."))
        .catch(() => alert("There was a problem sending your access. Please contact support."));
      },
      prefill: user,
      theme: { color: "#10b981" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-white shadow-xl rounded-xl border border-green-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="text-left">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-500">Valid till <span className="text-red-600 font-medium">{product.validTill}</span></p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
          {product.originalPrice && (
            <>
              <span className="line-through text-gray-400 ml-2">₹{product.originalPrice}</span>
              <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                Save {100 - Math.round((product.price / product.originalPrice) * 100)}%
              </span>
            </>
          )}
        </div>
      </div>

      <ul className="text-left space-y-2 text-gray-700 mb-6">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> {f}
          </li>
        ))}
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
            <input name="name" type="text" placeholder="Your Name" onChange={handleInput} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input name="email" type="email" placeholder="Email" onChange={handleInput} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input name="contact" type="tel" placeholder="Phone" onChange={handleInput} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>
          <button onClick={handlePayment} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
            Pay ₹{product.price} & Get Access
          </button>
        </>
      )}

      <p className="text-sm text-gray-500 mt-4">We'll send access details to your email after successful payment.</p>
    </div>
  );
}