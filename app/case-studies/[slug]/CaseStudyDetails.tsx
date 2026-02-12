"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Briefcase,
  Clock,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  ArrowRight,
} from "lucide-react";

interface Result {
  metric: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface Study {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  location: string;
  industry: string;
  duration: string;
  year: string;
  category: string;
  client: string;
  challenge: string;
  approach: string[];
  solution: string;
  results: Result[];
  testimonial: Testimonial;
  relatedServices: string[];
}

export default function CaseStudyDetails({ study }: { study: Study }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover"
            priority
          />
          {/* 1. Primary dark gradient - much stronger opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />

          {/* 2. Secondary solid dark overlay for extra depth */}
          <div className="absolute inset-0 bg-black/30" />

          {/* 3. Subtle pattern overlay with reduced opacity */}
          <div className="absolute inset-0 dotted-pattern opacity-30 mix-blend-overlay" />

          {/* 4. Bottom vignette for better focus on content */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-navy/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="col-span-2">
              {/* Category Badge */}
              <div className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-full mb-6">
                {study.category}
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
                {study.title}
              </h1>

              <p className="text-xl text-white/90 mb-8">{study.subtitle}</p>

              {/* Key Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-white/50 text-sm mb-1">Client</div>
                  <div className="text-white font-semibold">{study.client}</div>
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Location</div>
                  <div className="text-white font-semibold">
                    {study.location}
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Duration</div>
                  <div className="text-white font-semibold">
                    {study.duration}
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Year</div>
                  <div className="text-white font-semibold">{study.year}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </span>
                  The Challenge
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </span>
                  Our Approach
                </h2>
                <div className="space-y-4">
                  {study.approach.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </span>
                  The Solution
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </span>
                  Results Achieved
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {study.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-colors"
                    >
                      <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
                        {result.metric}
                      </div>
                      <div className="text-navy font-medium">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Project Details Card */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Industry</div>
                      <div className="font-medium text-navy">
                        {study.industry}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium text-navy">
                        {study.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-medium text-navy">
                        {study.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Year</div>
                      <div className="font-medium text-navy">{study.year}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-white/10 text-8xl font-serif">
                  &ldquo;
                </div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-orange-500">
                      <Image
                        src={study.testimonial.image}
                        alt={study.testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        {study.testimonial.author}
                      </div>
                      <div className="text-white/60 text-sm">
                        {study.testimonial.role}
                      </div>
                      <div className="text-white/40 text-xs">
                        {study.testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy mb-4">
                  Related Services
                </h3>
                <div className="space-y-3">
                  {study.relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services#${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-3 bg-white rounded-xl hover:bg-orange-500 hover:text-white transition-colors group"
                    >
                      <span className="text-navy group-hover:text-white font-medium">
                        {service}
                      </span>
                      <ArrowRight className="w-4 h-4 float-right mt-1 text-orange-500 group-hover:text-white" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Ready to achieve similar results?
                </h3>
                <p className="text-white/70 mb-6 text-sm">
                  Let&apos;s discuss how we can help your organization drive
                  measurable growth.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors w-full"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
