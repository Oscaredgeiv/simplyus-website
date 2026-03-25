import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Case Studies",
  description:
    "See how Simply Us & You has helped businesses increase revenue, grow audiences, and streamline operations.",
};

export default function CaseStudiesPage() {
  return (
    <section className="pt-32 pb-20">
      <Container>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Client Results That Speak for Themselves
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Real data, real results. See what&apos;s possible when marketing and operations work together.
        </p>
        <div className="mt-12 text-gray-500">
          Case studies coming soon.
        </div>
      </Container>
    </section>
  );
}
