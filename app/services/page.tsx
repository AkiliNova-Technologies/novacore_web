import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ServicesDetail from "./ServicesDetail";

export const metadata = {
  title: "Services | NovaCore Consulting",
  description:
    "Explore our comprehensive consulting services including Business Strategy, Operational Excellence, Digital Transformation, and Corporate Advisory.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesDetail />
      <Newsletter />
      <Footer />
    </main>
  );
}