import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import CaseStudyDetails from "./CaseStudyDetails";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";

const caseStudies = [
  {
    slug: "tech-startup-growth-strategy",
    title: "Tech Startup Growth Strategy",
    subtitle: "Scaling operations across three African markets",
    description:
      "Helped a technology startup define their go-to-market strategy and scale operations across three African markets.",
    heroImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop",
    location: "Nairobi, Kenya",
    industry: "Technology & Startups",
    duration: "6 months",
    year: "2024-2025",
    category: "Business Strategy",
    client: "FinTech Solutions Africa",
    challenge:
      "The client was a promising fintech startup with innovative products but struggling to gain traction across multiple African markets. They lacked a clear go-to-market strategy, had fragmented sales processes, and were burning through capital without seeing proportional growth. Leadership needed clarity on where to focus resources and how to scale efficiently.",
    approach: [
      "Conducted comprehensive market analysis across three target countries, assessing competition, regulatory requirements, and customer acquisition costs",
      "Facilitated strategy workshops with leadership to define clear value propositions and market positioning",
      "Developed a phased go-to-market roadmap with specific milestones and KPIs",
      "Redesigned sales processes and implemented CRM systems for better pipeline visibility",
      "Established partnerships with local distributors and payment providers",
    ],
    solution:
      "We developed a tiered market entry strategy that prioritized Kenya as the primary market, followed by Uganda and Tanzania. This included localized product positioning, strategic partnerships with telecom operators, and a restructured sales organization. We also implemented a data-driven performance management system to track real-time KPIs.",
    results: [
      {
        metric: "300%",
        label: "Revenue growth in 12 months",
      },
      {
        metric: "15,000+",
        label: "New active users acquired",
      },
      {
        metric: "3",
        label: "New markets successfully entered",
      },
      {
        metric: "40%",
        label: "Customer acquisition cost reduction",
      },
    ],
    testimonial: {
      quote:
        "NovaCore didn't just give us a strategy document—they worked alongside us to execute. Their local market knowledge and structured approach transformed our business. We now have clear direction and the confidence to pursue aggressive growth.",
      author: "Amara Okafor",
      role: "Founder & CEO",
      company: "FinTech Solutions Africa",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Business Strategy & Advisory",
      "Market Entry Strategy",
      "Sales Process Optimization",
    ],
  },
  {
    slug: "healthcare-operations-optimization",
    title: "Healthcare Operations Optimization",
    subtitle: "40% efficiency improvement across regional healthcare network",
    description:
      "Redesigned operational processes for a regional healthcare provider, resulting in 40% efficiency improvement.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    location: "Kampala, Uganda",
    industry: "Healthcare",
    duration: "8 months",
    year: "2023-2024",
    category: "Operational Excellence",
    client: "MediCare Hospitals",
    challenge:
      "MediCare Hospitals operates a network of 5 facilities across Uganda. Despite growing patient volumes, they faced declining margins, long wait times, and inconsistent quality metrics. Patient satisfaction scores were dropping, and staff morale was low due to inefficient workflows and administrative burden.",
    approach: [
      "Conducted time-motion studies across all facilities to identify bottlenecks",
      "Mapped patient journeys from registration to discharge",
      "Redesigned clinical and administrative workflows",
      "Implemented lean management principles and daily huddle system",
      "Trained department heads in continuous improvement methodologies",
    ],
    solution:
      "We implemented a comprehensive operational excellence program that included standardized clinical pathways, optimized scheduling systems, and redesigned patient flow. Key changes included centralized appointment scheduling, streamlined registration processes, and visual management boards in each department.",
    results: [
      {
        metric: "40%",
        label: "Reduction in patient wait times",
      },
      {
        metric: "35%",
        label: "Increase in patient satisfaction",
      },
      {
        metric: "25%",
        label: "Operational cost reduction",
      },
      {
        metric: "90%",
        label: "Staff satisfaction improvement",
      },
    ],
    testimonial: {
      quote:
        "The transformation at MediCare has been remarkable. NovaCore's team didn't just analyze problems—they worked shoulder-to-shoulder with our staff to implement practical solutions. Our patients notice the difference, and our team feels empowered.",
      author: "Dr. David Kimani",
      role: "Director of Operations",
      company: "MediCare Hospitals",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Operational Excellence",
      "Process Optimization",
      "Change Management",
    ],
  },
  {
    slug: "financial-services-digital-transformation",
    title: "Financial Services Digital Transformation",
    subtitle: "Modernizing customer experience and core banking systems",
    description:
      "Led a full-scale digital transformation initiative for a financial services firm, modernizing their customer experience platform and internal systems.",
    heroImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
    location: "Kigali, Rwanda",
    industry: "Financial Services",
    duration: "12 months",
    year: "2023-2024",
    category: "Digital Transformation",
    client: "Rwanda Capital Finance",
    challenge:
      "The client was operating on legacy core banking systems that limited scalability and customer experience innovation. Mobile banking adoption was low, onboarding was manual and slow, and internal reporting required significant manual effort. Competitors with digital-first models were rapidly gaining market share.",
    approach: [
      "Conducted enterprise-wide digital maturity assessment",
      "Defined a digital transformation roadmap aligned with regulatory requirements",
      "Redesigned customer onboarding journey for mobile-first experience",
      "Integrated new CRM and analytics systems with core banking platform",
      "Trained staff on digital tools and agile project methodologies",
    ],
    solution:
      "We implemented a phased transformation strategy starting with customer-facing systems. This included launching a redesigned mobile banking app, automating KYC processes, and deploying a centralized data analytics platform. Internal reporting was automated, and customer insights dashboards were introduced for leadership decision-making.",
    results: [
      { metric: "65%", label: "Increase in digital transactions" },
      { metric: "50%", label: "Reduction in onboarding time" },
      { metric: "30%", label: "Operational cost savings" },
      { metric: "45%", label: "Increase in mobile app adoption" },
    ],
    testimonial: {
      quote:
        "The transformation positioned us as a modern, customer-centric financial institution. NovaCore’s structured execution and deep understanding of digital systems gave us a competitive edge in the market.",
      author: "Jean-Paul Mukasa",
      role: "Chief Digital Officer",
      company: "Rwanda Capital Finance",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Digital Transformation",
      "Customer Experience Design",
      "Technology Advisory",
    ],
  },
  {
    slug: "ngo-strategic-planning",
    title: "NGO Strategic Planning",
    subtitle: "Building a 5-year roadmap for sustainable impact",
    description:
      "Developed a comprehensive 5-year strategic plan for an international development organization operating across East Africa.",
    heroImage:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=600&fit=crop",
    location: "Dar es Salaam, Tanzania",
    industry: "NGO & Development",
    duration: "4 months",
    year: "2023",
    category: "Business Strategy",
    client: "East Africa Development Initiative",
    challenge:
      "The organization had multiple donor-funded programs but lacked a unified long-term strategy. Impact measurement was inconsistent, fundraising efforts were reactive, and internal alignment across country offices was weak.",
    approach: [
      "Facilitated stakeholder workshops across three countries",
      "Conducted beneficiary impact assessments and donor interviews",
      "Developed theory of change and performance measurement framework",
      "Designed sustainable funding strategy and partnership roadmap",
      "Aligned governance structure with long-term vision",
    ],
    solution:
      "We delivered a structured 5-year strategic plan centered on measurable impact, diversified funding streams, and stronger regional coordination. A unified monitoring and evaluation framework was introduced to standardize reporting across programs.",
    results: [
      { metric: "3x", label: "Increase in donor funding commitments" },
      { metric: "100%", label: "Alignment across regional offices" },
      { metric: "50%", label: "Improvement in reporting efficiency" },
      { metric: "25%", label: "Growth in program beneficiaries" },
    ],
    testimonial: {
      quote:
        "The clarity we gained from this strategic process has transformed how we operate. We now have a clear roadmap and measurable goals that align donors, staff, and beneficiaries.",
      author: "Neema Achieng",
      role: "Executive Director",
      company: "East Africa Development Initiative",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Strategic Planning",
      "Impact Measurement",
      "Organizational Development",
    ],
  },
  {
    slug: "manufacturing-process-improvement",
    title: "Manufacturing Process Improvement",
    subtitle: "Lean transformation driving cost and quality gains",
    description:
      "Implemented lean manufacturing principles resulting in major cost reductions and improved quality control metrics.",
    heroImage:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=600&fit=crop",
    location: "Nairobi, Kenya",
    industry: "Manufacturing",
    duration: "10 months",
    year: "2022-2023",
    category: "Operational Excellence",
    client: "Kenya Industrial Plastics Ltd",
    challenge:
      "The company was facing rising production costs, high defect rates, and delayed order fulfillment. Inventory mismanagement and inconsistent production planning were impacting profitability.",
    approach: [
      "Conducted end-to-end production line analysis",
      "Introduced lean manufacturing and waste reduction initiatives",
      "Redesigned inventory management and procurement workflows",
      "Implemented quality control checkpoints across production stages",
      "Trained supervisors in performance management systems",
    ],
    solution:
      "A lean transformation program was implemented, focusing on waste elimination, standardized operating procedures, and real-time production monitoring dashboards. Inventory planning was automated to reduce stock-outs and excess stock.",
    results: [
      { metric: "30%", label: "Reduction in production costs" },
      { metric: "45%", label: "Reduction in defect rates" },
      { metric: "20%", label: "Increase in production output" },
      { metric: "35%", label: "Improvement in delivery times" },
    ],
    testimonial: {
      quote:
        "Our operations are now streamlined and predictable. The lean systems introduced have permanently improved our cost structure and quality standards.",
      author: "Peter Mwangi",
      role: "Operations Director",
      company: "Kenya Industrial Plastics Ltd",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Lean Transformation",
      "Supply Chain Optimization",
      "Operational Excellence",
    ],
  },
  {
    slug: "professional-services-expansion",
    title: "Professional Services Expansion",
    subtitle: "Market entry strategy for regional expansion",
    description:
      "Supported a professional services firm in expanding into two new regional markets through a structured market entry strategy.",
    heroImage:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=600&fit=crop",
    location: "Kampala, Uganda",
    industry: "Professional Services",
    duration: "6 months",
    year: "2022-2023",
    category: "Business Strategy",
    client: "Elite Advisory Group",
    challenge:
      "The firm wanted to expand regionally but lacked clarity on market demand, pricing strategy, and local partnership structures. Leadership was concerned about overextending resources and diluting brand positioning.",
    approach: [
      "Conducted competitive landscape analysis in target markets",
      "Developed localized service positioning strategy",
      "Created financial projections and risk assessment models",
      "Identified and vetted potential local partners",
      "Designed phased expansion roadmap with milestone tracking",
    ],
    solution:
      "We developed a controlled expansion strategy that prioritized one market launch before scaling into the second. Brand positioning was refined to appeal to enterprise clients, and partnership agreements were structured to reduce upfront capital risk.",
    results: [
      { metric: "2", label: "New markets successfully launched" },
      { metric: "55%", label: "Revenue growth within first year" },
      { metric: "35%", label: "Increase in enterprise clients" },
      { metric: "20%", label: "Reduction in expansion risk exposure" },
    ],
    testimonial: {
      quote:
        "The expansion was executed with precision. NovaCore helped us grow confidently without compromising our brand or operational stability.",
      author: "Grace Nabirye",
      role: "Managing Partner",
      company: "Elite Advisory Group",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Market Entry Strategy",
      "Financial Modeling",
      "Business Growth Advisory",
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found | NovaCore Consulting",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${study.title} | NovaCore Consulting Case Study`,
    description: study.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((s) => s.slug !== slug)
    .slice(0, 2)
    .map((study) => ({
      slug: study.slug,
      title: study.title,
      description: study.description,
      image: study.heroImage,
      category: study.category,
    }));

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CaseStudyDetails study={study} />
      {relatedStudies.length > 0 && (
        <RelatedCaseStudies studies={relatedStudies} />
      )}
      <Newsletter />
      <Footer />
    </main>
  );
}
