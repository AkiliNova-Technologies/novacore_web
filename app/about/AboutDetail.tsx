"use client";

import Image from "next/image";
import { Target, Eye, Sparkles, Users } from "lucide-react";

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
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="section-label text-navy/70 mb-4">Our Story</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Building Resilient Businesses Through Strategy, Insight, and
              Execution
            </h2>
            <div className="space-y-4 text-gray-600">
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
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="NovaCore Consulting team collaborating"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-navy rounded-2xl p-8 lg:p-10 text-white diagonal-pattern">
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To empower organizations with practical, data-driven strategies
              that accelerate growth, improve efficiency, and build long-term
              resilience.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a trusted consulting partner for forward-thinking
              organizations across emerging and global markets.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="section-label text-navy/70 justify-center mb-4">
              Our Values
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-navy">What We</span>{" "}
              <span className="text-orange-500 italic">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                  <value.icon className="w-10 h-10 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label text-navy/70 mb-4">
                Industries We Serve
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                Expertise Across Sectors
              </h2>
              <p className="text-gray-600 mb-8">
                Our consultants have deep experience working with organizations
                across multiple industries, bringing sector-specific insights
                and proven methodologies to every engagement.
              </p>
              <div className="space-y-4">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="font-medium text-navy">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                  alt="Diverse industries we serve"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
