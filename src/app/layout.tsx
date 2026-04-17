import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TawkChat } from "@/components/shared/tawk-chat";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Simply Us & U — Digital Marketing, Web Design & Software Development",
    template: "%s | Simply Us & U",
  },
  description:
    "We help businesses grow through digital marketing, social content creation, website design, hosting, and software development.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://simplyusandyou.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0B0D] text-white font-[family-name:var(--font-inter)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <TawkChat />
      </body>
    </html>
  );
}
