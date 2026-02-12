"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const missionStatements = [
  {
    title: "Our Mission",
    content:
      "To empower organizations with practical, data-driven strategies that accelerate growth, improve efficiency, and build long-term resilience.",
  },
  {
    title: "Our Vision",
    content:
      "To be a trusted consulting partner for forward-thinking organizations across emerging and global markets.",
  },
  {
    title: "Our Values",
    content:
      "Clarity, Integrity, Execution, and Partnership. We simplify complexity, provide honest insights, measure success by outcomes, and work alongside our clients.",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % missionStatements.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + missionStatements.length) % missionStatements.length
    );
  };

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Top Navy Bar with Diagonal Pattern */}
      {/* <div className="absolute top-0 left-0 right-0 h-20 bg-navy diagonal-pattern" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Section Label */}
            <div className="section-label text-navy/70">Who We Are</div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-orange-500 italic">Delivering Excellence</span>
              <br />
              <span className="text-navy">in Every Engagement</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg">
              NovaCore Consulting is a team of experienced strategists, analysts,
              and digital advisors with backgrounds in consulting, technology, and
              operations. We bring together analytical rigor and practical
              execution.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/about"
                className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Content - Decorative Element */}
          <div className="hidden lg:flex justify-end relative">
            {/* Abstract Compass/Target Decoration - represents direction & strategy */}
            <svg
              width="200"
              height="300"
              viewBox="0 0 200 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              {/* Vertical guide line */}
              <rect x="98" y="0" width="4" height="100" fill="#1a2b4a" />
              
              {/* Main compass circle */}
              <circle cx="100" cy="160" r="55" stroke="#1a2b4a" strokeWidth="4" fill="none" />
              <circle cx="100" cy="160" r="40" stroke="#1a2b4a" strokeWidth="2" fill="none" opacity="0.4" />
              
              {/* Compass points */}
              <path d="M100 105 L108 130 L100 125 L92 130 Z" fill="#f97316" />
              <path d="M100 215 L108 190 L100 195 L92 190 Z" fill="#1a2b4a" />
              <path d="M45 160 L70 152 L65 160 L70 168 Z" fill="#1a2b4a" opacity="0.6" />
              <path d="M155 160 L130 152 L135 160 L130 168 Z" fill="#1a2b4a" opacity="0.6" />
              
              {/* Center dot */}
              <circle cx="100" cy="160" r="8" fill="#f97316" />
              <circle cx="100" cy="160" r="4" fill="white" />
              
              {/* Accent elements */}
              <circle cx="100" cy="250" r="12" fill="#1a2b4a" opacity="0.2" />
              <circle cx="100" cy="250" r="6" fill="#f97316" />
              
              {/* Small decorative dots */}
              <circle cx="60" cy="100" r="4" fill="#f97316" opacity="0.5" />
              <circle cx="150" cy="220" r="3" fill="#1a2b4a" opacity="0.3" />
              
              {/* Floating star accents */}
              <text x="40" y="140" fill="#f97316" fontSize="16" opacity="0.7">✦</text>
              <text x="155" y="120" fill="#1a2b4a" fontSize="12" opacity="0.4">✦</text>
            </svg>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Business partnership"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-6 right-6 bg-orange-500 text-white px-6 py-4 rounded-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm font-medium">Years</div>
              <div className="text-xs opacity-90">of Experience</div>
            </div>
          </div>

          {/* Mission Slider Card */}
          <div className="bg-navy rounded-2xl p-8 lg:p-10 text-white diagonal-pattern relative">
            <div className="min-h-[200px]">
              <p className="text-lg leading-relaxed opacity-90">
                {missionStatements[currentSlide].content}
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
              <div className="text-orange-500 font-semibold text-lg">
                {missionStatements[currentSlide].title}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quote Mark Decoration */}
            <div className="absolute top-8 right-8 text-white/10 text-8xl font-serif">
              &ldquo;
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="hidden lg:block absolute left-10 bottom-20">
        <div className="text-orange-500 opacity-40">
          <span className="text-xl">✦</span>
        </div>
      </div>
      <div className="hidden lg:block absolute right-20 top-32">
        <div className="text-navy opacity-20">
          <span className="text-2xl">✦</span>
        </div>
      </div>
    </section>
  );
}