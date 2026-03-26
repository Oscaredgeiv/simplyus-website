import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Simply Us & U Terms of Service. Please review our terms and conditions before using our services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the services provided by Simply Us & U, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services. These terms apply to all visitors, users, clients, and anyone who accesses or uses our services, website, or applications.",
  },
  {
    title: "Our Services",
    content:
      "Simply Us & U provides digital marketing, social media management, website design and development, website hosting and maintenance, and custom software development services. The specific scope, deliverables, timeline, and terms for each project will be outlined in a separate service agreement or proposal provided before work begins. We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice to active clients.",
  },
  {
    title: "Payment Terms",
    content:
      "Payment terms are outlined in individual service agreements. Unless otherwise specified, invoices are due within 15 days of receipt. For project-based work, a deposit of 50% is required before work begins, with the remaining balance due upon project completion or as outlined in the agreed payment schedule. Late payments may be subject to a 1.5% monthly interest charge. We reserve the right to pause or suspend services for accounts with outstanding balances exceeding 30 days.",
  },
  {
    title: "Intellectual Property",
    content:
      "Upon full payment, clients receive ownership of all custom deliverables created specifically for their project, including website designs, custom code, original graphics, and content. Simply Us & U retains ownership of all proprietary tools, frameworks, templates, and methodologies used in the creation of deliverables. We reserve the right to showcase completed work in our portfolio and case studies unless otherwise agreed in writing. Third-party assets, stock images, and licensed software remain subject to their respective license terms.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Simply Us & U shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill, arising out of or related to our services, whether based on warranty, contract, tort, or any other legal theory. Our total aggregate liability for any claims arising out of or related to our services shall not exceed the total amount paid by the client to Simply Us & U during the twelve months preceding the claim. This limitation applies regardless of whether we have been advised of the possibility of such damages.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate a service agreement with 30 days written notice. In the event of termination, the client is responsible for payment of all services rendered up to the termination date, including any work in progress. Any materials or deliverables completed prior to termination will be delivered to the client upon receipt of all outstanding payments. Simply Us & U may terminate services immediately if the client breaches any material term of these Terms of Service or the applicable service agreement.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from or relating to these terms or our services shall be resolved through good-faith negotiation between the parties. If negotiation fails, disputes shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association. Each party shall bear its own costs and attorneys' fees in connection with any dispute resolution proceedings.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms of Service, please contact us at Support@SimplyUsandU.com or call us at (555) 123-4567. Simply Us & U reserves the right to update these Terms of Service at any time. Changes will be effective upon posting to this page. Your continued use of our services after any changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Terms of Service
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
