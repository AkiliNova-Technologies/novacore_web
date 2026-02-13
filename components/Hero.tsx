"use client";

import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

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
      {/* Video Background - Preserved exactly */}
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

        {/* Multiple overlay layers - All preserved */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 dotted-pattern opacity-30 mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-navy/90 to-transparent" />
      </div>

      {/* Video Controls - Responsive positioning */}
      {/* <button
        onClick={toggleVideo}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/30"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5" />
        ) : (
          <Play className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 ml-0.5" />
        )}
      </button> */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 sm:pt-32 lg:py-24 w-full">
        {/* Top Row: Heading + Rotating Badge */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-start justify-between gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Left: Label + Heading */}
          <div className="max-w-3xl mt-10">
            {/* Section Label - Responsive */}
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/20">
              Trusted Business Advisory
            </div>

            {/* Main Heading - Responsive typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white block">Where Strategy Drives</span>
              <span className="text-orange-400 italic relative inline-block mt-2 sm:mt-0">
                Measurable Results
                <span className="absolute -bottom-2 left-0 w-16 sm:w-20 lg:w-24 h-1 bg-orange-400 rounded-full"></span>
              </span>
            </h1>
          </div>

          {/* Right: Rotating Badge - Hidden on mobile/tablet, preserved on desktop */}
          <div className="hidden lg:block">
            <div className="w-28 xl:w-32 h-28 xl:h-32 relative">
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
                <text className="text-[8px] xl:text-[10px] fill-white/90 font-medium tracking-widest uppercase">
                  <textPath href="#circlePath">
                    • Get in Touch • Get in Touch • Get in Touch
                  </textPath>
                </text>
              </svg>
              {/* Center Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="w-14 xl:w-16 h-14 xl:h-16 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors shadow-lg hover:scale-110 transform transition-transform"
                >
                  <ArrowRight className="w-5 xl:w-6 h-5 xl:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row: Service Tags + Description */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-8 mb-12 sm:mb-14 lg:mb-16">
          {/* Left: Service Tags - Responsive wrapping */}
          <div className="flex flex-wrap gap-2 sm:gap-3 max-w-md">
            {services.map((service) => (
              <span
                key={service}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white hover:bg-orange-500/20 hover:border-orange-400 transition-all cursor-pointer shadow-lg"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Right: Description - Responsive text */}
          <p className="text-white/90 text-base sm:text-lg max-w-md leading-relaxed">
            NovaCore Consulting partners with ambitious organizations to clarify
            direction, optimize operations, and implement solutions that drive
            sustainable growth.
          </p>
        </div>

        {/* CTA Buttons - Responsive sizing */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-14 lg:mb-16">
          <Link
            href="/contact"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-400 transition-all flex items-center justify-center sm:justify-start gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform text-sm sm:text-base"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30 text-sm sm:text-base text-center"
          >
            Learn More
          </Link>
        </div>

        {/* Stats Section - Responsive grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8 max-w-3xl">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative text-center sm:text-left">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-xs sm:text-sm lg:text-base font-medium">
                {stat.label}
              </div>
              {/* Divider - Hidden on mobile, visible on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 sm:h-10 lg:h-12 bg-white/20" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile-only rotating badge - Simplified version for small screens */}
        {isMobile && (
          <div className="flex justify-center mt-10 lg:hidden">
            <div className="w-20 h-20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-colors shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <svg className="w-full h-full animate-spin-slow opacity-80" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePathMobile" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text className="text-[10px] fill-white/70 font-medium tracking-widest uppercase">
                  <textPath href="#circlePathMobile">
                    • Get in Touch • Get in Touch • 
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}