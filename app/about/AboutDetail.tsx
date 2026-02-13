"use client";

import Image from "next/image";
import { Target, Eye, Sparkles, Users } from "lucide-react";
import { useState, useEffect } from "react";

const values = [
  {
    icon: Sparkles,
    title: "Clarity",
    description: "We simplify complexity and focus on what truly matters.",
  },
  {
    icon: Target,
    title: "Integrity",
    description:
      "We provide honest insights, grounded in evidence—not assumptions.",
  },
  {
    icon: Eye,
    title: "Execution",
    description: "We measure success by outcomes, not presentations.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside our clients, not above them.",
  },
];

const industries = [
  "Professional Services",
  "Healthcare & Education",
  "Technology & Startups",
  "Manufacturing & Logistics",
  "NGOs & Development Organizations",
];

export default function AboutDetail() {
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
        {/* Story Section - Responsive */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Content */}
          <div className="w-full order-2 lg:order-1">
            <div className="section-label text-navy/70 text-sm sm:text-base mb-3 sm:mb-4">
              Our Story
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
              Building Resilient Businesses Through Strategy, Insight, and
              Execution
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                NovaCore Consulting was founded on a simple belief: strategy
                only matters when it delivers measurable results.
              </p>
              <p>
                In a rapidly changing business environment, organizations face
                increasing pressure to adapt, scale, and remain competitive.
                NovaCore partners with ambitious companies to clarify direction,
                optimize operations, and implement digital solutions that drive
                sustainable growth.
              </p>
              <p>
                We operate at the intersection of strategy, operations, and
                technology, helping businesses move from complexity to
                clarity—and from planning to execution.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl w-full">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="NovaCore Consulting team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            {/* Experience Badge - Responsive */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-3 bg-orange-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">10+</div>
              <div className="text-xs sm:text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {/* Mission Card - Navy */}
          <div className="bg-navy rounded-2xl p-6 sm:p-8 lg:p-10 text-white diagonal-pattern">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              To empower organizations with practical, data-driven strategies
              that accelerate growth, improve efficiency, and build long-term
              resilience.
            </p>
          </div>

          {/* Vision Card - Gray */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-navy rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To be a trusted consulting partner for forward-thinking
              organizations across emerging and global markets.
            </p>
          </div>
        </div>

        {/* Values - Responsive */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="section-label text-navy/70 text-sm sm:text-base justify-center mb-3 sm:mb-4">
              Our Values
            </div>
            <h2 className="flex flex-row gap-2 justify-center text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-navy block sm:inline">What We</span>{" "}
              <span className="text-orange-500 italic block sm:inline">
                Stand For
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                {/* Icon Container - Responsive */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-500 transition-colors">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-navy group-hover:text-white transition-colors" />
                </div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3">
                  {value.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm px-2">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries - Responsive */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="w-full order-2 lg:order-1">
              <div className="section-label text-navy/70 text-sm sm:text-base mb-3 sm:mb-4">
                Industries We Serve
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
                Expertise Across Sectors
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Our consultants have deep experience working with organizations
                across multiple industries, bringing sector-specific insights
                and proven methodologies to every engagement.
              </p>
              
              {/* Industry List - Responsive */}
              <div className="space-y-3 sm:space-y-4">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-navy">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl w-full">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                  alt="Diverse industries we serve"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Decorative Elements */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}
    </section>
  );
}