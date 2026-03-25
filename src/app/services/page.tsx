import { Container } from "@/components/ui/container";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description:
    "From social media management to marketing automation, we offer end-to-end growth services for service-based businesses.",
};

export default function ServicesPage() {
  return (
    <section className="pt-32 pb-20">
      <Container>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Services Built to Scale Your Business
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          End-to-end growth services designed for ambitious service-based businesses.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-300 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
