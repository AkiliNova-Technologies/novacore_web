"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

interface Insight {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  readTime: string;
  content: string;
  tags: string[];
}

export default function InsightDetails({ insight }: { insight: Insight }) {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={insight.heroImage}
            alt={insight.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />
          <div className="absolute inset-0 dotted-pattern opacity-20" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group absolute left-4 top-0 lg:left-0"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          {/* Category Badge */}
          <div className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-full mb-6">
            {insight.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {insight.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {insight.subtitle}
          </p>

          {/* Author & Meta */}
          <div className="flex items-center justify-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-400" />
              {insight.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              {insight.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Author Bar */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-500">
                <Image
                  src={insight.authorImage}
                  alt={insight.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-navy">{insight.author}</div>
                <div className="text-sm text-gray-500">{insight.authorRole}</div>
              </div>
            </div>
            
            {/* Share Button */}
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Share2 className="w-4 h-4 text-navy" />
                <span className="text-sm font-medium text-navy">Share</span>
              </button>
              
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3">
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3">
                    <Twitter className="w-4 h-4 text-sky-500" />
                    <span>Twitter</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-blue-700" />
                    <span>LinkedIn</span>
                  </button>
                  <button 
                    onClick={handleCopyLink}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                  >
                    <LinkIcon className="w-4 h-4 text-gray-600" />
                    <span>Copy Link</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-12 shadow-xl">
            <Image
              src={insight.heroImage}
              alt={insight.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <article 
            className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-p:text-gray-600 prose-strong:text-navy prose-ul:list-disc prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-3">
              <Tag className="w-5 h-5 text-orange-500" />
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-navy hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-orange-500 flex-shrink-0">
                <Image
                  src={insight.authorImage}
                  alt={insight.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-navy mb-2">About {insight.author}</h4>
                <p className="text-gray-600 text-sm mb-3">
                  {insight.authorRole} at NovaCore Consulting. {insight.author} specializes in {insight.category.toLowerCase()} and has helped numerous organizations achieve measurable results through strategic advisory.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Meet our team
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}