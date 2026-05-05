import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Hosting Services",
  description: "Fast, secure, fully-managed hosting with backups, monitoring, and real human support.",
  alternates: { canonical: "https://simplyusandu.com/services/hosting" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
