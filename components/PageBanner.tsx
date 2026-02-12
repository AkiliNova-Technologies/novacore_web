"use client";

import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 dotted-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-500 mb-6">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-navy hover:text-orange-500 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-orange-500 font-medium">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="text-navy">/</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Bottom Navy Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-navy diagonal-pattern" />
    </section>
  );
}