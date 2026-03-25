export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  excerpt: string;
  thumbnail: string;
  metrics: { label: string; value: string }[];
  services: string[];
}
