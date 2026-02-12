"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Target, Clock, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Tech Startup Growth Strategy",
    description:
      "Helped a technology startup define their go-to-market strategy and scale operations across three African markets.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop", // Modern tech startup office
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
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop", // Medical/healthcare professional
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
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", // Financial/tech dashboard
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
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop", // Community/development work
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
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop", // Manufacturing/industrial
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
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop", // Team collaboration/business expansion
    location: "Kampala, Uganda",
    industry: "Professional Services",
    duration: "6 months",
    year: "2022-2023",
    category: "Business Strategy",
    slug: "professional-services-expansion",
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 text-navy/70 text-sm font-medium tracking-wide mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            Recent Projects
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-navy">Our</span>{" "}
            <span className="text-orange-500 italic">Completed Projects</span>
          </h2>
        </div>

        {/* Case Studies List */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-64 lg:h-auto min-h-[350px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  {/* Tags */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-navy text-sm font-medium shadow-lg">
                      {study.year}
                    </span>
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-navy text-sm font-medium shadow-lg">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-8">{study.description}</p>

                  {/* Meta Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span>Location: {study.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span>Industry: {study.industry}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span>Duration: {study.duration}</span>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}