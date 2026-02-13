"use client";

import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-light py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-navy/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            FAQs
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>

          {/* Heading - Responsive typography */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy block sm:inline">Question?</span>{" "}
            <span className="text-orange-500 italic block sm:inline">
              Look here.
            </span>
          </h2>
        </div>

        {/* Content Grid - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* FAQ Accordion - Full width on mobile */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-3 sm:space-y-4">
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
                  className="w-full flex items-start sm:items-center justify-between p-4 sm:p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`font-bold text-base sm:text-lg ${
                      openIndex === index ? "text-navy" : "text-navy"
                    } pr-2 flex-1`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-2 sm:ml-4 transition-colors ${
                      openIndex === index
                        ? "bg-navy text-white"
                        : "bg-gray-100 text-navy"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
                  </div>
                </button>
                
                {/* Expandable content with animation */}
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="border-t border-gray-100 pt-3 sm:pt-4">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar - Full width on mobile, appears first */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Contact Card - Responsive padding */}
            <div className="bg-navy rounded-2xl p-6 sm:p-8 text-center diagonal-pattern">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                You have different questions?
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-5 sm:mb-6">
                Our team will answer all your questions. We ensure a quick
                response.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>

            {/* Phone Card - Responsive layout */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 truncate">
                    Your Success, Our Priority
                  </div>
                  <div className="text-base sm:text-lg font-bold text-navy truncate">
                    24/7 Support
                  </div>
                  <a
                    href="tel:+256700000000"
                    className="text-sm sm:text-base text-orange-500 font-medium hover:underline inline-block truncate"
                  >
                    +256 700 000 000
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile-only: Additional CTA for easy contact */}
            {isMobile && (
              <div className="bg-white/50 rounded-2xl p-4 border border-orange-500/20">
                <p className="text-xs text-navy/70 text-center">
                  Need immediate assistance? Call our support team
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Decorative Elements - Subtle, preserves theme */}
        <div className="lg:hidden absolute left-0 top-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -z-10" />
        <div className="lg:hidden absolute right-0 bottom-1/4 w-40 h-40 bg-navy/5 rounded-full blur-2xl -z-10" />
      </div>
    </section>
  );
}