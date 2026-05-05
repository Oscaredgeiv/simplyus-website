/**
 * Subservices — long-tail SEO targets under each main service.
 * 4 per service × 7 services = 28 subservice pages.
 */

export interface SubService {
  slug: string;
  parentSlug: string; // matches /services/[parentSlug] folder name
  title: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[]; // for content generation, not stuffed
  benefits: { title: string; description: string }[];
  process: { num: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const subServices: SubService[] = [
  /* ─── Digital Marketing ─── */
  {
    slug: "search-engine-optimization",
    parentSlug: "digital-marketing",
    title: "Search Engine Optimization",
    shortDescription:
      "On-page, technical, and content SEO that builds long-term organic visibility for your business.",
    longDescription:
      "We build SEO programs that grow with your business. From keyword research and on-page optimization to technical fixes and content strategy, every recommendation is tied back to a single question: will this drive qualified traffic that turns into customers?",
    keywords: ["seo services", "search engine optimization", "organic seo", "on-page seo"],
    benefits: [
      {
        title: "Built on real keyword research",
        description:
          "We start by researching what your customers actually search for — not vanity keywords. Every page we optimize ties back to a specific search intent.",
      },
      {
        title: "Technical foundation first",
        description:
          "Site speed, crawl issues, schema, and Core Web Vitals are fixed before content work begins. Without that foundation, ranking is an uphill battle.",
      },
      {
        title: "Content that earns rankings",
        description:
          "We create or rework pages to fully answer the questions your customers are asking. One excellent page outranks ten thin ones every time.",
      },
      {
        title: "Transparent reporting",
        description:
          "Monthly reports break down keyword movement, organic traffic, and which pages are driving the most leads. No black-box dashboards.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit & Research",
        description:
          "Technical audit, keyword research, competitor analysis, and content gap review.",
      },
      {
        num: "02",
        title: "Foundation Fixes",
        description:
          "Address Core Web Vitals, schema, internal linking, and any crawl or indexing issues.",
      },
      {
        num: "03",
        title: "Content & On-Page",
        description:
          "Optimize existing pages and build new content targeted at high-intent keywords.",
      },
      {
        num: "04",
        title: "Authority & Reporting",
        description:
          "Build relevant backlinks, monitor rankings, and report on what is driving real organic growth.",
      },
    ],
    faqs: [
      {
        question: "How long until I see SEO results?",
        answer:
          "For most service businesses, meaningful keyword movement happens in 60-90 days. Real organic traffic and lead growth typically takes 4-9 months depending on competition and starting point.",
      },
      {
        question: "Do you guarantee #1 rankings?",
        answer:
          "No legitimate SEO company can guarantee specific rankings — Google's algorithm changes constantly and competition is variable. We can guarantee a process built on best practices that consistently produces results.",
      },
      {
        question: "What's the difference between SEO and PPC?",
        answer:
          "PPC pays Google for visibility — turn it off and the traffic stops. SEO builds an asset that compounds over time and keeps producing leads after you stop active investment. Most growing businesses run both.",
      },
      {
        question: "Will this work for a local business?",
        answer:
          "Yes — and local SEO has a much shorter timeline. With a well-optimized Google Business Profile, location pages, and consistent reviews, most local businesses see strong results within a few months.",
      },
    ],
  },
  {
    slug: "google-ads-ppc",
    parentSlug: "digital-marketing",
    title: "Google Ads & PPC Management",
    shortDescription:
      "Targeted Google Ads campaigns built to capture demand and turn clicks into qualified leads.",
    longDescription:
      "Most Google Ads accounts we audit are leaking budget on broad keywords, weak ad copy, or poorly built landing pages. We rebuild campaigns from the ground up — with tight match types, intent-driven copy, conversion-optimized landers, and weekly optimization to push performance up over time.",
    keywords: ["google ads", "ppc management", "search ads", "ppc agency"],
    benefits: [
      {
        title: "Built around your buying intent",
        description:
          "We focus on the high-intent searches that drive real revenue — not vanity clicks on broad keywords that drain budget.",
      },
      {
        title: "Landing pages that convert",
        description:
          "We don't just send traffic to your homepage. We build landing pages designed to convert each campaign's specific audience.",
      },
      {
        title: "Weekly optimization",
        description:
          "Every week we review search terms, adjust bids, test new copy, and prune what is not working. PPC is never set-and-forget.",
      },
      {
        title: "Real conversion tracking",
        description:
          "We track phone calls, form submissions, and actual closed business — not just clicks. You see what's actually working.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit & Strategy",
        description:
          "Review of current performance, competitor analysis, and a campaign blueprint built around your goals.",
      },
      {
        num: "02",
        title: "Build & Launch",
        description:
          "Set up tracking, build campaigns, write ad copy, and design conversion-focused landing pages.",
      },
      {
        num: "03",
        title: "Optimize",
        description:
          "Weekly bid adjustments, search-term refinement, and A/B testing to push performance up.",
      },
      {
        num: "04",
        title: "Scale",
        description:
          "Once campaigns hit target CPA, we scale spend and expand into adjacent keywords and formats.",
      },
    ],
    faqs: [
      {
        question: "What's the minimum budget I should spend?",
        answer:
          "We recommend a $1,500/month minimum for most service businesses to gather enough click and conversion data to optimize. Below that, you're guessing.",
      },
      {
        question: "Do you take commission on ad spend?",
        answer:
          "We work on flat management fees so our incentives are aligned with your performance — not your spend. The more efficient your campaigns get, the better.",
      },
      {
        question: "Can you manage existing campaigns or do you need to start over?",
        answer:
          "Both. We always start with an audit. If the existing campaigns have a strong foundation, we improve them. If not, a rebuild usually saves money in the long run.",
      },
      {
        question: "How fast can I expect results?",
        answer:
          "Google Ads can drive leads within the first week of going live. Hitting target cost-per-lead usually takes 30-60 days as we gather data and optimize.",
      },
    ],
  },
  {
    slug: "email-marketing-automation",
    parentSlug: "digital-marketing",
    title: "Email Marketing & Automation",
    shortDescription:
      "Automated email sequences, list segmentation, and broadcasts that turn subscribers into customers.",
    longDescription:
      "Email is still the highest-ROI channel in digital marketing — when it's set up correctly. We build email programs that capture leads, nurture them with helpful content, and convert them into customers without anyone on your team having to lift a finger.",
    keywords: ["email marketing", "email automation", "email sequences"],
    benefits: [
      {
        title: "Set it up once, runs forever",
        description:
          "We build welcome sequences, nurture flows, and post-purchase emails that work for you while you sleep.",
      },
      {
        title: "Real segmentation",
        description:
          "Different customers get different messages. We segment your list so people get content that's actually relevant to them.",
      },
      {
        title: "Deliverability that actually lands",
        description:
          "Domain authentication, list hygiene, and engagement-focused sending so your emails actually reach inboxes.",
      },
      {
        title: "Tied to revenue",
        description:
          "Every campaign and automation is tracked back to closed business — not just opens and clicks.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit & Plan",
        description:
          "Review your current email setup, list health, and define the automations that will drive the biggest impact first.",
      },
      {
        num: "02",
        title: "Build Foundations",
        description:
          "Set up your email platform, segmentation, lead capture forms, and tracking. Migrate from older platforms if needed.",
      },
      {
        num: "03",
        title: "Launch Sequences",
        description:
          "Build and launch your welcome series, nurture flows, and any sales or post-purchase automations.",
      },
      {
        num: "04",
        title: "Test & Refine",
        description:
          "A/B test subject lines, content, and timing. Refine sequences based on real engagement and conversion data.",
      },
    ],
    faqs: [
      {
        question: "Which email platform should I use?",
        answer:
          "It depends on your business. For most service businesses, HubSpot or ActiveCampaign work great. For e-commerce, Klaviyo is usually the right call. We'll recommend based on your goals and tech stack.",
      },
      {
        question: "I have no list — is email worth it?",
        answer:
          "Yes — but build the list first. We help set up the lead magnets, capture forms, and automation infrastructure so that as your audience grows, every new subscriber automatically enters a nurture flow.",
      },
      {
        question: "How often will you email my list?",
        answer:
          "Sending cadence depends on your audience and content. Most service businesses do well with 2-4 emails per month plus event-triggered automations. Over-emailing is the fastest way to burn a list.",
      },
      {
        question: "Will this work with my CRM?",
        answer:
          "Almost always. We integrate email platforms with HubSpot, Salesforce, and most major CRMs so leads, tags, and behavior flow back and forth automatically.",
      },
    ],
  },
  {
    slug: "local-seo",
    parentSlug: "digital-marketing",
    title: "Local SEO & Google Business Profile",
    shortDescription:
      "Local SEO services that put your business in the Google map pack and on the first page for the searches that drive calls.",
    longDescription:
      "For local businesses, your Google Business Profile is more important than your website. We optimize the entire local presence — GBP, location pages, citations, reviews, and on-page local content — so when someone searches \"[your service] near me,\" you're the obvious choice.",
    keywords: [
      "local seo",
      "google business profile",
      "google maps seo",
      "near me seo",
    ],
    benefits: [
      {
        title: "Google Business Profile mastery",
        description:
          "We optimize every part of your GBP — categories, services, photos, posts, Q&A, attributes — so it earns its place in the local 3-pack.",
      },
      {
        title: "Local citation cleanup",
        description:
          "Inconsistent business listings hurt rankings. We audit and fix your name, address, and phone across the directories that matter.",
      },
      {
        title: "Review systems",
        description:
          "Automated review requests and review-response workflows so reviews keep coming in and you respond to every one.",
      },
      {
        title: "Location landing pages",
        description:
          "If you serve multiple cities or counties, we build real, useful location pages — not thin doorway pages that get penalized.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit",
        description:
          "Review your GBP, citations, on-page local signals, and current local rankings.",
      },
      {
        num: "02",
        title: "Optimize Foundation",
        description:
          "Fix inconsistent citations, complete every GBP field, and build foundational location pages.",
      },
      {
        num: "03",
        title: "Activate Reviews",
        description:
          "Set up automated review requests and a response workflow so reviews compound steadily.",
      },
      {
        num: "04",
        title: "Compete & Win",
        description:
          "Track local rankings weekly. Refine GBP categories, add local content, and build the signals that move the local 3-pack.",
      },
    ],
    faqs: [
      {
        question: "How do I rank in the Google map pack?",
        answer:
          "The map pack rewards three things: a fully optimized Google Business Profile, consistent citations across the web, and a steady flow of recent positive reviews. Get those right and rankings follow.",
      },
      {
        question: "How important are reviews?",
        answer:
          "Critical. Both review count and review recency are major ranking factors. A business with 200 fresh reviews almost always outranks one with 50 older reviews — even if star ratings are similar.",
      },
      {
        question: "Do I need a separate page for each city I serve?",
        answer:
          "If those cities are meaningful service areas, yes — but only if each page has real local content. Thin city pages where only the name changes will hurt you, not help.",
      },
      {
        question: "Can you respond to my reviews for me?",
        answer:
          "Yes — we set up review-response workflows and either handle responses for you or flag them to your team with templates ready to send.",
      },
    ],
  },

  /* ─── Social Content Creation ─── */
  {
    slug: "instagram-content-creation",
    parentSlug: "social-media",
    title: "Instagram Content Creation & Strategy",
    shortDescription:
      "Reels, carousels, and graphics built to grow followers and convert them into customers.",
    longDescription:
      "We create Instagram content with intention — scroll-stopping reels, educational carousels, and brand-aligned graphics designed around a clear strategy. Every post serves a purpose, from awareness to engagement to conversion.",
    keywords: ["instagram content", "instagram management", "reels"],
    benefits: [
      {
        title: "Strategy before content",
        description:
          "We define your audience, voice, and content pillars before producing a single post — so every reel and carousel ties back to your goals.",
      },
      {
        title: "Reels-first approach",
        description:
          "Reels still drive the most reach on Instagram. We prioritize short-form video with hooks designed to stop the scroll.",
      },
      {
        title: "Templates that scale",
        description:
          "We build reusable carousel and graphic templates so your feed looks cohesive and content production speeds up over time.",
      },
      {
        title: "Tracked to revenue",
        description:
          "Profile visits, link clicks, and DMs are tracked so we know what content actually drives business.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Brand Discovery",
        description:
          "Define audience, voice, and visual direction. Build content pillars aligned with your business goals.",
      },
      {
        num: "02",
        title: "Content Production",
        description:
          "Reels, carousels, graphics, and stories produced on a monthly content calendar.",
      },
      {
        num: "03",
        title: "Publish & Engage",
        description:
          "We schedule posts, write captions, manage hashtags, and respond to DMs and comments.",
      },
      {
        num: "04",
        title: "Analyze",
        description:
          "Monthly performance review identifies top content. We double down on what works.",
      },
    ],
    faqs: [
      {
        question: "How many posts will you create per month?",
        answer:
          "Volume depends on your goals and budget. A typical engagement focuses on 12-20 feed posts plus stories per month — enough to stay top-of-mind without burning out the audience.",
      },
      {
        question: "Do you film original content?",
        answer:
          "Yes. For local businesses we coordinate on-site shoots periodically. For others, we work from supplied footage, stock assets, or content templates we design specifically for your brand.",
      },
      {
        question: "How long until I see follower growth?",
        answer:
          "With consistent posting and a strong strategy, most accounts see meaningful follower growth within 60-90 days. Faster if you're running paid social to amplify content.",
      },
      {
        question: "Will you handle DMs and comments?",
        answer:
          "Yes — community management is included. We respond to comments and route DMs to your team based on rules we set up together.",
      },
    ],
  },
  {
    slug: "short-form-video",
    parentSlug: "social-media",
    title: "Short-Form Video Production",
    shortDescription:
      "Reels, TikToks, and YouTube Shorts produced to grab attention in the first three seconds and convert.",
    longDescription:
      "Short-form video is the highest-leverage content format on every major platform. We produce vertical video with strong hooks, clear value, and on-brand visuals — built to perform on Instagram, TikTok, and YouTube without you ever stepping in front of a camera if you don't want to.",
    keywords: ["short form video", "reels production", "tiktok content"],
    benefits: [
      {
        title: "Hook-first writing",
        description:
          "We obsess over the first 3 seconds. The hook determines whether anyone sees the rest of your video — and we get it right.",
      },
      {
        title: "Platform-native edits",
        description:
          "Vertical video, captions, on-screen text, and pacing optimized per platform. We don't just upload the same edit everywhere.",
      },
      {
        title: "Repurposing built in",
        description:
          "Every shoot produces multiple short-form pieces. One filming session can become a month of Reels, TikToks, and Shorts.",
      },
      {
        title: "Distribution strategy",
        description:
          "Posting cadence, hashtag strategy, and trend awareness so your content has the best shot at reaching new audiences.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Concept",
        description:
          "Story angles, hook ideas, and shot lists built around your audience and the platform's current trends.",
      },
      {
        num: "02",
        title: "Production",
        description:
          "Shoot on location or work from supplied footage. We use prosumer gear that produces broadcast-grade results.",
      },
      {
        num: "03",
        title: "Edit & Caption",
        description:
          "Hook-tight edits, captions, on-screen text, and music selection that makes content native to each platform.",
      },
      {
        num: "04",
        title: "Distribute",
        description:
          "Cross-publish across Instagram, TikTok, YouTube Shorts, and Facebook with platform-specific tweaks.",
      },
    ],
    faqs: [
      {
        question: "Do I have to be on camera?",
        answer:
          "No. We can produce on-screen-text videos, b-roll-driven content, and demo videos that don't require you to be on camera. That said — videos with a real human face usually outperform faceless ones.",
      },
      {
        question: "How many videos can you produce per month?",
        answer:
          "Most engagements produce 4-12 short-form pieces per month. With a single shoot day, we can capture enough footage for 8+ videos.",
      },
      {
        question: "What about my older social videos — can you repurpose those?",
        answer:
          "Often yes. If you have existing podcast clips, webinar footage, or old long-form video, we can pull short-form gold out of it without producing new content.",
      },
      {
        question: "Which platform should I focus on?",
        answer:
          "Wherever your customers spend time. For local service businesses, Instagram and Facebook usually win. For B2B or thought leadership, LinkedIn. For consumer brands, TikTok. We'll guide the call.",
      },
    ],
  },
  {
    slug: "social-media-management",
    parentSlug: "social-media",
    title: "Full Social Media Management",
    shortDescription:
      "End-to-end management — strategy, content, scheduling, community management, and reporting — handled by us.",
    longDescription:
      "When you don't have time to think about social media, we handle the whole thing. Strategy, content production, posting, community management, monthly reporting — all of it. You get a consistent presence that grows your brand without taking time from your team.",
    keywords: ["social media management", "social media agency"],
    benefits: [
      {
        title: "Truly hands-off",
        description:
          "Once we're set up, you don't have to think about social. We handle posting, captions, hashtags, DMs, and community engagement.",
      },
      {
        title: "Multi-platform coverage",
        description:
          "Instagram, Facebook, LinkedIn, TikTok, and others as needed — with content tailored to each platform's audience and behavior.",
      },
      {
        title: "Consistent brand voice",
        description:
          "We document your voice and tone so every post sounds like you, not like a generic agency.",
      },
      {
        title: "Real reporting",
        description:
          "Monthly reports break down what content performed, what drove engagement, and what generated leads.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Onboarding",
        description:
          "Brand voice doc, audience research, content pillars, platform priorities, and a 30-day content calendar.",
      },
      {
        num: "02",
        title: "Production",
        description:
          "Monthly content batches — graphics, reels, captions, and stories — produced and approved before publishing.",
      },
      {
        num: "03",
        title: "Engage",
        description:
          "We post, monitor, respond to comments, and route important DMs to your team daily.",
      },
      {
        num: "04",
        title: "Report & Refine",
        description:
          "Monthly review of metrics and content performance. We adjust strategy based on what is working.",
      },
    ],
    faqs: [
      {
        question: "How many platforms can you manage?",
        answer:
          "Typically 2-4 platforms is the sweet spot. Trying to be everywhere usually means being mediocre everywhere. We pick the platforms where your customers actually are.",
      },
      {
        question: "Do you write captions in our voice?",
        answer:
          "Yes. We document your voice during onboarding and write captions that sound like you. You always have approval before anything publishes if you want it.",
      },
      {
        question: "What if you mess up?",
        answer:
          "We have layered approval workflows — you can review every post before it goes live, or trust us to publish on a calendar. If something needs fixing, we own it and correct it immediately.",
      },
      {
        question: "How long is the contract?",
        answer:
          "Month-to-month after the initial 90 days. Social media takes time to compound, but once we prove it's working, you're not locked in.",
      },
    ],
  },
  {
    slug: "brand-photography",
    parentSlug: "social-media",
    title: "Brand Photography",
    shortDescription:
      "Custom branded photography for your website, social media, and marketing — shot to your brand's exact look and feel.",
    longDescription:
      "Stock photography is fine, but it's never specific to your business. Brand photography gives you a library of original images you fully own — for your website, social, ads, and printed materials — that reflect what your business actually looks like.",
    keywords: ["brand photography", "business photography", "headshots"],
    benefits: [
      {
        title: "Original imagery you own",
        description:
          "Every shot is yours, royalty-free, in perpetuity. No stock licenses, no surprise restrictions.",
      },
      {
        title: "Built around a creative brief",
        description:
          "We start with a shot list aligned to your brand, audience, and the specific places you'll use the images.",
      },
      {
        title: "Professional editing included",
        description:
          "Color-graded, retouched, and delivered in web and print formats. Ready to use on day one.",
      },
      {
        title: "Designed to scale",
        description:
          "We deliver enough variations from each session to keep your social, web, and ads fresh for months.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Brief & Shot List",
        description:
          "Define what shots you need, where they'll be used, and what the visual direction looks like.",
      },
      {
        num: "02",
        title: "Pre-Production",
        description:
          "Location scouting, scheduling, props, talent, and any wardrobe coordination.",
      },
      {
        num: "03",
        title: "Shoot Day",
        description:
          "On-location shoot with our team. Most engagements need a half-day or one-day session.",
      },
      {
        num: "04",
        title: "Edit & Deliver",
        description:
          "Curated, color-graded, and retouched images delivered in web and print formats organized by use case.",
      },
    ],
    faqs: [
      {
        question: "Do you bring your own equipment?",
        answer:
          "Yes. Cameras, lenses, lighting, and any props or backdrops needed for the shoot. You only need to provide the location and any specific subjects.",
      },
      {
        question: "What's the typical turnaround?",
        answer:
          "1-2 weeks from shoot day to final delivery, depending on volume. Rush turnarounds are available for urgent campaigns.",
      },
      {
        question: "Do you do team headshots?",
        answer:
          "Yes — team headshots are one of our most-requested deliverables. We can knock out a 10-person team in a single half-day session.",
      },
      {
        question: "Can you reshoot if we open new locations or add team members?",
        answer:
          "Absolutely. Many clients book us quarterly or semi-annually for refreshes as their team and locations grow.",
      },
    ],
  },

  /* ─── Website Design ─── */
  {
    slug: "custom-website-design",
    parentSlug: "website-design",
    title: "Custom Website Design",
    shortDescription:
      "Custom-designed websites built to convert — fast, mobile-first, and tailored to your brand.",
    longDescription:
      "Templates can only take you so far. We design custom websites that reflect your brand, communicate your value clearly, and convert visitors into customers. Every layout, color choice, and content block is intentional — not pulled from a generic theme.",
    keywords: ["custom website design", "web design", "website redesign"],
    benefits: [
      {
        title: "Conversion-focused layouts",
        description:
          "We design with the end goal in mind. Every page has a clear purpose and a clear next step.",
      },
      {
        title: "Mobile-first design",
        description:
          "60-70% of your traffic is on mobile. We design for the phone first, then scale up — not the other way around.",
      },
      {
        title: "Built for speed",
        description:
          "Lightweight, optimized code so your site loads fast — which Google rewards and visitors expect.",
      },
      {
        title: "SEO foundation included",
        description:
          "Proper heading structure, schema, metadata, and internal linking baked in from day one.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery",
        description:
          "Brand audit, audience research, competitor review, and clear goals for what the site needs to accomplish.",
      },
      {
        num: "02",
        title: "Design",
        description:
          "Wireframes and high-fidelity mockups for every key page. Multiple revisions before any code is written.",
      },
      {
        num: "03",
        title: "Build",
        description:
          "Clean, fast, accessible code on a modern stack. Tested across devices and browsers before launch.",
      },
      {
        num: "04",
        title: "Launch & Iterate",
        description:
          "Soft launch, conversion tracking, and post-launch optimization based on real visitor behavior.",
      },
    ],
    faqs: [
      {
        question: "How long does a custom website take?",
        answer:
          "Most custom builds take 6-12 weeks from kickoff to launch. Simpler sites can be 4-6 weeks; complex builds with custom functionality can take longer.",
      },
      {
        question: "What platform will you build it on?",
        answer:
          "We're stack-agnostic. Most marketing sites we build on Next.js or modern WordPress. E-commerce on Shopify. We pick what's best for your goals — not what's easiest for us.",
      },
      {
        question: "Will I be able to update content myself?",
        answer:
          "Yes. We build with a CMS (or headless CMS) so non-technical team members can update pages, blogs, and most content without needing a developer.",
      },
      {
        question: "Do you offer ongoing support after launch?",
        answer:
          "Yes — we offer maintenance plans that cover updates, security, performance monitoring, and small content changes. Most clients keep us on retainer.",
      },
    ],
  },
  {
    slug: "landing-page-design",
    parentSlug: "website-design",
    title: "Landing Page Design",
    shortDescription:
      "High-converting landing pages built for ad campaigns, lead capture, and product launches.",
    longDescription:
      "A great landing page can double or triple your campaign performance. We design and build landing pages that focus on a single goal — capture a lead, drive a sale, sign up a trial — with copy, design, and structure that maximize conversions.",
    keywords: ["landing page design", "conversion optimization", "ppc landing page"],
    benefits: [
      {
        title: "Single-purpose design",
        description:
          "No nav, no distractions, no competing CTAs. Every element on the page exists to drive one specific action.",
      },
      {
        title: "Conversion-tested patterns",
        description:
          "We use frameworks that have been proven across thousands of campaigns — but tailored to your audience.",
      },
      {
        title: "Fast load times",
        description:
          "Landing pages are usually paid traffic. Slow loads kill conversion rates. Ours load in under 2 seconds.",
      },
      {
        title: "Built for testing",
        description:
          "Easy to A/B test headlines, hero images, CTAs, and offers. We help you iterate to keep improving.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audience & Offer",
        description:
          "Define the target audience, the specific offer, and the single conversion goal of the page.",
      },
      {
        num: "02",
        title: "Copy & Wireframe",
        description:
          "Write the copy first, then wireframe the structure. Copy drives design — not the other way around.",
      },
      {
        num: "03",
        title: "Design & Build",
        description:
          "High-fidelity design and clean implementation with conversion tracking baked in.",
      },
      {
        num: "04",
        title: "Test & Optimize",
        description:
          "Launch, measure, and iterate. We A/B test headlines, hero variations, and CTAs to push conversion up.",
      },
    ],
    faqs: [
      {
        question: "Can I have multiple landing pages for different campaigns?",
        answer:
          "Yes — and you should. Different audiences need different messages. We often build a portfolio of 3-10 landing pages, each tailored to a specific campaign or audience.",
      },
      {
        question: "What's a good conversion rate?",
        answer:
          "Depends on the offer and traffic source, but a well-built lead-gen landing page typically converts at 8-20% of paid traffic. Anything below 5% usually has a fixable problem.",
      },
      {
        question: "Will the page integrate with my CRM or email tool?",
        answer:
          "Yes. We connect form submissions directly to your CRM, email tool, or any backend system you use so leads flow automatically.",
      },
      {
        question: "Can you write the copy or do I provide it?",
        answer:
          "Both — we write the copy when needed, or we work with copy you provide. Either way, we make sure the copy and design work together.",
      },
    ],
  },
  {
    slug: "ecommerce-website-design",
    parentSlug: "website-design",
    title: "E-Commerce Website Design",
    shortDescription:
      "Shopify and custom e-commerce builds designed to maximize conversion and average order value.",
    longDescription:
      "Selling online is harder than just having a store. We design e-commerce sites that guide visitors from product discovery to purchase with minimal friction — including all the post-purchase touches that turn one-time buyers into repeat customers.",
    keywords: ["ecommerce website", "shopify design", "online store design"],
    benefits: [
      {
        title: "Conversion-optimized product pages",
        description:
          "Product pages designed around clear photography, strong copy, social proof, and frictionless checkout.",
      },
      {
        title: "Mobile checkout that works",
        description:
          "Most e-commerce traffic is mobile. We build checkouts that load fast, work with Apple/Google Pay, and don't lose buyers at the last step.",
      },
      {
        title: "Built on Shopify (mostly)",
        description:
          "For 90% of stores, Shopify is the right answer. We customize themes or build custom Shopify experiences for unique brand needs.",
      },
      {
        title: "Post-purchase systems",
        description:
          "Email automations, review requests, and re-engagement campaigns set up so each new customer keeps generating revenue.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Strategy",
        description:
          "Catalog audit, target customer mapping, AOV goals, and a roadmap to a stronger online store.",
      },
      {
        num: "02",
        title: "Design",
        description:
          "Custom homepage, collection page, and product page designs tailored to your brand and customer.",
      },
      {
        num: "03",
        title: "Build & Integrate",
        description:
          "Shopify build with payments, shipping, inventory, taxes, and any apps or integrations you need.",
      },
      {
        num: "04",
        title: "Launch & Optimize",
        description:
          "Soft launch, conversion tracking setup, and ongoing optimization once real customer data starts flowing.",
      },
    ],
    faqs: [
      {
        question: "Should I use Shopify or a custom build?",
        answer:
          "For most online stores, Shopify is the right answer — it handles inventory, payments, shipping, and taxes better than any custom build can match. Custom only makes sense at very high volume or for unusual business models.",
      },
      {
        question: "How long does an e-commerce build take?",
        answer:
          "A Shopify customization typically takes 6-10 weeks. A full custom Shopify build with extensive design work can take 12-16 weeks depending on catalog size and integrations.",
      },
      {
        question: "Can you migrate me from another platform?",
        answer:
          "Yes. We handle migrations from WooCommerce, BigCommerce, Squarespace, and most other platforms — including products, customers, and order history.",
      },
      {
        question: "Do you set up the marketing automation too?",
        answer:
          "Yes — e-commerce is incomplete without abandoned cart flows, post-purchase sequences, and review requests. We typically build the store and the automations together.",
      },
    ],
  },
  {
    slug: "wordpress-development",
    parentSlug: "website-design",
    title: "WordPress Development",
    shortDescription:
      "Fast, modern, secure WordPress sites — built without the bloat of typical theme and plugin builds.",
    longDescription:
      "Most WordPress sites are slow because they're stitched together with bloated themes and dozens of plugins. We build WordPress sites that are clean, fast, and secure — using lightweight themes, minimal plugins, and modern development practices that keep performance high.",
    keywords: ["wordpress development", "wordpress design", "fast wordpress"],
    benefits: [
      {
        title: "Lightweight, custom themes",
        description:
          "We build custom themes or start from minimalist parents like GeneratePress. No multipurpose theme bloat slowing your site down.",
      },
      {
        title: "Minimal plugins",
        description:
          "We only use plugins that earn their place. Fewer plugins mean fewer security risks, fewer slowdowns, and fewer things that can break.",
      },
      {
        title: "Speed-optimized hosting setup",
        description:
          "We pair every WordPress build with proper caching, image optimization, and a CDN — so the site is fast out of the gate.",
      },
      {
        title: "Easy to maintain",
        description:
          "Documented setup, clean code, and an admin built for non-technical editors. Anyone on your team can update content.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Plan",
        description:
          "Site map, content structure, and decisions on theme, plugins, and hosting before anything is built.",
      },
      {
        num: "02",
        title: "Design",
        description:
          "Custom design or theme customization tailored to your brand and the goals of the site.",
      },
      {
        num: "03",
        title: "Build",
        description:
          "Develop in a staging environment with version control. Test across devices, browsers, and editing scenarios.",
      },
      {
        num: "04",
        title: "Launch & Maintain",
        description:
          "Migrate, launch, and lock down with security and backup automation. Ongoing maintenance available.",
      },
    ],
    faqs: [
      {
        question: "Why WordPress and not something newer?",
        answer:
          "WordPress still powers ~40% of the web for a reason — it's flexible, has the largest plugin ecosystem, and clients can edit content easily. For many businesses it's the right call. For others (heavy app-like sites, high-performance marketing sites), we use Next.js or other modern stacks.",
      },
      {
        question: "Can you migrate my existing site to a faster setup?",
        answer:
          "Yes. We migrate from bloated themes and slow hosts to lightweight setups all the time — usually with significant speed improvements within days.",
      },
      {
        question: "Will my site look the same after migration?",
        answer:
          "Pixel-perfect migrations are possible if that's what you need. We can also use the migration as an opportunity to refresh design — your call.",
      },
      {
        question: "What about security?",
        answer:
          "We harden every WordPress install with security best practices: limited login attempts, two-factor auth, file integrity monitoring, automatic backups, and a Web Application Firewall. WordPress can be very secure if it's set up right.",
      },
    ],
  },

  /* ─── Website Hosting ─── */
  {
    slug: "managed-wordpress-hosting",
    parentSlug: "hosting",
    title: "Managed WordPress Hosting",
    shortDescription:
      "Fast, secure, fully-managed WordPress hosting with automated backups, updates, and monitoring.",
    longDescription:
      "Cheap shared hosting is the silent killer of WordPress sites. Slow load times, security issues, and outages cost more in lost business than the savings on hosting. Our managed WordPress hosting is built for speed, security, and reliability — so your site stays up and stays fast.",
    keywords: ["managed wordpress hosting", "wordpress hosting"],
    benefits: [
      {
        title: "Speed-optimized infrastructure",
        description:
          "Server-level caching, CDN, image optimization, and PHP tuning so your site loads in under 2 seconds globally.",
      },
      {
        title: "Automatic backups + restores",
        description:
          "Daily backups stored offsite. One-click restores if anything ever goes wrong. We've got you covered.",
      },
      {
        title: "Security hardening",
        description:
          "Web Application Firewall, malware scanning, two-factor auth, and active monitoring so attacks get blocked before they cause problems.",
      },
      {
        title: "Real human support",
        description:
          "When you need help, you talk to us — not a chatbot or an offshore queue. We know your site and we fix things fast.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Migrate",
        description:
          "We move your site from your current host without downtime. Most migrations complete in a single business day.",
      },
      {
        num: "02",
        title: "Optimize",
        description:
          "Configure caching, CDN, image optimization, and security baseline tuned to your site's specific needs.",
      },
      {
        num: "03",
        title: "Monitor",
        description:
          "Uptime, performance, and security monitoring with alerts that come to us before they become your problem.",
      },
      {
        num: "04",
        title: "Maintain",
        description:
          "Plugin and core updates tested in staging before going live. Backups verified weekly.",
      },
    ],
    faqs: [
      {
        question: "Why is your hosting more expensive than GoDaddy or Bluehost?",
        answer:
          "Shared hosts cram thousands of sites onto the same server. When one of them gets attacked or spikes, yours slows down. We host on premium infrastructure, with caching, security, and real support — and the speed and reliability difference is dramatic.",
      },
      {
        question: "Will migration take my site offline?",
        answer:
          "No — we migrate with zero downtime in almost every case. Your visitors won't notice anything except a faster site after we flip the DNS.",
      },
      {
        question: "What if my site gets hacked?",
        answer:
          "We restore from backup immediately and clean any infection. Our hardening prevents most attacks, and our monitoring catches the rest before they cause real damage.",
      },
      {
        question: "Can I still access my files and database?",
        answer:
          "Yes. You retain full ownership and access. We provide SFTP, database access, and admin credentials whenever you need them.",
      },
    ],
  },
  {
    slug: "website-maintenance",
    parentSlug: "hosting",
    title: "Website Maintenance",
    shortDescription:
      "Ongoing maintenance plans that keep your site fast, secure, and up to date — without you having to think about it.",
    longDescription:
      "A website is never \"done.\" Software needs updating, content needs refreshing, plugins need patching, and security needs constant attention. Our maintenance plans handle all of it, so you don't have to remember to.",
    keywords: ["website maintenance", "wordpress maintenance"],
    benefits: [
      {
        title: "Software updates done right",
        description:
          "WordPress core, theme, and plugin updates tested in staging before going live so updates don't break anything.",
      },
      {
        title: "Security monitoring",
        description:
          "Active malware scanning, intrusion detection, and immediate response if anything ever gets through.",
      },
      {
        title: "Content updates included",
        description:
          "Most plans include monthly content updates — new pages, blog posts, image swaps, and small tweaks handled by us.",
      },
      {
        title: "Monthly health report",
        description:
          "Clear monthly report covering uptime, performance, security events, and any work done that month.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Assess",
        description:
          "Initial audit of your site's health — backups, security, performance, and any tech debt that needs attention.",
      },
      {
        num: "02",
        title: "Stabilize",
        description:
          "Address any urgent issues — outdated software, security gaps, performance problems, broken pages.",
      },
      {
        num: "03",
        title: "Maintain",
        description:
          "Ongoing weekly updates, monthly content tweaks, and continuous monitoring.",
      },
      {
        num: "04",
        title: "Report",
        description:
          "Monthly report and review call to discuss what was done, what's coming, and any new priorities.",
      },
    ],
    faqs: [
      {
        question: "What's included in a typical plan?",
        answer:
          "Plugin and core updates, security monitoring, daily backups, uptime monitoring, monthly content updates (typically 1-3 hours of changes), and a monthly health report.",
      },
      {
        question: "Do I need maintenance if my site is hosted somewhere else?",
        answer:
          "Yes. Hosting and maintenance are different. Hosting keeps your site online; maintenance keeps it secure, current, and working properly. Many sites have one without the other and pay the price.",
      },
      {
        question: "What if I need extra work done?",
        answer:
          "We can handle ad-hoc projects beyond your plan at agreed hourly rates, or upgrade your plan if your needs grow consistently.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes — month-to-month after the initial period. No long contracts to lock you in.",
      },
    ],
  },
  {
    slug: "website-migration",
    parentSlug: "hosting",
    title: "Website Migration",
    shortDescription:
      "Zero-downtime website migrations from any host to a faster, more reliable platform.",
    longDescription:
      "Switching hosts shouldn't mean broken pages, lost emails, or hours of downtime. We migrate sites between platforms and hosts every week — and we have it down to a science. Most migrations finish in under a day with zero downtime and no SEO impact.",
    keywords: ["website migration", "wordpress migration", "site migration"],
    benefits: [
      {
        title: "Zero downtime",
        description:
          "We migrate to staging, validate everything, then flip DNS at the right moment. Your visitors never notice.",
      },
      {
        title: "SEO preserved",
        description:
          "Redirects, sitemaps, schema, and metadata all preserved. Your search rankings come along for the ride.",
      },
      {
        title: "Email and DNS handled",
        description:
          "Email accounts, MX records, custom DNS — we test and verify everything before pulling the trigger.",
      },
      {
        title: "Post-migration checks",
        description:
          "After migration, we run full validation across pages, forms, integrations, and analytics.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit",
        description:
          "Inventory the existing site, plugins, integrations, email, and DNS records.",
      },
      {
        num: "02",
        title: "Stage",
        description:
          "Build a staging copy on the new host. Validate every page, form, and integration.",
      },
      {
        num: "03",
        title: "Cutover",
        description:
          "DNS flip during a low-traffic window. Email and DNS verified, redirects in place.",
      },
      {
        num: "04",
        title: "Validate",
        description:
          "Full post-migration QA — search Console reindex, analytics, monitoring, and any SEO follow-up.",
      },
    ],
    faqs: [
      {
        question: "Will I lose my SEO rankings?",
        answer:
          "Not when migrations are done right. We preserve URL structures, set up redirects, and submit sitemaps to Search Console. Most migrations cause zero ranking changes.",
      },
      {
        question: "How long does a migration take?",
        answer:
          "Most WordPress migrations take 4-24 hours from start to live. Larger or more complex sites can take a few days. We always do the cutover during low-traffic times.",
      },
      {
        question: "Will my emails still work?",
        answer:
          "Yes. We handle MX record migration as part of the process. If you use Google Workspace or Microsoft 365, email keeps working without interruption.",
      },
      {
        question: "What about my old host — do I cancel before or after?",
        answer:
          "After. Wait until the new site has been live for at least a week and you're sure everything is working. Then cancel the old host.",
      },
    ],
  },
  {
    slug: "ssl-security-setup",
    parentSlug: "hosting",
    title: "SSL & Website Security",
    shortDescription:
      "SSL setup, security hardening, malware cleanup, and ongoing protection for your website.",
    longDescription:
      "Most websites are hacked through known, preventable vulnerabilities — out-of-date software, weak passwords, missing security headers. We harden websites against the most common attacks and respond fast when something does happen.",
    keywords: ["website security", "ssl setup", "website malware removal"],
    benefits: [
      {
        title: "SSL configured properly",
        description:
          "Free Let's Encrypt or premium certificates installed, configured, and auto-renewed. HTTPS forced site-wide.",
      },
      {
        title: "Security hardening",
        description:
          "Web Application Firewall, login protection, two-factor auth, file integrity monitoring, and limited login attempts.",
      },
      {
        title: "Malware cleanup",
        description:
          "If your site is already infected, we clean it, identify the entry point, patch the vulnerability, and prevent it from happening again.",
      },
      {
        title: "Ongoing monitoring",
        description:
          "Continuous scanning for malware, suspicious logins, and known vulnerabilities — with response if anything is found.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit",
        description:
          "Vulnerability scan, software version review, and identification of any active threats.",
      },
      {
        num: "02",
        title: "Cleanup (If Needed)",
        description:
          "Remove malware, restore clean files, and patch the vulnerability that allowed entry.",
      },
      {
        num: "03",
        title: "Harden",
        description:
          "SSL, WAF, login protection, two-factor auth, security headers, and any platform-specific hardening.",
      },
      {
        num: "04",
        title: "Monitor",
        description:
          "Continuous monitoring with alerts and response if anything new pops up.",
      },
    ],
    faqs: [
      {
        question: "My site got hacked. Can you fix it?",
        answer:
          "Yes — we handle malware removal and recovery regularly. We clean the infection, identify how the attacker got in, and harden the site so it doesn't happen again.",
      },
      {
        question: "Do I really need SSL if I don't take payments?",
        answer:
          "Yes. SSL is now standard — Google flags non-SSL sites as \"Not Secure\" and ranks them lower. There's no reason any modern site shouldn't have HTTPS.",
      },
      {
        question: "Will hardening slow my site down?",
        answer:
          "Not noticeably. Done right, security adds maybe 10-50ms — well worth it for the protection. Sloppy security setups can slow things down, but ours don't.",
      },
      {
        question: "How fast can you respond if something happens?",
        answer:
          "Most security incidents we contain within hours. Active malware infections are usually cleaned and the site restored within a business day.",
      },
    ],
  },

  /* ─── Software & App Development ─── */
  {
    slug: "custom-business-apps",
    parentSlug: "software-development",
    title: "Custom Business Apps",
    shortDescription:
      "Internal tools and customer-facing apps built around how your business actually works.",
    longDescription:
      "Off-the-shelf software gets you 80% of the way there. The other 20% — the part that makes your business unique — usually requires custom work. We build internal tools, customer portals, and full applications tailored to your operation.",
    keywords: ["custom app development", "business app", "internal tools"],
    benefits: [
      {
        title: "Built around your process",
        description:
          "Not a generic template — software designed specifically for the way your team actually does the work.",
      },
      {
        title: "Modern stack, scalable",
        description:
          "We build on Next.js, Node.js, Postgres, and modern cloud infrastructure. Apps scale with your business.",
      },
      {
        title: "You own everything",
        description:
          "Source code, infrastructure, documentation — all yours. Move it, modify it, or hire someone else to maintain it whenever you want.",
      },
      {
        title: "Iterative delivery",
        description:
          "We ship in two-week sprints with regular demos. You see progress and provide feedback throughout the build.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery",
        description:
          "Workshops to define the problem, the users, the workflows, and the must-have features versus nice-to-haves.",
      },
      {
        num: "02",
        title: "Architect",
        description:
          "Tech stack decisions, database design, API contracts, and deployment plans — documented and approved.",
      },
      {
        num: "03",
        title: "Build",
        description:
          "Two-week sprints with reviews, automated testing, and continuous deployment to staging.",
      },
      {
        num: "04",
        title: "Launch & Support",
        description:
          "Production deployment, training, documentation, and ongoing support if you want it.",
      },
    ],
    faqs: [
      {
        question: "How long does a custom app take?",
        answer:
          "It depends on scope. Small internal tools can ship in 4-6 weeks. Full custom applications typically take 3-6 months. We provide detailed timelines after the discovery phase.",
      },
      {
        question: "What does this cost?",
        answer:
          "Custom software is project-priced. Most engagements range from $20K for a small internal tool to $150K+ for a full custom application. We provide a fixed-price quote after discovery.",
      },
      {
        question: "What if I need changes after launch?",
        answer:
          "We offer ongoing support retainers for continuous improvement. Most clients keep us on retainer for new features, fixes, and as the business evolves.",
      },
      {
        question: "Can you take over an existing project?",
        answer:
          "Sometimes. We can audit existing codebases and take them over if the foundation is sound. If it's not, we'll tell you straight — sometimes a rebuild is cheaper than a takeover.",
      },
    ],
  },
  {
    slug: "crm-setup-integration",
    parentSlug: "software-development",
    title: "CRM Setup & Integration",
    shortDescription:
      "HubSpot, Salesforce, and custom CRM setups configured to actually drive sales — not just store data.",
    longDescription:
      "Most CRMs are massively underused. Companies pay for them, plug in some contacts, and never automate the workflows that actually drive growth. We set up CRMs so they earn their keep — with proper deal pipelines, task automation, integrations, and reporting that show what's working.",
    keywords: ["crm setup", "hubspot setup", "salesforce setup"],
    benefits: [
      {
        title: "Configured around your sales process",
        description:
          "We map your actual sales process and configure pipelines, stages, and required fields that match how you work.",
      },
      {
        title: "Automated lead routing",
        description:
          "New leads automatically tagged, scored, assigned, and notified to the right person — within seconds.",
      },
      {
        title: "Connected to your stack",
        description:
          "Email, calendar, marketing tools, accounting, support — your CRM connects to everything so data flows automatically.",
      },
      {
        title: "Reports you'll actually use",
        description:
          "Dashboards built around the metrics that matter — pipeline health, conversion rates, forecast — not vanity numbers.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery",
        description:
          "Map your sales process, current tools, and what success looks like with the CRM.",
      },
      {
        num: "02",
        title: "Configure",
        description:
          "Set up pipelines, properties, automation, and integrations with your existing tools.",
      },
      {
        num: "03",
        title: "Migrate Data",
        description:
          "Bring in existing contacts, companies, and deals from spreadsheets or your old CRM.",
      },
      {
        num: "04",
        title: "Train & Support",
        description:
          "Team training, documented playbooks, and ongoing support as your team adopts the system.",
      },
    ],
    faqs: [
      {
        question: "Which CRM should I use?",
        answer:
          "Depends on your size and complexity. HubSpot is great for most small-to-mid sized service businesses. Salesforce shines for complex enterprise needs. Pipedrive is a strong option for sales-heavy small teams. We'll recommend based on your specific situation.",
      },
      {
        question: "Can you migrate data from my current system?",
        answer:
          "Yes — including from spreadsheets, older CRMs, or other tools. We map fields, clean data, and validate the migration before going live.",
      },
      {
        question: "Will my team actually use it?",
        answer:
          "Adoption is usually a process problem, not a software problem. We set up the CRM to fit your sales process (instead of forcing you to fit the CRM), train the team, and document the playbooks. Adoption follows.",
      },
      {
        question: "Do you do ongoing CRM management?",
        answer:
          "Yes — many clients keep us on retainer for ongoing CRM optimization, new automations, integrations, and as their process evolves.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    parentSlug: "software-development",
    title: "Workflow Automation",
    shortDescription:
      "Eliminate repetitive tasks with custom automations that connect your tools and save your team hours every week.",
    longDescription:
      "If your team is copying data between tools, manually sending follow-ups, or doing repetitive admin work — there's an automation for that. We build automations that connect your tools, eliminate manual steps, and free your team to focus on actual work.",
    keywords: ["workflow automation", "business automation", "zapier automation"],
    benefits: [
      {
        title: "Audit your manual work first",
        description:
          "We start by mapping where your team spends time on repetitive tasks. Highest-leverage automations get built first.",
      },
      {
        title: "Build with the right tool",
        description:
          "Zapier, Make.com, n8n, or custom code — we pick the right tool for the job, not the one we're most comfortable with.",
      },
      {
        title: "Reliable, monitored",
        description:
          "Automations are monitored with error alerts so we catch problems before they become missed leads or broken processes.",
      },
      {
        title: "Documented for your team",
        description:
          "Every automation comes with documentation so your team understands what it does and how to handle exceptions.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit",
        description:
          "Workshop where we map your team's manual workflows and identify the highest-leverage automations.",
      },
      {
        num: "02",
        title: "Design",
        description:
          "Document each automation — triggers, conditions, actions, and exception handling.",
      },
      {
        num: "03",
        title: "Build & Test",
        description:
          "Build automations in Zapier, Make, or custom code. Test with real data before going live.",
      },
      {
        num: "04",
        title: "Monitor & Iterate",
        description:
          "Monitor performance, fix any issues, and add more automations as new opportunities surface.",
      },
    ],
    faqs: [
      {
        question: "What kinds of tasks can be automated?",
        answer:
          "Lead routing, appointment reminders, data sync between tools, invoice creation, review requests, follow-up emails, report generation — anything repetitive that follows clear rules.",
      },
      {
        question: "Do I need a developer to build these?",
        answer:
          "Most automations are built in no-code tools like Zapier or Make. More complex automations may need custom code, but a lot of the highest-impact work doesn't require a developer.",
      },
      {
        question: "How much can automation actually save?",
        answer:
          "For most service businesses, properly built automations save 10-20 hours per week. The ROI usually pays for the entire setup in the first month.",
      },
      {
        question: "What if Zapier goes down?",
        answer:
          "We monitor automations for failures and alert when something breaks. Critical automations also have backup paths or fallbacks built in. Reliability matters as much as functionality.",
      },
    ],
  },
  {
    slug: "api-development",
    parentSlug: "software-development",
    title: "API Development & Integration",
    shortDescription:
      "RESTful and GraphQL APIs that connect your systems and integrate with third-party services seamlessly.",
    longDescription:
      "Modern businesses run on connected systems. Whether you need a new API to expose your own data, integrate two existing platforms, or modernize a legacy system — we build APIs that are clean, well-documented, and reliable.",
    keywords: ["api development", "api integration", "rest api", "graphql"],
    benefits: [
      {
        title: "Clean, well-documented APIs",
        description:
          "Every API we build comes with clear documentation, sample requests, and an OpenAPI spec your team can use directly.",
      },
      {
        title: "Secure by design",
        description:
          "Authentication, authorization, rate limiting, and input validation built in from day one — not bolted on later.",
      },
      {
        title: "Scalable infrastructure",
        description:
          "Hosted on modern cloud infrastructure with auto-scaling, monitoring, and proper error handling.",
      },
      {
        title: "Integrations that work",
        description:
          "We've connected to most major SaaS platforms — HubSpot, Salesforce, Stripe, Twilio, Plaid, and many more.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Spec & Design",
        description:
          "Define endpoints, data models, authentication, and the contract that frontends and integrations will rely on.",
      },
      {
        num: "02",
        title: "Build",
        description:
          "Implement the API with automated tests, documentation, and proper observability from the start.",
      },
      {
        num: "03",
        title: "Integrate",
        description:
          "Connect the API to your existing systems and third-party services as needed.",
      },
      {
        num: "04",
        title: "Deploy & Monitor",
        description:
          "Deploy to production with monitoring, alerting, and a process for versioning and updates.",
      },
    ],
    faqs: [
      {
        question: "REST or GraphQL?",
        answer:
          "Depends on the use case. REST is simpler and works for most needs. GraphQL shines when clients need flexible queries across many resources. We recommend based on what consumers will need.",
      },
      {
        question: "Can you connect my existing systems together?",
        answer:
          "Yes — that's most of what we do. Connecting CRM to billing, marketing platform to data warehouse, e-commerce to fulfillment — we've done dozens of these integrations.",
      },
      {
        question: "How do you handle API security?",
        answer:
          "Standard practices: OAuth or API keys for authentication, role-based authorization, rate limiting, input validation, and HTTPS everywhere. For sensitive APIs we add additional layers like IP allowlisting.",
      },
      {
        question: "What if a third-party API changes?",
        answer:
          "We design integrations defensively — version pinning where possible, fallback handling, and monitoring to catch breaking changes fast. Maintenance retainers cover updates when third parties release new versions.",
      },
    ],
  },

  /* ─── Ad Creation & Campaigns ─── */
  {
    slug: "google-ads-management",
    parentSlug: "ad-creation",
    title: "Google Ads Management",
    shortDescription:
      "Google Ads campaigns built and optimized to capture high-intent searches and turn them into real leads.",
    longDescription:
      "Google Ads is the highest-intent ad platform on the internet — but it's also the easiest place to burn budget if you don't know what you're doing. We build, optimize, and scale Google Ads campaigns with one focus: bringing in leads that actually close.",
    keywords: ["google ads management", "google ads agency", "ppc"],
    benefits: [
      {
        title: "Intent-driven keyword strategy",
        description:
          "We focus on high-intent keywords that drive real revenue — not broad terms that drain budget.",
      },
      {
        title: "Conversion-tracked from click to close",
        description:
          "We track phone calls, form submissions, and closed business — so we know exactly which keywords drive money.",
      },
      {
        title: "Continuous optimization",
        description:
          "Weekly bid adjustments, search term reviews, ad copy tests, and landing page tweaks. Performance only goes up.",
      },
      {
        title: "Transparent reporting",
        description:
          "Monthly reports show what's working, what's not, and exactly where your money went.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Strategy",
        description:
          "Audit current ads (if any), research keywords, analyze competitors, and build a campaign blueprint.",
      },
      {
        num: "02",
        title: "Build",
        description:
          "Set up tracking, build campaigns, write ad copy, design ad extensions, and build conversion-focused landing pages.",
      },
      {
        num: "03",
        title: "Optimize",
        description:
          "Weekly optimization — bid adjustments, negative keywords, ad copy tests, and landing page improvements.",
      },
      {
        num: "04",
        title: "Scale",
        description:
          "Once campaigns hit target CPA, scale spend and expand into adjacent keywords, locations, and formats.",
      },
    ],
    faqs: [
      {
        question: "What ad budget do I need to start?",
        answer:
          "We recommend $1,500/month minimum to gather enough data to optimize properly. In high-CPC industries (legal, medical, contractors), $3,000-5,000/month is more realistic.",
      },
      {
        question: "How is this different from Performance Max or Smart campaigns?",
        answer:
          "Smart campaigns and PMax give Google a lot of control. We use them strategically when they make sense, but we also build properly structured Search and Performance campaigns where you have visibility and control.",
      },
      {
        question: "Can you fix campaigns I'm already running?",
        answer:
          "Yes — most engagements start with a takeover audit. We identify what's working, what's wasting budget, and rebuild from the foundation up.",
      },
      {
        question: "Do you handle Google Ads for local service businesses?",
        answer:
          "Yes — that's a big part of our work. Local Service Ads (LSA), Search campaigns with location targeting, and call-focused campaigns for service businesses are core specialties.",
      },
    ],
  },
  {
    slug: "facebook-instagram-ads",
    parentSlug: "ad-creation",
    title: "Facebook & Instagram Ads",
    shortDescription:
      "Meta ads with creative that stops the scroll and audience targeting that turns clicks into customers.",
    longDescription:
      "Meta ads work — when the creative is right and the audience is targeted properly. Most accounts we audit have one of those two pieces broken. We rebuild Meta campaigns from the ground up with compelling creative, sharp audience strategy, and a focus on actual sales.",
    keywords: ["facebook ads", "instagram ads", "meta ads"],
    benefits: [
      {
        title: "Creative that stops the scroll",
        description:
          "We produce ad creative — video, static, carousels — designed for the platform. Generic stock photos don't make it.",
      },
      {
        title: "Smart audience targeting",
        description:
          "Lookalikes, custom audiences, retargeting funnels, and broad targeting strategies tested side-by-side.",
      },
      {
        title: "Conversion-focused, not engagement-focused",
        description:
          "We optimize for sales and qualified leads — not likes and comments. The metrics that matter are the ones we report on.",
      },
      {
        title: "Pixel and tracking done right",
        description:
          "Meta Pixel, Conversions API, and proper event tracking so attribution is accurate even with iOS privacy changes.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Strategy",
        description:
          "Audience research, competitor analysis, offer development, and creative direction.",
      },
      {
        num: "02",
        title: "Creative & Build",
        description:
          "Produce ad creative variations, build campaigns with proper structure, and set up tracking.",
      },
      {
        num: "03",
        title: "Test & Optimize",
        description:
          "Test creatives, audiences, and offers. Kill what doesn't work, scale what does.",
      },
      {
        num: "04",
        title: "Scale",
        description:
          "Once we identify winning combinations, scale spend and expand audiences and creatives.",
      },
    ],
    faqs: [
      {
        question: "Are Facebook Ads still effective post-iOS 14?",
        answer:
          "Yes — but with proper Conversions API setup and the right creative strategy. Most accounts that complain about iOS 14 simply haven't adapted. With proper tracking and good creative, Meta still drives strong ROAS for most businesses.",
      },
      {
        question: "How much budget do I need?",
        answer:
          "$1,000/month is the practical minimum for gathering data. $3,000+/month is where we can really test and scale. Below $1,000, the algorithm doesn't have enough data to optimize.",
      },
      {
        question: "Can you produce ad creative for us?",
        answer:
          "Yes — creative is included in our Meta ads management. We produce static images, carousels, and short-form video designed for Meta specifically.",
      },
      {
        question: "How long until I see results?",
        answer:
          "Initial signal usually within 2 weeks. Hitting target CPA typically takes 4-8 weeks of testing and optimization.",
      },
    ],
  },
  {
    slug: "ad-creative-design",
    parentSlug: "ad-creation",
    title: "Ad Creative Design",
    shortDescription:
      "Static, video, and motion graphics ad creative designed for the platforms where it'll run.",
    longDescription:
      "Most ads fail because the creative wasn't designed for the platform. We design ad creative that's purpose-built for where it runs — Meta vertical video, Google responsive search ads, YouTube pre-roll, LinkedIn sponsored content — with the hooks and patterns that perform.",
    keywords: ["ad creative", "ad design", "video ads"],
    benefits: [
      {
        title: "Platform-native design",
        description:
          "Vertical video for Reels, square for feeds, horizontal for YouTube. We design once and adapt for every placement.",
      },
      {
        title: "Hook-driven copy",
        description:
          "Strong hooks in the first 1-2 seconds. Every other second of the ad has to earn its place.",
      },
      {
        title: "Multiple variations per campaign",
        description:
          "Every campaign launches with 3-5 creative variations so we can test what works fastest.",
      },
      {
        title: "Built around your brand",
        description:
          "On-brand colors, fonts, and tone — not generic templates that any agency could produce.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Brief",
        description:
          "Audience, offer, platform, and the conversion goal of the ad. Creative direction follows from there.",
      },
      {
        num: "02",
        title: "Concepts",
        description:
          "Multiple concept directions presented before any production starts. You pick the one that resonates.",
      },
      {
        num: "03",
        title: "Production",
        description:
          "Produce static, video, or motion graphics versions. Variations for each placement.",
      },
      {
        num: "04",
        title: "Iterate",
        description:
          "After ads launch, we iterate on what's working — new hooks, refined messaging, more variations.",
      },
    ],
    faqs: [
      {
        question: "Do you produce video ads?",
        answer:
          "Yes — short-form video is one of our most-requested formats. We produce vertical video for Reels and TikTok, horizontal for YouTube, and animated motion graphics for any platform.",
      },
      {
        question: "Can you redesign existing ads?",
        answer:
          "Yes. We often improve creative for ads that are running but underperforming — usually a few small fixes can dramatically improve results.",
      },
      {
        question: "How many variations do I get?",
        answer:
          "Standard packages include 3-5 creative variations per campaign. Larger creative engagements include more, with regular monthly refreshes.",
      },
      {
        question: "Do I need new creative every month?",
        answer:
          "Eventually, yes — ad fatigue is real. Creative typically lasts 4-8 weeks before performance starts to drop. Refreshing creative every 4-6 weeks is healthy.",
      },
    ],
  },
  {
    slug: "retargeting-campaigns",
    parentSlug: "ad-creation",
    title: "Retargeting Campaigns",
    shortDescription:
      "Retargeting funnels that bring back visitors who didn't convert and turn them into customers.",
    longDescription:
      "Most of your website visitors leave without buying. Retargeting brings them back — through Meta ads, Google Display, and YouTube — with messages tailored to where they got stuck in your funnel. Done right, retargeting is the highest-ROI ad spend you'll ever do.",
    keywords: ["retargeting", "remarketing", "retargeting ads"],
    benefits: [
      {
        title: "Funnel-stage targeting",
        description:
          "Different messages for different visitors. Someone who viewed pricing gets a different ad than someone who started checkout.",
      },
      {
        title: "Multi-platform",
        description:
          "We retarget across Meta, Google Display, YouTube, and LinkedIn — wherever your audience hangs out.",
      },
      {
        title: "Conversion-focused creative",
        description:
          "Retargeting creative is different from cold ads. It's about closing — testimonials, offers, urgency, social proof.",
      },
      {
        title: "Built on solid tracking",
        description:
          "Pixel and conversion API setup so we can target visitors based on actual behavior, not vague guesses.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Tracking Audit",
        description:
          "Make sure pixels and conversion APIs are set up properly. Without good tracking, retargeting doesn't work.",
      },
      {
        num: "02",
        title: "Audience Mapping",
        description:
          "Define audiences based on where visitors are in the funnel — viewed product, added to cart, started checkout, etc.",
      },
      {
        num: "03",
        title: "Creative & Launch",
        description:
          "Design creative for each funnel stage, build the campaigns, and launch with budget caps.",
      },
      {
        num: "04",
        title: "Optimize",
        description:
          "Adjust frequency caps, refine creative, and rotate offers to keep retargeting fresh and effective.",
      },
    ],
    faqs: [
      {
        question: "How much traffic do I need for retargeting to work?",
        answer:
          "Meta requires audiences of at least 1,000 people to build retargeting campaigns. Most sites with 500+ monthly visitors hit that within a couple of months.",
      },
      {
        question: "How often should retargeting ads show?",
        answer:
          "Frequency caps matter. We typically cap at 3-5 impressions per week per person — enough to stay top of mind without being annoying.",
      },
      {
        question: "What about people who already bought?",
        answer:
          "We exclude existing customers from acquisition retargeting and create separate campaigns for them — repeat purchase, upsell, referral. Different objectives, different ads.",
      },
      {
        question: "How long should I retarget visitors for?",
        answer:
          "Depends on the buying cycle. For e-commerce, 14-30 days. For service businesses, 30-90 days. For high-consideration purchases (real estate, B2B), can extend to 6 months.",
      },
    ],
  },

  /* ─── AI Integration & Automation ─── */
  {
    slug: "ai-workflow-automation",
    parentSlug: "ai-integration",
    title: "AI Workflow Automation",
    shortDescription:
      "AI-powered automations that handle the repetitive thinking work — drafting, summarizing, categorizing, routing.",
    longDescription:
      "AI is finally good enough to handle real business work — not just generate text. We build AI-powered workflows that draft emails, summarize meetings, categorize support tickets, route leads intelligently, and handle the work that used to require a human's judgment.",
    keywords: ["ai automation", "ai workflows", "ai integration"],
    benefits: [
      {
        title: "Built around real work",
        description:
          "We start with workflows your team actually does — and identify the parts where AI can take the heavy lifting.",
      },
      {
        title: "Human-in-the-loop where it matters",
        description:
          "AI drafts, your team approves. We design workflows where AI handles speed and humans handle judgment.",
      },
      {
        title: "Built on proven tools",
        description:
          "OpenAI, Anthropic, Make, n8n, Zapier — we use the right tool for the job and don't reinvent the wheel.",
      },
      {
        title: "Privacy and security first",
        description:
          "We design workflows so sensitive data stays where it should. No accidental leaks of customer or business info.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit",
        description:
          "Map your team's current workflows and identify the ones where AI can save the most time.",
      },
      {
        num: "02",
        title: "Design",
        description:
          "Design each AI workflow — prompts, data flow, human approval steps, fallback handling.",
      },
      {
        num: "03",
        title: "Build & Test",
        description:
          "Build the workflows, test with real data, and refine prompts for accuracy.",
      },
      {
        num: "04",
        title: "Deploy & Monitor",
        description:
          "Deploy to production with monitoring. Iterate as edge cases surface and as new opportunities show up.",
      },
    ],
    faqs: [
      {
        question: "What can AI actually automate well right now?",
        answer:
          "Drafting (emails, replies, summaries), classification (routing, tagging, prioritization), extraction (pulling structured data from messy inputs), and content generation (social posts, reports, FAQs). Anything requiring real judgment still benefits from human review.",
      },
      {
        question: "Will AI replace my employees?",
        answer:
          "It hasn't been our experience that it replaces people — it lets the people you have do more, faster. The repetitive tasks get automated; the judgment and relationship work gets more time and focus.",
      },
      {
        question: "What about hallucinations?",
        answer:
          "We design workflows with verification steps and human approval where stakes are high. For lower-stakes tasks, we use prompting techniques and validation that catch most errors before they ship.",
      },
      {
        question: "Where does my data go?",
        answer:
          "Depends on the tools we use. We can configure most AI workflows to use enterprise APIs (OpenAI, Anthropic) that don't train on your data. For sensitive industries, we can also deploy to private models on your own infrastructure.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    parentSlug: "ai-integration",
    title: "AI Chatbots & Customer Support",
    shortDescription:
      "AI chatbots trained on your business that handle routine customer questions 24/7 and route the rest to your team.",
    longDescription:
      "Customer support chatbots used to be terrible. With modern AI, they finally work. We build chatbots trained on your specific business — your services, FAQs, policies — that handle the bulk of customer questions accurately and route anything complex to a human.",
    keywords: ["ai chatbot", "customer support ai", "ai assistant"],
    benefits: [
      {
        title: "Trained on your business",
        description:
          "Not a generic chatbot — one that knows your services, policies, hours, FAQs, and current pricing.",
      },
      {
        title: "Honest when it doesn't know",
        description:
          "We build bots that say \"I don't know — let me connect you with someone who does\" instead of making things up.",
      },
      {
        title: "Smooth handoffs to humans",
        description:
          "When the bot can't help, the conversation hands off to your team with full context — no \"start over\" frustration.",
      },
      {
        title: "Built for the channels you use",
        description:
          "Website chat, SMS, WhatsApp, Slack, Teams — wherever your customers want to interact.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Knowledge Base",
        description:
          "Compile your business knowledge — services, FAQs, policies, hours — into structured content the AI can use.",
      },
      {
        num: "02",
        title: "Build",
        description:
          "Build the bot, set up the knowledge base, configure handoff rules, and design the conversation flow.",
      },
      {
        num: "03",
        title: "Test",
        description:
          "Test with real questions before going live. Refine prompts and edge cases until the bot is reliable.",
      },
      {
        num: "04",
        title: "Deploy & Maintain",
        description:
          "Launch, monitor real conversations, and continuously improve based on actual usage.",
      },
    ],
    faqs: [
      {
        question: "Will customers be annoyed by a chatbot?",
        answer:
          "Modern AI chatbots are dramatically better than the old rule-based ones. When they're well-built, customers get fast, helpful answers. When they're not, customers get angry. We build the kind that get fast, helpful answers.",
      },
      {
        question: "What about complex or sensitive questions?",
        answer:
          "Bots route those to your team automatically — with the full conversation history so the human doesn't have to ask the customer to repeat themselves.",
      },
      {
        question: "How accurate is it?",
        answer:
          "For factual questions about your services, policies, and FAQs, accuracy is very high (90%+ when properly trained). For nuanced advice or complex troubleshooting, we route to humans by default.",
      },
      {
        question: "How long does it take to build?",
        answer:
          "A useful starter chatbot can be live in 2-3 weeks. A polished, fully-tested production chatbot typically takes 6-8 weeks including training, testing, and refinement.",
      },
    ],
  },
  {
    slug: "ai-content-generation",
    parentSlug: "ai-integration",
    title: "AI Content Generation Systems",
    shortDescription:
      "AI-powered content systems that draft posts, emails, proposals, and reports — in your voice, at your scale.",
    longDescription:
      "AI can produce a lot of content fast. The catch is keeping it on-brand, accurate, and useful. We build content systems where AI drafts in your voice, your team reviews, and the volume of high-quality content your business can produce goes way up.",
    keywords: ["ai content", "ai writing", "content automation"],
    benefits: [
      {
        title: "Trained on your voice",
        description:
          "We document your brand voice and feed it into the system so AI drafts in your tone — not generic AI-speak.",
      },
      {
        title: "Templates for repeatable content",
        description:
          "Sales follow-ups, social posts, blog drafts, FAQ updates — recurring content gets templated and AI-drafted.",
      },
      {
        title: "Human approval built in",
        description:
          "Drafts go to humans for review and edit before publishing. AI drafts the heavy lifting; people own the final output.",
      },
      {
        title: "Multi-platform ready",
        description:
          "Same source content adapts into blog posts, social posts, email campaigns, and ad copy — with platform-specific tweaks.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Voice & Templates",
        description:
          "Document your brand voice and identify the highest-leverage repeatable content types.",
      },
      {
        num: "02",
        title: "Build System",
        description:
          "Build the content workflow with AI drafting, human review, and publishing automation.",
      },
      {
        num: "03",
        title: "Calibrate",
        description:
          "Generate samples, refine prompts, and tune until the AI consistently drafts in your voice.",
      },
      {
        num: "04",
        title: "Operate",
        description:
          "Roll the system out to your team. Continuous improvement as edge cases surface.",
      },
    ],
    faqs: [
      {
        question: "Doesn't AI content rank poorly on Google?",
        answer:
          "Generic AI content does. AI content that's been edited, validated, and adds real value ranks fine — Google has stated they care about quality and helpfulness, not whether AI was involved. We build systems that produce the latter, not the former.",
      },
      {
        question: "Can AI write in my exact voice?",
        answer:
          "Closely, yes — with a documented brand voice and examples to reference. Not perfectly. That's why human review is part of the system. The combination of AI speed and human judgment is what works.",
      },
      {
        question: "How much faster does this make my content production?",
        answer:
          "Typically 3-5x for the same human time investment. Or 10x volume at the same quality, depending on how you use the time saved.",
      },
      {
        question: "Will customers know it's AI-written?",
        answer:
          "Done right, no. The content is reviewed by humans, written in your voice, and accurate to your business. The key is the system, not the AI alone.",
      },
    ],
  },
  {
    slug: "ai-customer-support",
    parentSlug: "ai-integration",
    title: "AI-Augmented Customer Support",
    shortDescription:
      "AI tools that help your support team handle more tickets faster — without sacrificing quality or empathy.",
    longDescription:
      "We don't replace your support team with AI. We give them tools that make them dramatically faster — drafted responses, ticket summaries, knowledge lookups, and quality checks — so they can handle more volume without burning out or losing the human touch.",
    keywords: ["ai customer support", "support automation"],
    benefits: [
      {
        title: "Faster response times",
        description:
          "AI drafts responses for the agent to review and personalize. What used to take 5 minutes takes 30 seconds.",
      },
      {
        title: "Consistent quality",
        description:
          "Drafts pulled from approved knowledge mean every customer gets the same accurate answer — regardless of agent.",
      },
      {
        title: "Auto-summary for handoffs",
        description:
          "When a ticket gets escalated, AI summarizes the entire conversation so the new agent gets up to speed in seconds.",
      },
      {
        title: "Sentiment-based routing",
        description:
          "AI flags angry or sensitive tickets so they get human attention immediately, not stuck in a queue.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit Support",
        description:
          "Review your current support tooling, ticket types, response times, and biggest pain points.",
      },
      {
        num: "02",
        title: "Design Augmentation",
        description:
          "Design the AI assists — drafted responses, summaries, routing — that will save the most time.",
      },
      {
        num: "03",
        title: "Implement",
        description:
          "Integrate with your helpdesk (Zendesk, Intercom, HubSpot Service Hub, etc.) and roll out to a pilot team.",
      },
      {
        num: "04",
        title: "Scale",
        description:
          "Refine based on agent feedback and roll out across the full team. Continuous improvement based on real usage.",
      },
    ],
    faqs: [
      {
        question: "Does this replace support agents?",
        answer:
          "No — it augments them. Support work has emotional and judgment components that AI handles poorly. We make agents 2-3x faster on routine work so they can spend more time on the cases that need a human.",
      },
      {
        question: "Will my agents trust the AI drafts?",
        answer:
          "If the drafts are good, yes. We tune the system based on agent feedback in early weeks until drafts are reliably useful. Agents can edit or rewrite anything they don't agree with.",
      },
      {
        question: "What about sensitive customer data?",
        answer:
          "We use enterprise AI APIs that don't train on your data, and we can scope what data the AI sees. For highly sensitive industries we can deploy to private models on your own infrastructure.",
      },
      {
        question: "Which helpdesks do you integrate with?",
        answer:
          "Most major ones — Zendesk, Intercom, Freshdesk, HubSpot Service Hub, Help Scout, ServiceNow. If yours has an API, we can probably integrate.",
      },
    ],
  },
];

export const subServiceBySlug = (slug: string): SubService | undefined =>
  subServices.find((s) => s.slug === slug);

export const subServicesByParent = (parentSlug: string): SubService[] =>
  subServices.filter((s) => s.parentSlug === parentSlug);

export const allSubServiceSlugs = (): string[] =>
  subServices.map((s) => s.slug);
