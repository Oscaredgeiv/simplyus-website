import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  features: string[];
}
