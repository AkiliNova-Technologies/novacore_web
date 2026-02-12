"use client";

import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const services = [
  "Business Strategy & Advisory",
  "Operational Excellence",
  "Digital Transformation",
  "Corporate Advisory",
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "10+", label: "Years of Experience" },
  { value: "95%", label: "Client Satisfaction" },
];

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative bg-navy overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="videos/business-meeting.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop"
            alt="Business consulting team"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {/* Multiple overlay layers for maximum readability */}

        {/* 1. Primary dark gradient - much stronger opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />

        {/* 2. Secondary solid dark overlay for extra depth */}
        <div className="absolute inset-0 bg-black/30" />

        {/* 3. Subtle pattern overlay with reduced opacity */}
        <div className="absolute inset-0 dotted-pattern opacity-30 mix-blend-overlay" />

        {/* 4. Bottom vignette for better focus on content */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-navy/90 to-transparent" />
      </div>

      {/* Video Controls */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-8 right-8 z-30 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/30"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5 ml-0.5" />
        )}
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        {/* Top Row: Heading + Rotating Badge */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-8">
          {/* Left: Label + Heading */}
          <div className="max-w-3xl">
            {/* Section Label */}
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
              Trusted Business Advisory
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Where Strategy Drives</span>
              <br />
              <span className="text-orange-400 italic relative">
                Measurable Results
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-orange-400 rounded-full"></span>
              </span>
            </h1>
          </div>

          {/* Right: Rotating Badge - Updated for better visibility */}
          <div className="hidden lg:block">
            <div className="w-32 h-32 relative">
              <svg
                className="w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[10px] fill-white/90 font-medium tracking-widest uppercase">
                  <textPath href="#circlePath">
                    • Get in Touch • Get in Touch • Get in Touch
                  </textPath>
                </text>
              </svg>
              {/* Center Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors shadow-lg hover:scale-110 transform transition-transform"
                >
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row: Service Tags + Description */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-16">
          {/* Left: Service Tags - Updated with glass morphism */}
          <div className="flex flex-wrap gap-3 max-w-md">
            {services.map((service) => (
              <span
                key={service}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white hover:bg-orange-500/20 hover:border-orange-400 transition-all cursor-pointer shadow-lg"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Right: Description - Updated for contrast */}
          <p className="text-white/90 text-lg max-w-md leading-relaxed">
            NovaCore Consulting partners with ambitious organizations to clarify
            direction, optimize operations, and implement solutions that drive
            sustainable growth.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-400 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30"
          >
            Learn More
          </Link>
        </div>

        {/* Stats Section - Redesigned for better visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm lg:text-base font-medium">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
