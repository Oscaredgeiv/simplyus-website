import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://simplyusandyou.com";
const SITE_NAME = "Simply Us & You";

interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  image = "/og-default.png",
}: PageMetadataProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}${image}`, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [`${SITE_URL}${image}`],
    },
    alternates: {
      canonical: url,
    },
  };
}
