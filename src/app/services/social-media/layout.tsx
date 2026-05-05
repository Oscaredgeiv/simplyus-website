import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media & Content Creation",
  description: "Scroll-stopping content, reels, and social strategy that builds real audiences.",
  alternates: { canonical: "https://simplyusandu.com/services/social-media" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
