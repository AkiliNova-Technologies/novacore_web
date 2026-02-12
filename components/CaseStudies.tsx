"use client";

import Link from "next/link";
import { MapPin, Target, Clock, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Tech Startup Growth Strategy",
    description:
      "Helped a technology startup define their go-to-market strategy and scale operations across three African markets.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    location: "Nairobi, Kenya",
    industry: "Technology & Startups",
    duration: "6 months",
    year: "2024-2025",
    category: "Business Strategy",
  },
  {
    title: "Healthcare Operations Optimization",
    description:
      "Redesigned operational processes for a regional healthcare provider, resulting in 40% efficiency improvement.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    location: "Kampala, Uganda",
    industry: "Healthcare",
    duration: "8 months",
    year: "2023-2024",
    category: "Operational Excellence",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative bg-navy pt-20 pb-5 lg:pt-20 lg:pb:5! diagonal-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 text-white/70 text-sm font-medium tracking-wide mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            Recent Projects
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Our</span>{" "}
            <span className="text-orange-500 italic">Completed Projects</span>
          </h2>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`bg-navy-light/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-64 lg:h-auto min-h-[300px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  {/* Tags */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      {study.year}
                    </span>
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
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
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-white/70 mb-8">{study.description}</p>

                  {/* Meta Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span>Location: {study.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span>Industry: {study.industry}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span>Duration: {study.duration}</span>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, "-")}`}
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}