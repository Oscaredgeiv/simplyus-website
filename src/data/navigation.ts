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
    { label: "Social Media Management", href: "/services/social-media-management" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Operations Consulting", href: "/services/operations-consulting" },
    { label: "Project Management", href: "/services/project-management" },
    { label: "Software & Automation", href: "/services/automation" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
