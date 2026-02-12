"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    title: "Transformative Partnership!",
    content:
      "NovaCore helped us clarify our strategy and align our leadership team around a clear growth plan. The impact was immediate and the results exceeded our expectations.",
    author: "Sarah Chen",
    role: "Managing Director",
    company: "Velocity Professional Services",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop", // Professional woman
  },
  {
    rating: 5,
    title: "Exceptional Results!",
    content:
      "Their operational review uncovered inefficiencies we had overlooked for years. We saw real performance improvements within months of implementation.",
    author: "Michael Adebayo",
    role: "Chief Operating Officer",
    company: "Afri-Tech Manufacturing",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop", // Professional man
  },
  {
    rating: 5,
    title: "Strategic Excellence!",
    content:
      "What sets NovaCore apart is their ability to connect strategy with execution. They don't just advise—they help you implement and measure success.",
    author: "Amara Okafor",
    role: "Founder & CEO",
    company: "FinTech Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop", // Professional woman
  },
  {
    rating: 5,
    title: "Outstanding Support!",
    content:
      "The NovaCore team brought clarity to our digital transformation journey. Their practical approach and deep expertise made all the difference.",
    author: "David Kimani",
    role: "Director of Operations",
    company: "MediCare Hospitals",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop", // Professional man
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleTestimonials = 2;
  const maxIndex = testimonials.length - visibleTestimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="relative bg-navy py-20 lg:py-28 diagonal-pattern overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-white/70 text-sm font-medium tracking-wide mb-4">
            <span className="w-8 h-0.5 bg-orange-500" />
            Testimonials
            <span className="w-8 h-0.5 bg-orange-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Experience Shared by</span>
            <br />
            <span className="text-orange-500 italic">Our Clients</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 -ml-4 lg:-ml-12">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? "bg-white/5 text-white/30 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-orange-500 backdrop-blur-sm border border-white/20"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 -mr-6 lg:-mr-12">
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all ${
                currentIndex === maxIndex
                  ? "bg-white/5 text-white/30 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-orange-500 backdrop-blur-sm border border-white/20"
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>
          </div>

          <div className="overflow-hidden px-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-4"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 h-full relative group hover:bg-white/10 transition-all duration-300">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-orange-500 fill-orange-500"
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold">
                        {testimonial.rating}.0
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      {testimonial.title}
                    </h3>

                    {/* Content */}
                    <p className="text-white/70 leading-relaxed mb-8">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-orange-500 transition-all">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-white/60 text-sm">
                          {testimonial.role}
                        </div>
                        <div className="text-white/40 text-xs">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Quote Mark */}
                    <div className="absolute top-8 right-8 text-white/5 text-8xl font-serif leading-none">
                      &ldquo;
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 bg-orange-500"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}