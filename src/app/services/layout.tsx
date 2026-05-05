import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Digital Marketing, Web Design & Software Development",
  description:
    "End-to-end digital services: digital marketing, social media, web design, hosting, software development, ad campaigns, and AI integration.",
  alternates: { canonical: "https://simplyusandu.com/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
