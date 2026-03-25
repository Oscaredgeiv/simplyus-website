import { Container } from "@/components/ui/container";

export const metadata = {
  title: "About Us",
  description:
    "Meet the team at Simply Us & You. We combine marketing expertise with operational precision to help businesses scale.",
};

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20">
      <Container size="narrow">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          We&apos;re Simply Us &amp; You
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          We&apos;re a growth-obsessed team that believes marketing and operations
          shouldn&apos;t live in silos. By combining social media management,
          digital marketing, project management, and automation, we give
          businesses one partner instead of five vendors.
        </p>
      </Container>
    </section>
  );
}
