import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design Services",
  description: "Custom, conversion-focused websites that look premium and perform even better.",
  alternates: { canonical: "https://simplyusandu.com/services/website-design" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
