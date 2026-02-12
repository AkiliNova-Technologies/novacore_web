"use client";

import Link from "next/link";
import { ArrowRight, Building2, LineChart, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Strategy & Advisory",
    description:
      "Strategic planning, market analysis, business model development, and growth strategy. Clear priorities, aligned leadership, and actionable plans.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  },
  {
    icon: LineChart,
    title: "Operational Excellence",
    description:
      "Process optimization, performance metrics, organizational design, and productivity improvement. Leaner operations and measurable performance gains.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description:
      "Digital strategy, systems assessment, CRM & workflow automation, and data frameworks. Smarter systems that scale with your business.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
  },
];

export default function Services() {
  return (
    <section className="relative bg-gray-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 text-navy/70 text-sm font-medium tracking-wide mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            Our Services
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-navy">Services That Fit</span>
            <br />
            <span className="text-orange-500 italic">Your Needs</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Icon Badge */}
                <div className="absolute bottom-10 left-6 translate-y-1/2 w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white shadow-xl">
                  <service.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-12">
                <h3 className="text-xl font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Bottom Border Accent */}
              <div
                className={`h-1 absolute bottom-0 w-full ${index === 0 ? "bg-transparent group-hover:bg-orange-500" : "bg-transparent group-hover:bg-orange-500"} transition-colors`}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              View All Services
            </Link>
            <Link
              href="/services"
              className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}