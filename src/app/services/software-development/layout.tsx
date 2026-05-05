import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & App Development",
  description: "Custom apps, CRM integrations, workflow automation, and scalable software solutions.",
  alternates: { canonical: "https://simplyusandu.com/services/software-development" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
