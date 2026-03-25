"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20">
      <Container size="narrow">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Let&apos;s Build Your Growth Engine
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Tell us about your business and we&apos;ll show you what&apos;s possible.
        </p>

        <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-500 focus:ring-brand-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-500 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-500 focus:ring-brand-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-500 focus:ring-brand-500"
            />
          </div>

          <Button type="submit" size="lg">
            Send Message
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </Container>
    </section>
  );
}
