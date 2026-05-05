import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/constants";
import { footerNavItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0D] border-t border-white/[0.06]">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="relative inline-block h-10 w-40">
              <Image
                src="/logo-transparent.png"
                alt="Simply Us & U"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-4 text-sm text-[#9CA3AF] max-w-xs leading-relaxed">
              {SITE_CONFIG.tagline} — We help businesses grow through digital
              marketing, web design, and software development.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavItems.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavItems.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Service Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavItems.areas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#F97316]" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#F97316]" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#F97316]" />
                  Remote &mdash; Serving clients nationwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
