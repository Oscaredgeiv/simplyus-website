import type { NavItem } from "@/types/navigation";

export const mainNavItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems = {
  services: [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Social Media & Content", href: "/services/social-media" },
    { label: "Website Design", href: "/services/website-design" },
    { label: "Website Hosting", href: "/services/hosting" },
    {
      label: "Software & App Development",
      href: "/services/software-development",
    },
    { label: "Ad Creation & Campaigns", href: "/services/ad-creation" },
    {
      label: "AI Integration & Automation",
      href: "/services/ai-integration",
    },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  /* Priority SEO links — small set only, NOT every city/combo */
  areas: [
    { label: "Dacula", href: "/areas/dacula" },
    { label: "Lawrenceville", href: "/areas/lawrenceville" },
    { label: "Duluth", href: "/areas/duluth" },
    { label: "Peachtree Corners", href: "/areas/peachtree-corners" },
    { label: "Loganville", href: "/areas/loganville" },
    { label: "Gainesville", href: "/areas/gainesville" },
    { label: "Athens", href: "/areas/athens" },
    { label: "All Service Areas →", href: "/areas" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
