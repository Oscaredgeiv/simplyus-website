import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Blog",
  description:
    "Expert insights on social media strategy, digital marketing, operations optimization, and business automation.",
};

export default function BlogPage() {
  return (
    <section className="pt-32 pb-20">
      <Container>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Growth Insights &amp; Expert Resources
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Actionable insights from the Simply Us &amp; You team.
        </p>
        <div className="mt-12 text-gray-500">
          Blog posts coming soon.
        </div>
      </Container>
    </section>
  );
}
