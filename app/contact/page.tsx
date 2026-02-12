import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | NovaCore Consulting",
  description:
    "Get in touch with NovaCore Consulting. Schedule a consultation to discuss your business challenges and explore how we can help.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      <Contact />
      <Footer />
    </main>
  );
}