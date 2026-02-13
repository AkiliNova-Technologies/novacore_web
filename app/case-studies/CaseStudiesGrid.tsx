"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Target, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const caseStudies = [
  {
    title: "Tech Startup Growth Strategy",
    description:
      "Helped a technology startup define their go-to-market strategy and scale operations across three African markets.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    location: "Nairobi, Kenya",
    industry: "Technology & Startups",
    duration: "6 months",
    year: "2024-2025",
    category: "Business Strategy",
    slug: "tech-startup-growth-strategy",
  },
  {
    title: "Healthcare Operations Optimization",
    description:
      "Redesigned operational processes for a regional healthcare provider, resulting in 40% efficiency improvement.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    location: "Kampala, Uganda",
    industry: "Healthcare",
    duration: "8 months",
    year: "2023-2024",
    category: "Operational Excellence",
    slug: "healthcare-operations-optimization",
  },
  {
    title: "Financial Services Digital Transformation",
    description:
      "Led digital transformation initiative for a financial services firm, modernizing their customer experience platform.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    location: "Kigali, Rwanda",
    industry: "Financial Services",
    duration: "12 months",
    year: "2023-2024",
    category: "Digital Transformation",
    slug: "financial-services-digital-transformation",
  },
  {
    title: "NGO Strategic Planning",
    description:
      "Developed comprehensive 5-year strategic plan for international development organization operating in East Africa.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop",
    location: "Dar es Salaam, Tanzania",
    industry: "NGO & Development",
    duration: "4 months",
    year: "2023",
    category: "Business Strategy",
    slug: "ngo-strategic-planning",
  },
  {
    title: "Manufacturing Process Improvement",
    description:
      "Implemented lean manufacturing principles resulting in 30% cost reduction and improved quality metrics.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop",
    location: "Nairobi, Kenya",
    industry: "Manufacturing",
    duration: "10 months",
    year: "2022-2023",
    category: "Operational Excellence",
    slug: "manufacturing-process-improvement",
  },
  {
    title: "Professional Services Expansion",
    description:
      "Supported a professional services firm in expanding to two new markets with comprehensive market entry strategy.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
    location: "Kampala, Uganda",
    industry: "Professional Services",
    duration: "6 months",
    year: "2022-2023",
    category: "Business Strategy",
    slug: "professional-services-expansion",
  },
];

export default function CaseStudiesGrid() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Recent Projects
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy block sm:inline">Our</span>{" "}
            <span className="text-orange-500 italic block sm:inline">
              Completed Projects
            </span>
          </h2>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6 sm:space-y-7 lg:space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
            >
              <div
                className={`flex flex-col lg:grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image - Full width on mobile */}
                <div
                  className={`relative w-full h-64 sm:h-72 lg:h-auto min-h-[300px] sm:min-h-[350px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                  {/* Tags - Responsive */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-navy text-[10px] sm:text-xs lg:text-sm font-medium shadow-lg">
                      {study.year}
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-navy text-[10px] sm:text-xs lg:text-sm font-medium shadow-lg">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content - Responsive padding */}
                <div
                  className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Meta Info - Responsive */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="break-words">Location: {study.location}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="break-words">Industry: {study.industry}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="break-words">Duration: {study.duration}</span>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold hover:gap-3 transition-all py-2 text-sm sm:text-base"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile Decorative Elements - Subtle, preserves theme */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}
    </section>
  );
}