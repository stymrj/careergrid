import React from 'react';
import ProductCard from '../components/ProductCard';

export default function AiTools() {
  const products = [
    {
      title: "ChatGPT Pro - 1 Month",
      price: 199,
      originalPrice: 999,
      validTill: "June 30",
      features: [
        "Instant ChatGPT Pro access",
        "Delivered to your email",
        "1 Month Validity",
        "Mobile & Desktop support",
        "No login sharing"
      ]
    },
    {
      title: "Amazon Prime Video - 1 Month",
      price: 149,
      originalPrice: 599,
      validTill: "June 30",
      features: [
        "Access to all Prime Video shows",
        "Mobile & Desktop support",
        "Delivered via email",
        "1 Month Validity",
        "No account sharing"
      ]
    },
    {
      title: "Netflix Premium - 1 Month",
      price: 249,
      originalPrice: 799,
      validTill: "June 30",
      features: [
        "Watch on 4 devices",
        "Ultra HD + HDR",
        "Delivered via email",
        "1 Month Validity",
        "Personal account"
      ]
    }
    // ⬇️ Add more products easily in this array
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          🛒 Buy AI & Streaming Subscriptions
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Instant access after payment — no login sharing, no delays.
        </p>
      </div>

      {/* 🔁 Responsive Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        Need help? Email <span className="underline">support@careergrid.in</span>
      </div>
    </div>
  );
}
