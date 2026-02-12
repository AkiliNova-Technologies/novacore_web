"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedStudy {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function RelatedCaseStudies({ studies }: { studies: RelatedStudy[] }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Related <span className="text-orange-500 italic">Case Studies</span>
          </h2>
          <p className="text-gray-600">
            Explore more success stories from our consulting engagements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-navy text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange-500 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {study.description}
                </p>
                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}