"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag, Search, ChevronLeft, ChevronRight } from "lucide-react";

const insights = [
  {
    category: "Business Strategy",
    date: "January 15, 2026",
    title: "5 Key Strategies for Sustainable Business Growth in 2026",
    excerpt:
      "Discover the essential strategies that forward-thinking organizations are using to drive sustainable growth in today's dynamic market.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    slug: "strategies-sustainable-growth-2026",
    author: "Sarah Chen",
    readTime: "6 min read",
    featured: true,
  },
  {
    category: "Digital Transformation",
    date: "January 10, 2026",
    title: "Digital Transformation: Beyond Technology Implementation",
    excerpt:
      "Understanding why successful digital transformation requires more than just new technology—it demands organizational change.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    slug: "digital-transformation-beyond-technology",
    author: "Michael Adebayo",
    readTime: "8 min read",
    featured: false,
  },
  {
    category: "Operations",
    date: "January 5, 2026",
    title: "Operational Excellence: Building Resilient Business Processes",
    excerpt:
      "Learn how to design and implement processes that not only improve efficiency but also build organizational resilience.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    slug: "operational-excellence-resilient-processes",
    author: "David Kimani",
    readTime: "5 min read",
    featured: false,
  },
  {
    category: "Corporate Advisory",
    date: "December 20, 2025",
    title: "Navigating Economic Uncertainty: A Guide for Leadership Teams",
    excerpt:
      "Practical strategies for leadership teams to navigate economic challenges while maintaining growth momentum and team morale.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    slug: "navigating-economic-uncertainty",
    author: "Amara Okafor",
    readTime: "7 min read",
    featured: false,
  },
  {
    category: "Business Strategy",
    date: "December 12, 2025",
    title: "M&A Integration: The Key to Deal Success",
    excerpt:
      "Why most M&A deals fail to deliver value and how proper integration planning can dramatically improve success rates.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=500&fit=crop",
    slug: "ma-integration-key-to-success",
    author: "James Mwangi",
    readTime: "9 min read",
    featured: false,
  },
  {
    category: "Digital Transformation",
    date: "December 5, 2025",
    title: "AI in Business: From Hype to Practical Implementation",
    excerpt:
      "A practical framework for identifying and implementing AI solutions that deliver real business value.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    slug: "ai-in-business-practical-implementation",
    author: "Sarah Chen",
    readTime: "10 min read",
    featured: false,
  },
  {
    category: "Operations",
    date: "November 28, 2025",
    title: "Supply Chain Resilience: Lessons from Global Disruptions",
    excerpt:
      "Key strategies for building supply chains that can withstand and adapt to global disruptions.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    slug: "supply-chain-resilience-lessons",
    author: "David Kimani",
    readTime: "7 min read",
    featured: false,
  },
  {
    category: "Corporate Advisory",
    date: "November 15, 2025",
    title: "ESG Strategy: Creating Value Through Sustainability",
    excerpt:
      "How organizations are transforming ESG requirements into competitive advantages and growth opportunities.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
    slug: "esg-strategy-creating-value",
    author: "Amara Okafor",
    readTime: "6 min read",
    featured: false,
  },
];

const categories = [
  "All Categories",
  "Business Strategy",
  "Digital Transformation",
  "Operations",
  "Corporate Advisory",
];

export default function InsightsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Filter insights
  const filteredInsights = insights.filter((insight) => {
    const matchesCategory = selectedCategory === "All Categories" || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredInsights.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredInsights.length / postsPerPage);

  // Featured post (first one)
  const featuredPost = insights.find(insight => insight.featured) || insights[0];

  // Mobile posts per page adjustment
  const mobilePostsPerPage = isMobile ? 4 : postsPerPage;

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Article - Responsive */}
        <div className="mb-16 sm:mb-20">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative w-full order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl w-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold">
                Featured Article
              </div>
            </div>

            {/* Content */}
            <div className="w-full order-2">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 text-white text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                {featuredPost.category}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 sm:mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              {/* Meta Info - Responsive */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                  <span className="truncate">{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                  <span className="truncate">{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm">
                  <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                  <span className="truncate">{featuredPost.readTime}</span>
                </div>
              </div>

              <Link
                href={`/insights/${featuredPost.slug}`}
                className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors group text-sm sm:text-base w-full sm:w-auto"
              >
                Read Featured Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Filters - Responsive */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Category Filter - Horizontal scroll on mobile */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:px-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max lg:flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-gray-100 text-navy hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search - Full width on mobile */}
          <div className="relative w-full lg:w-64">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 sm:px-5 py-2.5 sm:py-2 pl-10 sm:pl-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 text-sm sm:text-base"
            />
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
          </div>
        </div>

        {/* Insights Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {currentPosts.slice(0, isMobile ? 4 : currentPosts.length).map((post, index) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index > 2 ? "lazy" : "eager"}
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-navy text-white text-[10px] sm:text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-500 text-[10px] sm:text-xs mb-2 sm:mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-500" />
                    <span className="truncate">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-500" />
                    <span className="truncate">{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-navy mb-2 sm:mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-2 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read Time & Link */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] sm:text-xs text-gray-400">{post.readTime}</span>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1 sm:gap-2 text-orange-500 font-semibold text-xs sm:text-sm hover:gap-2 sm:hover:gap-3 transition-all py-1.5"
                  >
                    Read Article
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {currentPosts.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">No insights found</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Pagination - Responsive */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-12 sm:mt-16">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-navy text-white hover:bg-orange-500"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            {/* Show fewer page numbers on mobile */}
            {isMobile ? (
              <>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-medium text-sm sm:text-base transition-colors ${
                    currentPage === 1
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-navy hover:bg-gray-200"
                  }`}
                >
                  1
                </button>
                {currentPage > 2 && <span className="text-gray-400">...</span>}
                {currentPage > 1 && currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage)}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full font-medium text-sm sm:text-base bg-orange-500 text-white"
                  >
                    {currentPage}
                  </button>
                )}
                {currentPage < totalPages - 1 && <span className="text-gray-400">...</span>}
                {totalPages > 1 && (
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-medium text-sm sm:text-base transition-colors ${
                      currentPage === totalPages
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-navy hover:bg-gray-200"
                    }`}
                  >
                    {totalPages}
                  </button>
                )}
              </>
            ) : (
              // Desktop: Show all page numbers
              [...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-medium text-sm sm:text-base transition-colors ${
                    currentPage === i + 1
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-navy hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))
            )}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-navy text-white hover:bg-orange-500"
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}


      </div>

      {/* Mobile Decorative Elements */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}
    </section>
  );
}