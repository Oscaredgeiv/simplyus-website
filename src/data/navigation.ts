import type { NavItem } from "@/types/navigation";

export const mainNavItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems = {
  services: [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    {
      label: "Social Content Creation",
      href: "/services/social-content-creation",
    },
    { label: "Website Design", href: "/services/website-design" },
    { label: "Website Hosting", href: "/services/website-hosting" },
    {
      label: "Software & App Development",
      href: "/services/software-development",
    },
    {
      label: "Ad Creation & Campaigns",
      href: "/services/ad-creation",
    },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
