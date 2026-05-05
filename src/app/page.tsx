import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsBar } from "@/components/sections/stats-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title:
    "Simply Us & U — Digital Marketing, Web Design & Software Development",
  description:
    "We help businesses grow through digital marketing, social content creation, website design, hosting, and custom software development.",
};

const stats = [
  { value: "Growing", label: "CLIENT ROSTER" },
  { value: "312%", label: "AVG ROI" },
  { value: "100%", label: "ON-TIME DELIVERY" },
  { value: "5-STAR", label: "RATED" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar stats={stats} />
      <ServicesOverview />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
