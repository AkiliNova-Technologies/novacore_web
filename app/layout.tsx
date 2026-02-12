import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaCore Consulting | Business Strategy, Operations & Digital Transformation",
  description:
    "NovaCore Consulting partners with ambitious organizations to clarify direction, optimize operations, and implement digital solutions that drive sustainable growth.",
  keywords: [
    "business consulting",
    "strategy consulting",
    "operational excellence",
    "digital transformation",
    "business advisory",
    "Uganda consulting",
    "Africa consulting",
  ],
  authors: [{ name: "NovaCore Consulting" }],
  openGraph: {
    title: "NovaCore Consulting | Business Strategy, Operations & Digital Transformation",
    description:
      "Building resilient businesses through strategy, insight, and execution.",
    url: "https://novacore.com",
    siteName: "NovaCore Consulting",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}