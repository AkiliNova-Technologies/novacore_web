"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "What services does NovaCore Consulting provide?",
    answer:
      "NovaCore provides comprehensive consulting services including Business Strategy & Advisory, Operational Excellence, Digital Transformation, and Corporate Advisory. We help organizations define strategic direction, improve operational performance, and leverage digital tools for sustainable growth.",
  },
  {
    question: "How does your consulting process work?",
    answer:
      "Our approach follows four key phases: Diagnose (understanding your business and challenges), Design (co-creating practical strategies), Deliver (supporting implementation), and Optimize (refining as conditions change). This ensures measurable results and sustainable outcomes.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across multiple sectors including Professional Services, Healthcare & Education, Technology & Startups, Manufacturing & Logistics, and NGOs & Development Organizations. Our consultants have deep experience in emerging markets.",
  },
  {
    question: "How are consulting fees structured?",
    answer:
      "Our fee structure is transparent and tailored to each engagement. We typically offer project-based fees, retainer arrangements, or performance-based models depending on the scope and nature of the work. We discuss all terms clearly during initial consultations.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer complimentary initial consultations to understand your challenges and explore how we might help. This allows us to provide relevant insights and determine if there's a good fit for collaboration.",
  },
  {
    question: "What makes NovaCore different from other consulting firms?",
    answer:
      "We combine senior-level engagement from day one, practical recommendations grounded in data, and a strong focus on implementation and measurable outcomes. We work alongside our clients as partners, not just advisors.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 text-navy/70 text-sm font-medium tracking-wide mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            FAQs
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-navy">Question?</span>{" "}
            <span className="text-orange-500 italic">Look here.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "ring-2 ring-navy shadow-lg"
                    : "shadow-card hover:shadow-card-hover"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-bold text-lg ${
                      openIndex === index ? "text-white" : "text-navy"
                    }`}
                    style={{
                      color: openIndex === index ? "#1a2b4a" : undefined,
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${
                      openIndex === index
                        ? "bg-navy text-white"
                        : "bg-gray-100 text-navy"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-navy rounded-2xl p-8 text-center diagonal-pattern">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                You have different questions?
              </h3>
              <p className="text-white/70 mb-6">
                Our team will answer all your questions. We ensure a quick
                response.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">
                    Your Success, Our Priority
                  </div>
                  <div className="text-lg font-bold text-navy">24/7 Support</div>
                  <a
                    href="tel:+256700000000"
                    className="text-orange-500 font-medium hover:underline"
                  >
                    +256 700 000 000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}