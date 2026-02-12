"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const insights = [
  {
    category: "Business Strategy",
    date: "January 15, 2026",
    title: "5 Key Strategies for Sustainable Business Growth in 2026",
    excerpt:
      "Discover the essential strategies that forward-thinking organizations are using to drive sustainable growth in today's dynamic market.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    slug: "strategies-sustainable-growth-2026",
  },
  {
    category: "Digital Transformation",
    date: "January 10, 2026",
    title: "Digital Transformation: Beyond Technology Implementation",
    excerpt:
      "Understanding why successful digital transformation requires more than just new technology—it demands organizational change.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
    slug: "digital-transformation-beyond-technology",
  },
  {
    category: "Operations",
    date: "January 5, 2026",
    title: "Operational Excellence: Building Resilient Business Processes",
    excerpt:
      "Learn how to design and implement processes that not only improve efficiency but also build organizational resilience.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    slug: "operational-excellence-resilient-processes",
  },
];

export default function Blog() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 dotted-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            {/* Section Label */}
            <div className="section-label text-navy/70">News & Insights</div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-navy">Our Latest</span>{" "}
              <span className="text-orange-500 italic">News & Insights</span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/insights"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              View All Insights
            </Link>
            <Link
              href="/insights"
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

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((post, index) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-navy text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  {post.date}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/insights/${post.slug}`}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Bottom Border Accent */}
              <div
                className={`h-1 ${index === 0 ? "bg-transparent group-hover:bg-orange-500" : "bg-transparent group-hover:bg-orange-500"} transition-colors`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}