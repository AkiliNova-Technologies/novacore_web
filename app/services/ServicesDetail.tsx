"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, LineChart, Lightbulb, Briefcase } from "lucide-react";


const services = [
  {
    id: "business-strategy",
    icon: Building2,
    title: "Business Strategy & Advisory",
    description:
      "We help leaders make informed decisions with confidence. Our strategic advisory services ensure your organization has a clear direction and actionable roadmap for growth.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", // Executive team strategizing around table
    includes: [
      "Strategic planning & roadmapping",
      "Market & competitive analysis",
      "Business model development",
      "Growth & expansion strategy",
      "M&A advisory support",
      "Investment readiness assessment",
    ],
    outcome:
      "Clear priorities, aligned leadership, and actionable plans that drive measurable results.",
  },
  {
    id: "operational-excellence",
    icon: LineChart,
    title: "Operational Excellence",
    description:
      "We identify inefficiencies and redesign processes for peak performance. Our operational consulting helps organizations achieve sustainable improvements in productivity and cost efficiency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Business analytics and charts
    includes: [
      "Process mapping & optimization",
      "Performance metrics (KPIs)",
      "Organizational structure design",
      "Workflow optimization",
      "Cost efficiency improvement",
      "Quality management systems",
    ],
    outcome:
      "Leaner operations, measurable performance gains, and sustainable competitive advantage.",
  },
  {
    id: "digital-transformation",
    icon: Lightbulb,
    title: "Digital Transformation",
    description:
      "We help businesses adopt technology that supports real business goals. Our digital advisory ensures your technology investments deliver tangible value and scale with your business.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop", // Digital interface/technology concept
    includes: [
      "Digital strategy development",
      "Systems assessment & roadmap",
      "Website & platform strategy",
      "CRM & workflow automation",
      "Data & reporting frameworks",
      "Technology vendor selection",
    ],
    outcome:
      "Smarter systems that scale with your business and deliver measurable ROI.",
  },
  {
    id: "corporate-advisory",
    icon: Briefcase,
    title: "Corporate Advisory & Support",
    description:
      "Targeted expertise when leadership teams need it most. Our corporate advisory services provide senior-level support during critical periods of change and transition.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop", // Boardroom/executive meeting
    includes: [
      "Executive advisory services",
      "Change management support",
      "Interim project leadership",
      "Stakeholder management",
      "Governance support",
      "Board advisory services",
    ],
    outcome:
      "Confident leadership during periods of change and organizational transition.",
  },
];

export default function ServicesDetail() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Comprehensive Consulting Services for Growth-Oriented Organizations
          </h2>
          <p className="text-gray-600 text-lg">
            NovaCore Consulting helps organizations define clear strategic direction,
            improve operational performance, and leverage digital tools for sustainable
            growth. Our approach is collaborative, structured, and tailored to each
            client&apos;s unique context.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Icon Badge */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="section-label text-navy/70 mb-4">
                    Service {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8">{service.description}</p>

                  {/* What's Included */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-navy mb-4">What&apos;s Included:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="bg-navy rounded-xl p-6 text-white">
                    <h4 className="font-bold mb-2">Expected Outcome:</h4>
                    <p className="text-white/80 text-sm">{service.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="bg-orange-50 rounded-2xl p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team to discuss your challenges and
              explore how NovaCore can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}