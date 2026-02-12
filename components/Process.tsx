"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronsRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    subtitle: "& Discover",
    description:
      "We begin by understanding your business, challenges, and goals through in-depth analysis and stakeholder engagement.",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "& Strategize",
    description:
      "We co-create practical strategies grounded in data and context, ensuring alignment with your organizational capacity.",
  },
  {
    number: "03",
    title: "Deliver",
    subtitle: "& Implement",
    description:
      "We support implementation and track progress against defined outcomes, ensuring measurable results.",
  },
  {
    number: "04",
    title: "Optimize",
    subtitle: "& Refine",
    description:
      "We continuously refine and adjust as conditions change, building long-term resilience and adaptability.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 dotted-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            {/* Section Label */}
            <div className="section-label text-navy/70">Our Approach</div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-navy">How We</span>{" "}
              <span className="text-orange-500 italic">Get It Done</span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/about#approach"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/about#approach"
              className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white hover:bg-navy-light transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-orange-500" style={{ width: "75%" }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Number Badge */}
                <div className="flex items-center gap-4 mb-12">
                  <div className={`
                    px-4 py-2 rounded-full text-sm font-bold
                    ${index === 0 
                      ? "bg-navy text-white" 
                      : "bg-white text-navy border-2 border-gray-200"
                    }
                  `}>
                    STEP {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronsRight className="hidden lg:block w-6 h-6 text-orange-500" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">
                    <span className="text-navy">{step.title}</span>
                    <br />
                    <span className="text-orange-500">{step.subtitle}</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Image */}
        {/* <div className="mt-16 flex justify-start">
          <div className="relative w-64 h-48">
            <Image
              src="/images/process-decoration.png"
              alt="Strategy illustration"
              fill
              className="object-contain"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}