"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 dotted-pattern opacity-30" />

      {/* Decorative Element - Left (Abstract geometric/chart icon) */}
      <div className="hidden lg:block absolute left-0 top-0">
        <svg
          width="120"
          height="200"
          viewBox="0 0 120 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
        >
          {/* Vertical line */}
          <rect x="55" y="0" width="4" height="120" fill="#1a2b4a" />
          {/* Hook circle */}
          <circle cx="57" cy="140" r="25" stroke="#1a2b4a" strokeWidth="4" fill="none" />
          {/* Inner hook detail */}
          <circle cx="57" cy="140" r="12" fill="#f97316" />
          {/* Small accent lines */}
          <rect x="45" y="50" width="24" height="3" fill="#f97316" />
          <rect x="45" y="60" width="16" height="3" fill="#1a2b4a" opacity="0.5" />
        </svg>
      </div>

      {/* Decorative Element - Right (Abstract rising bars/growth chart) */}
      <div className="hidden lg:block absolute right-0 bottom-0">
        <svg
          width="320"
          height="220"
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-90"
        >
          {/* Background shape */}
          <path
            d="M80 220 L80 120 L140 120 L140 80 L200 80 L200 40 L260 40 L260 0 L320 0 L320 220 Z"
            fill="#f97316"
            opacity="0.15"
          />
          {/* Rising bars */}
          <rect x="100" y="140" width="35" height="80" rx="4" fill="#1a2b4a" />
          <rect x="150" y="100" width="35" height="120" rx="4" fill="#1a2b4a" />
          <rect x="200" y="60" width="35" height="160" rx="4" fill="#f97316" />
          <rect x="250" y="30" width="35" height="190" rx="4" fill="#1a2b4a" />
          {/* Trend line */}
          <path
            d="M117 130 L167 90 L217 50 L267 20"
            stroke="#f97316"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Dots on trend line */}
          <circle cx="117" cy="130" r="6" fill="#f97316" />
          <circle cx="167" cy="90" r="6" fill="#f97316" />
          <circle cx="217" cy="50" r="6" fill="white" stroke="#f97316" strokeWidth="3" />
          <circle cx="267" cy="20" r="6" fill="#f97316" />
          {/* Small decorative elements */}
          <circle cx="300" cy="180" r="8" fill="#1a2b4a" opacity="0.3" />
          <circle cx="85" cy="200" r="5" fill="#f97316" opacity="0.5" />
        </svg>
      </div>

      {/* Additional floating decorative elements */}
      <div className="hidden lg:block absolute left-20 bottom-10">
        <div className="text-orange-500 opacity-60">
          <span className="text-2xl">✦</span>
        </div>
      </div>
      <div className="hidden lg:block absolute right-1/4 top-8">
        <div className="text-navy opacity-30">
          <span className="text-lg">✦</span>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 text-navy/70 text-sm font-medium tracking-wide mb-4">
          <span className="w-8 h-0.5 bg-orange-500" />
          Our Newsletter
          <span className="w-8 h-0.5 bg-orange-500" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          <span className="text-navy">Join Our Newsletter for</span>{" "}
          <span className="text-orange-500 italic">
            Exclusive Insights & Business Updates!
          </span>
        </h2>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <div className="relative w-full sm:flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              required
              className="w-full pl-16 pr-4 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}