"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  "Digital Marketing",
  "Social Media Management",
  "Website Design & Development",
  "Website Hosting & Maintenance",
  "Software Development",
  "SEO & PPC Advertising",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@simplyusandyou.com",
    href: "mailto:hello@simplyusandyou.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote \u2014 Serving clients nationwide",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon\u2013Fri, 9am\u20136pm EST",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-[#111111] border border-white/[0.06] text-white placeholder-[#6B7280] focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]/30 rounded-lg px-4 py-3 transition-colors";

  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#F97316] mb-4">
              Get in Touch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Let&apos;s Build Something Great
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Fill out
              the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Form — 3/5 */}
          <Reveal className="lg:col-span-3">
            <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#F97316]/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-[#F97316]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[#9CA3AF] max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll review your message and
                    get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#9CA3AF] mb-1.5"
                      >
                        Name <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#9CA3AF] mb-1.5"
                      >
                        Email <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#9CA3AF] mb-1.5"
                      >
                        Company{" "}
                        <span className="text-[#6B7280] text-xs">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#9CA3AF] mb-1.5"
                      >
                        Phone{" "}
                        <span className="text-[#6B7280] text-xs">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[#9CA3AF] mb-1.5"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#9CA3AF] mb-1.5"
                    >
                      Message <span className="text-[#F97316]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact Info — 2/5 */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((c, i) => (
              <Reveal key={c.label} delay={0.1 * (i + 1)}>
                <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#9CA3AF] mb-0.5">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-white font-medium hover:text-[#F97316] transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
