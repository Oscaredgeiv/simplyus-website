import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration & Automation",
  description: "Practical AI workflows, chatbots, and content systems that reduce manual work.",
  alternates: { canonical: "https://simplyusandu.com/services/ai-integration" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
