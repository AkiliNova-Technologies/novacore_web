"use client";

import { useState } from "react";
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
  const postsPerPage = 6;

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

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Article */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
                Featured Article
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-full mb-4">
                {featuredPost.category}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <User className="w-4 h-4 text-orange-500" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Tag className="w-4 h-4 text-orange-500" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Link
                href={`/insights/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors group"
              >
                Read Featured Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-gray-100 text-navy hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full lg:w-64 px-5 py-2 pl-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                {/* Meta */}
                <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-orange-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-orange-500" />
                    {post.author}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read Time & Link */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {currentPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-navy mb-2">No insights found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-16">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-navy text-white hover:bg-orange-500"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full font-medium transition-colors ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-navy hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-navy text-white hover:bg-orange-500"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}