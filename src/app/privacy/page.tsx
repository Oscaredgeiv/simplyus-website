import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Simply Us & U Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when filling out forms, subscribing to newsletters, or contacting us. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our site.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services; communicate with you about projects, services, and promotions; respond to your inquiries and provide customer support; send you technical notices, updates, and security alerts; analyze trends, usage, and activities to improve your experience; and comply with legal obligations. We will never sell your personal information to third parties.",
  },
  {
    title: "Data Protection",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit and at rest, regular security assessments, access controls limiting data access to authorized personnel, and secure storage of all client data. While no method of transmission over the internet is completely secure, we strive to protect your personal information to the best of our ability.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. We use essential cookies required for site functionality, analytics cookies to understand how visitors interact with our website, and marketing cookies to deliver relevant advertisements. You may opt out of non-essential cookies at any time through your browser settings.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These third parties are contractually obligated to keep your information confidential and use it only for the purposes for which we disclose it to them. Third-party services we use include analytics platforms, email marketing services, payment processors, and cloud hosting providers. Each of these services has their own privacy policies governing their use of your data.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information at any time. You may also request a copy of the data we hold about you, object to or restrict certain processing of your data, withdraw consent where processing is based on consent, and lodge a complaint with a supervisory authority. To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at hello@simplyusandyou.com or call us at (555) 123-4567. Simply Us & U reserves the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new policy on this page and updating the effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#9CA3AF] mb-12">
            Last updated: January 1, 2025
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-semibold text-[#F97316] mb-3">
                  {s.title}
                </h2>
                <p className="text-[#9CA3AF] leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
