import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description: "Paid ads, SEO, email funnels, and full-funnel campaigns that deliver measurable ROI.",
  alternates: { canonical: "https://simplyusandu.com/services/digital-marketing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
