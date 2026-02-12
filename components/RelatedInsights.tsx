"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface RelatedInsight {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export default function RelatedInsights({ insights }: { insights: RelatedInsight[] }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Related <span className="text-orange-500 italic">Insights</span>
          </h2>
          <p className="text-gray-600">
            Continue exploring our latest thinking on business strategy and transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-navy text-white text-xs font-semibold rounded-full">
                    {insight.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <Calendar className="w-3 h-3 text-orange-500" />
                  {insight.date}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {insight.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}