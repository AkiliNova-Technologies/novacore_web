import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import InsightsGrid from "./InsightsGrid";

export const metadata = {
  title: "Insights & Resources | NovaCore Consulting",
  description:
    "Explore our latest insights, articles, and resources on business strategy, digital transformation, and operational excellence.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageBanner
        title="Insights & Resources"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
      />
      <InsightsGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}