export const SITE_CONFIG = {
  name: "Simply Us & You",
  tagline: "Your Growth. Our Obsession.",
  description:
    "We help service-based businesses grow through social media management, digital marketing, operations consulting, and software automation.",
  url: "https://simplyusandyou.com",
  email: "hello@simplyusandyou.com",
  socials: {
    linkedin: "https://linkedin.com/company/simplyusandyou",
    instagram: "https://instagram.com/simplyusandyou",
    twitter: "https://twitter.com/simplyusandyou",
  },
} as const;

export const SERVICES = [
  {
    title: "Social Media Management",
    slug: "social-media-management",
    shortDescription: "Strategy, content, and community management that grows your brand.",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDescription: "Paid and organic campaigns that deliver measurable ROI.",
  },
  {
    title: "Operations Consulting",
    slug: "operations-consulting",
    shortDescription: "Streamline workflows and scale your business efficiently.",
  },
  {
    title: "Project Management",
    slug: "project-management",
    shortDescription: "Keep every initiative on track, on time, and on budget.",
  },
  {
    title: "Software & Automation",
    slug: "automation",
    shortDescription: "CRM setup, workflow automation, and tech stack management.",
  },
] as const;
