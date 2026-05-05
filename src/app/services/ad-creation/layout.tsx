import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad Creation & Campaign Management",
  description: "High-converting Google Ads, Meta campaigns, creative design, and ongoing A/B testing.",
  alternates: { canonical: "https://simplyusandu.com/services/ad-creation" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
