import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getPostBySlug, getAllPostSlugs, posts } from "@/data/posts";
import { PostBody } from "./post-body";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Find 2 related posts (next + previous in array)
  const idx = posts.findIndex((p) => p.slug === slug);
  const related = [
    posts[(idx + 1) % posts.length],
    posts[(idx + 2) % posts.length],
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      {/* Hero with image */}
      <article className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#F97316] mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-10">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#9CA3AF]" />
            <span>{post.readTime}</span>
          </div>

          <div className="relative aspect-[1200/630] w-full rounded-2xl overflow-hidden mb-12 border border-white/[0.06]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <PostBody blocks={post.blocks} />
        </div>
      </article>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-[#111111] border border-white/[0.06] rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need help with this for your business?
          </h2>
          <p className="text-[#9CA3AF] mb-6 max-w-xl mx-auto leading-relaxed">
            We do this kind of work every day for businesses like yours. Reach
            out and we&apos;ll take a look at where the easy wins are.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/20 transition hover:bg-[#EA580C]"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">
            Keep Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col hover:border-white/[0.12] transition-colors"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#F97316] mb-2">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
