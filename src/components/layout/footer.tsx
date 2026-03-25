import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/constants";
import { footerNavItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-gray-900">
              Simply Us & You
            </Link>
            <p className="mt-3 text-sm text-gray-500 max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Services</h3>
            <ul className="mt-3 space-y-2">
              {footerNavItems.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-brand-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-3 space-y-2">
              {footerNavItems.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-brand-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-3 space-y-2">
              {footerNavItems.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-brand-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
