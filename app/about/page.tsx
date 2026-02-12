import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AboutDetail from "./AboutDetail";
import Team from "@/components/Team";

export const metadata = {
  title: "About Us | NovaCore Consulting",
  description:
    "Learn about NovaCore Consulting, our mission, values, and the experienced team behind our consulting services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutDetail />
      <Team />
      <Newsletter />
      <Footer />
    </main>
  );
}