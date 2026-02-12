import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import InsightDetails from "./insightDetails";
import RelatedInsights from "@/components/RelatedInsights";

const insights = [
  {
    slug: "strategies-sustainable-growth-2026",
    title: "5 Key Strategies for Sustainable Business Growth in 2026",
    subtitle: "How forward-thinking organizations are preparing for the year ahead",
    description:
      "Discover the essential strategies that forward-thinking organizations are using to drive sustainable growth in today's dynamic market.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    category: "Business Strategy",
    date: "January 15, 2026",
    author: "Sarah Chen",
    authorRole: "Senior Strategy Consultant",
    authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">As we move into 2026, businesses face a unique set of challenges and opportunities. Economic uncertainty, rapid technological advancement, and shifting consumer expectations are reshaping the competitive landscape. Organizations that thrive will be those that embrace sustainable, long-term growth strategies rather than pursuing short-term gains.</p>
      
      <h2>1. Purpose-Driven Strategy</h2>
      <p>Today's most successful organizations are those that have moved beyond profit-only objectives to embrace purpose-driven strategies. This isn't just about corporate social responsibility—it's about building business models that create lasting value for all stakeholders.</p>
      <p>Companies with clear purpose statements outperform their peers by 42% in market capitalization growth. More importantly, purpose-driven organizations report higher employee engagement, stronger customer loyalty, and greater resilience during downturns.</p>
      
      <h2>2. Data-Informed Decision Making</h2>
      <p>The volume of available business data has exploded, but many organizations struggle to translate insights into action. Sustainable growth requires moving from intuition-based to data-informed decision making.</p>
      <p>This doesn't mean abandoning human judgment—rather, it means augmenting strategic thinking with robust analytics. Leading organizations are building data literacy across their teams and creating feedback loops that continuously improve decision quality.</p>
      
      <h2>3. Agile Operating Models</h2>
      <p>Traditional hierarchical structures are ill-equipped for the speed of modern business. Sustainable growth requires operating models that combine scale with flexibility.</p>
      <p>We're seeing successful organizations adopt hybrid structures—maintaining functional excellence while creating cross-functional teams that can rapidly respond to market opportunities. This approach preserves efficiency while enabling innovation.</p>
      
      <h2>4. Customer-Centric Innovation</h2>
      <p>Sustainable growth comes from solving real customer problems, not developing features in isolation. The most effective innovators are those who maintain deep, continuous connections with their customers.</p>
      <p>Leading companies are investing in customer insight capabilities, creating feedback loops that inform product development, and measuring success through customer outcomes rather than output metrics.</p>
      
      <h2>5. Talent Development and Retention</h2>
      <p>In an era of talent scarcity, organizations that invest in their people gain sustainable competitive advantage. This goes beyond competitive compensation—it includes meaningful work, growth opportunities, and supportive culture.</p>
      <p>Forward-thinking companies are reimagining career paths, investing in continuous learning, and creating environments where diverse talent can thrive. The result is higher retention, stronger innovation, and better execution.</p>
      
      <h2>Looking Ahead</h2>
      <p>Sustainable growth isn't about finding a single magic solution—it's about building organizational capabilities that compound over time. The strategies outlined above work together; purpose provides direction, data enables better decisions, agile structures allow rapid execution, customer focus ensures relevance, and talent provides the capability to deliver.</p>
      <p>Organizations that systematically build these capabilities will find themselves well-positioned for whatever 2026 brings.</p>
    `,
    tags: ["Business Strategy", "Growth", "2026 Trends"],
    relatedInsights: [
      "digital-transformation-beyond-technology",
      "operational-excellence-resilient-processes"
    ],
  },
  {
    slug: "digital-transformation-beyond-technology",
    title: "Digital Transformation: Beyond Technology Implementation",
    subtitle: "Why successful transformation requires organizational change",
    description:
      "Understanding why successful digital transformation requires more than just new technology—it demands organizational change.",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=600&fit=crop",
    category: "Digital Transformation",
    date: "January 10, 2026",
    author: "Michael Adebayo",
    authorRole: "Digital Transformation Lead",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">Digital transformation has become one of the most overused and misunderstood terms in business. For many organizations, it has become synonymous with technology implementation—buying new software, migrating to the cloud, or adopting AI tools. While these are important, they represent only the surface of what true digital transformation requires.</p>
      
      <h2>The Technology Trap</h2>
      <p>We consistently see organizations invest millions in new technology platforms only to achieve disappointing results. The pattern is predictable: leadership selects a solution, IT implements it, and employees are expected to adapt. When results don't materialize, the response is often more technology.</p>
      <p>This "technology trap" occurs because organizations treat transformation as a technical challenge when it is fundamentally a human and organizational challenge.</p>
      
      <h2>The Four Dimensions of Transformation</h2>
      <p>Successful digital transformation addresses four interconnected dimensions:</p>
      
      <h3>1. Strategy and Vision</h3>
      <p>Technology must serve business strategy, not the reverse. Organizations need clarity on what they're trying to achieve—improved customer experience, operational efficiency, new revenue streams—and how technology enables those outcomes.</p>
      
      <h3>2. Process and Operations</h3>
      <p>Implementing new technology on top of broken processes simply digitizes inefficiency. Transformation requires rethinking workflows, decision rights, and performance metrics.</p>
      
      <h3>3. Culture and Capabilities</h3>
      <p>Perhaps the most overlooked dimension. New tools require new skills, new ways of working, and often new mindsets. Without investment in change management and capability building, transformation efforts stall.</p>
      
      <h3>4. Technology and Data</h3>
      <p>Finally, the technology itself. When the other dimensions are addressed, technology selection and implementation becomes straightforward.</p>
      
      <h2>Practical Steps Forward</h2>
      <p>Organizations seeking genuine transformation should:</p>
      <ul>
        <li><strong>Start with problems, not solutions:</strong> Identify specific business challenges before evaluating technologies.</li>
        <li><strong>Involve users early:</strong> Design solutions with the people who will use them daily.</li>
        <li><strong>Invest in change management:</strong> Budget at least as much for adoption as for implementation.</li>
        <li><strong>Measure outcomes, not outputs:</strong> Track business results, not just technical milestones.</li>
        <li><strong>Build digital capabilities:</strong> Develop internal skills rather than relying entirely on external partners.</li>
      </ul>
      
      <h2>The Long View</h2>
      <p>True digital transformation is not a project with an end date—it's an ongoing capability to adapt and improve. Organizations that embrace this perspective treat technology as an enabler of continuous evolution rather than a one-time fix.</p>
      <p>The organizations that succeed will be those that recognize transformation as fundamentally about people and processes, with technology serving as the tool that enables both.</p>
    `,
    tags: ["Digital Transformation", "Change Management", "Technology"],
    relatedInsights: [
      "strategies-sustainable-growth-2026",
      "ai-in-business-practical-implementation"
    ],
  },
  {
    slug: "operational-excellence-resilient-processes",
    title: "Operational Excellence: Building Resilient Business Processes",
    subtitle: "Designing processes that improve efficiency and build resilience",
    description:
      "Learn how to design and implement processes that not only improve efficiency but also build organizational resilience.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    category: "Operations",
    date: "January 5, 2026",
    author: "David Kimani",
    authorRole: "Operations Director",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">The past few years have tested organizational resilience like never before. Supply chain disruptions, rapid shifts in demand, and new ways of working have exposed vulnerabilities in processes that were designed for stability rather than adaptability.</p>
      
      <h2>Beyond Efficiency</h2>
      <p>Traditional operational excellence focused primarily on efficiency—doing things faster, cheaper, and with fewer errors. While these remain important, they are no longer sufficient. Today's processes must also be resilient: able to absorb disruption, adapt to changing conditions, and recover quickly when things go wrong.</p>
      
      <h2>Principles of Resilient Process Design</h2>
      
      <h3>1. Visibility Across the Value Chain</h3>
      <p>You cannot respond to problems you don't see. Resilient organizations invest in end-to-end visibility that extends beyond their own operations to include suppliers, partners, and customers. This visibility enables early detection of disruptions and faster response times.</p>
      
      <h3>2. Modularity and Standardization</h3>
      <p>Paradoxically, standardization enables flexibility. When processes are built from standardized, modular components, organizations can reconfigure them rapidly in response to changing requirements. This approach is common in software development and is increasingly relevant to operational processes.</p>
      
      <h3>3. Distributed Decision Rights</h3>
      <p>Bottlenecks occur when decisions must escalate through multiple levels of management. Resilient organizations push decision rights closer to where work happens, enabling faster response and reducing the burden on leadership.</p>
      
      <h3>4. Built-in Feedback Loops</h3>
      <p>Processes should include mechanisms for continuous learning. This means capturing data on performance, analyzing root causes of problems, and systematically implementing improvements. Organizations that learn faster adapt faster.</p>
      
      <h2>Implementation Approach</h2>
      <p>Building resilient processes requires a systematic approach:</p>
      <ul>
        <li><strong>Assess current state:</strong> Identify where processes are brittle, where visibility is limited, and where decision bottlenecks exist.</li>
        <li><strong>Design for resilience:</strong> Apply the principles above to redesign processes, creating options for alternative workflows and recovery paths.</li>
        <li><strong>Build capabilities:</strong> Develop team skills in problem-solving, decision-making, and continuous improvement.</li>
        <li><strong>Test and learn:</strong> Use simulations and pilot programs to validate resilience before full implementation.</li>
        <li><strong>Measure and adapt:</strong> Track both efficiency and resilience metrics, adjusting as conditions change.</li>
      </ul>
      
      <h2>The Resilience Dividend</h2>
      <p>Investing in process resilience pays dividends beyond crisis response. Organizations with resilient processes report higher customer satisfaction, stronger employee engagement, and better financial performance. They are better positioned to seize opportunities, not just withstand threats.</p>
      <p>In an unpredictable world, resilience is not a luxury—it's a competitive necessity.</p>
    `,
    tags: ["Operations", "Process Improvement", "Resilience"],
    relatedInsights: [
      "strategies-sustainable-growth-2026",
      "supply-chain-resilience-lessons"
    ],
  },
  // Add more insights as needed
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  
  if (!insight) {
    return {
      title: "Insight Not Found | NovaCore Consulting",
      description: "The requested insight could not be found.",
    };
  }

  return {
    title: `${insight.title} | NovaCore Consulting Insights`,
    description: insight.description,
    openGraph: {
      title: insight.title,
      description: insight.description,
      images: [insight.heroImage],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  // Get related insights
  const relatedInsights = insights
    .filter((i) => i.slug !== slug && insight.relatedInsights.includes(i.slug))
    .slice(0, 2)
    .map((i) => ({
      slug: i.slug,
      title: i.title,
      excerpt: i.description,
      image: i.heroImage,
      category: i.category,
      date: i.date,
    }));

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <InsightDetails insight={insight} />
      {relatedInsights.length > 0 && (
        <RelatedInsights insights={relatedInsights} />
      )}
      <Newsletter />
      <Footer />
    </main>
  );
}