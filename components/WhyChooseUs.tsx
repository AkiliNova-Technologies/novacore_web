"use client";

import Link from "next/link";
import { ArrowRight, Play, Cog, Users, Clock, Trophy } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Data-Driven Approach",
    description:
      "Our recommendations are grounded in rigorous analysis and evidence, not assumptions.",
  },
  {
    icon: Users,
    title: "Senior-Level Engagement",
    description:
      "Work directly with experienced consultants who understand your challenges.",
  },
  {
    icon: Clock,
    title: "Results-Focused",
    description:
      "We measure success by outcomes and impact, not presentations delivered.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "Trusted by organizations across professional services, healthcare, technology, and more.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Top Navy Bar with Diagonal Pattern */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-navy diagonal-pattern" />

      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 dotted-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            {/* Section Label */}
            <div className="section-label text-navy/70">Why Choose Us</div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-navy">Building Trust,</span>
              <br />
              <span className="text-orange-500 italic">Delivering Excellence</span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
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

          {/* Decorative Hook */}
          {/* <div className="hidden xl:block absolute top-0 right-24">
            <Image
              src="/images/hook-decoration.png"
              alt="Decorative element"
              width={120}
              height={200}
              className="object-contain"
            />
          </div> */}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop"
                alt="NovaCore team collaboration"
                className="w-full h-full object-cover"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-xl group">
                  <Play className="w-8 h-8 text-navy ml-1 group-hover:text-orange-500 transition-colors" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-navy rounded-2xl p-8 lg:p-10 diagonal-pattern">
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-navy-light rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-orange-500 transition-colors">
                    <feature.icon className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}