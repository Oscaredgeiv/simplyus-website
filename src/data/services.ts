export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  num: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  features: { title: string; description: string }[];
  process: { num: string; title: string; description: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  bullets: string[];
  relatedSlugs: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "SEO, PPC & FULL-FUNNEL STRATEGY",
    num: "01",
    shortDescription:
      "Paid ads, SEO, email funnels, and full-funnel campaigns that deliver measurable ROI.",
    fullDescription:
      "We build data-driven digital marketing strategies that turn clicks into customers. From search engine optimization and pay-per-click advertising to email automation and analytics, every campaign is designed around your growth goals. We track every dollar spent and continuously optimize to maximize your return on investment.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90",
    features: [
      {
        title: "Search Engine Optimization",
        description:
          "Comprehensive on-page and off-page SEO strategies that increase organic visibility, drive qualified traffic, and build long-term authority in your niche.",
      },
      {
        title: "Pay-Per-Click Advertising",
        description:
          "Targeted Google Ads and Bing campaigns with precise bidding strategies, compelling ad copy, and landing pages that convert clicks into leads.",
      },
      {
        title: "Email Marketing & Automation",
        description:
          "Automated nurture sequences, segmented campaigns, and personalized email flows that keep your audience engaged and move them through the funnel.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Real-time dashboards, conversion tracking, and monthly performance reports that give you full visibility into what is working and where to scale.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit & Strategy",
        description:
          "We analyze your current marketing performance, competitor landscape, and target audience to build a custom growth roadmap.",
      },
      {
        num: "02",
        title: "Campaign Build",
        description:
          "We set up tracking, create campaign assets, configure ad platforms, and build landing pages optimized for conversion.",
      },
      {
        num: "03",
        title: "Launch & Optimize",
        description:
          "Campaigns go live with ongoing monitoring. We A/B test creatives, adjust bids, and refine targeting weekly.",
      },
      {
        num: "04",
        title: "Scale & Report",
        description:
          "Winning strategies get scaled. Monthly reports break down performance, insights, and next steps for continued growth.",
      },
    ],
    stats: [
      { value: "312%", label: "Avg ROI Lift" },
      { value: "Multi", label: "Channel Strategy" },
      { value: "Always", label: "Optimizing" },
      { value: "100%", label: "Custom Plans" },
    ],
    faqs: [
      {
        question: "How long before I see results from digital marketing?",
        answer:
          "PPC campaigns can generate leads within the first week. SEO typically shows meaningful results within 3-6 months as organic authority builds. We provide regular updates so you can track progress from day one.",
      },
      {
        question: "What is your minimum budget recommendation?",
        answer:
          "We recommend a minimum monthly ad spend of $1,500 for PPC campaigns to gather enough data for meaningful optimization. SEO-only engagements start with our strategy and implementation retainer.",
      },
      {
        question: "Do you handle both B2B and B2C marketing?",
        answer:
          "Yes. We tailor strategies to your business model, whether you are targeting other businesses with long sales cycles or consumers who make faster purchase decisions.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We establish KPIs during onboarding such as cost per acquisition, return on ad spend, organic traffic growth, and conversion rates. Monthly reports show progress against these benchmarks.",
      },
    ],
    bullets: [
      "Full-funnel campaign strategy & execution",
      "SEO audits with keyword research & link building",
      "Google Ads & Bing Ads management",
      "Email automation sequences & nurture flows",
    ],
    relatedSlugs: ["ad-creation", "social-content-creation"],
  },
  {
    slug: "social-content-creation",
    title: "Social Content Creation",
    subtitle: "STRATEGY, CONTENT & COMMUNITY",
    num: "02",
    shortDescription:
      "Scroll-stopping content, reels, graphics, and social strategy that grows your audience.",
    fullDescription:
      "We create social media strategies and content that build real communities around your brand. From platform-specific content calendars and short-form video to community management and brand voice development, we handle the entire social presence so you can focus on running your business.",
    heroImage:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=90",
    features: [
      {
        title: "Social Strategy & Calendars",
        description:
          "Platform-specific content strategies with monthly editorial calendars, posting schedules, and campaign themes aligned to your business goals.",
      },
      {
        title: "Content Creation & Design",
        description:
          "Scroll-stopping graphics, carousels, reels, and short-form videos crafted to engage your audience and showcase your brand personality.",
      },
      {
        title: "Community Management",
        description:
          "Active engagement with your followers through comment responses, DM management, and proactive community-building that fosters brand loyalty.",
      },
      {
        title: "Brand Voice Development",
        description:
          "A consistent, authentic brand voice across every platform that resonates with your target audience and sets you apart from competitors.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Brand Discovery",
        description:
          "We deep-dive into your brand identity, audience personas, and competitors to define your unique social voice and visual direction.",
      },
      {
        num: "02",
        title: "Content Planning",
        description:
          "Monthly content calendars with post themes, copy, hashtag strategies, and creative briefs ready for your approval.",
      },
      {
        num: "03",
        title: "Create & Publish",
        description:
          "Our team designs, writes, and schedules all content. We handle posting, stories, reels, and real-time engagement.",
      },
      {
        num: "04",
        title: "Analyze & Evolve",
        description:
          "Monthly analytics reviews identify top-performing content. We double down on what works and iterate on what does not.",
      },
    ],
    stats: [
      { value: "Steady", label: "Audience Growth" },
      { value: "Hundreds", label: "of Posts Created" },
      { value: "Multi", label: "Platform Coverage" },
      { value: "100%", label: "Brand-Aligned" },
    ],
    faqs: [
      {
        question: "Which social platforms do you manage?",
        answer:
          "We manage Instagram, Facebook, TikTok, LinkedIn, X (Twitter), Pinterest, and YouTube. We recommend platforms based on where your target audience is most active.",
      },
      {
        question: "Do you create video content?",
        answer:
          "Yes. We produce short-form reels, TikToks, stories, and promotional video clips. For longer-form video production, we partner with specialized videographers.",
      },
      {
        question: "How many posts per week can I expect?",
        answer:
          "Our standard plans include 3-5 posts per platform per week, plus daily story content. Custom frequencies are available based on your goals and budget.",
      },
      {
        question: "Will I approve content before it goes live?",
        answer:
          "Absolutely. You receive the full content calendar for review and approval before anything is published. We use collaborative tools that make the review process easy.",
      },
    ],
    bullets: [
      "Platform-specific content calendars",
      "Reels, carousels & graphic design",
      "Community management & engagement",
      "Monthly analytics & growth reports",
    ],
    relatedSlugs: ["digital-marketing", "ad-creation"],
  },
  {
    slug: "website-design",
    title: "Website Design",
    subtitle: "UI/UX, MOBILE-FIRST & CONVERSION",
    num: "03",
    shortDescription:
      "Custom, conversion-focused websites that look premium and perform even better.",
    fullDescription:
      "We design and develop custom websites that look stunning and convert visitors into customers. Every site is mobile-first, lightning-fast, and built with conversion optimization at its core. From landing pages and sales funnels to full e-commerce stores, we create digital experiences that drive revenue.",
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=90",
    features: [
      {
        title: "UI/UX Design",
        description:
          "Beautiful, intuitive interfaces designed through user research and wireframing. Every element is placed with purpose to guide visitors toward action.",
      },
      {
        title: "Mobile-First Development",
        description:
          "Responsive designs that look and perform flawlessly across all devices. We build mobile-first, then scale up to ensure the best experience everywhere.",
      },
      {
        title: "Sales Funnels & Landing Pages",
        description:
          "High-converting landing pages and multi-step funnels designed to capture leads, nurture prospects, and drive sales with strategic CTAs.",
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Full online store setups with product catalogs, payment processing, inventory management, and checkout flows optimized for maximum revenue.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery & Wireframes",
        description:
          "We map out your site architecture, user flows, and create wireframes that define the structure before any visual design begins.",
      },
      {
        num: "02",
        title: "Visual Design",
        description:
          "High-fidelity mockups bring your brand to life with custom layouts, typography, color schemes, and imagery that resonate with your audience.",
      },
      {
        num: "03",
        title: "Development & QA",
        description:
          "Clean, performant code brings designs to life. Rigorous cross-browser and device testing ensures everything works perfectly.",
      },
      {
        num: "04",
        title: "Launch & Support",
        description:
          "We handle the launch, monitor performance, and provide ongoing support to keep your site fast, secure, and up to date.",
      },
    ],
    stats: [
      { value: "100%", label: "Custom Built" },
      { value: "Fast", label: "Load Times" },
      { value: "Mobile", label: "First Design" },
      { value: "Dozens", label: "of Sites Launched" },
    ],
    faqs: [
      {
        question: "How long does a website project take?",
        answer:
          "A standard 5-8 page website takes 4-6 weeks from kickoff to launch. More complex sites with e-commerce or custom functionality may take 8-12 weeks.",
      },
      {
        question: "Do you build on WordPress or custom code?",
        answer:
          "We work with both. WordPress is great for content-heavy sites that need easy editing. For performance-critical or custom applications, we build with modern frameworks like Next.js and React.",
      },
      {
        question: "Will I be able to edit the site myself?",
        answer:
          "Yes. Every site includes a content management system or admin panel that lets you update text, images, and basic layouts without any coding knowledge.",
      },
      {
        question: "Do you include SEO optimization?",
        answer:
          "Every site we build includes technical SEO foundations: proper meta tags, semantic HTML, fast load times, mobile optimization, and schema markup.",
      },
    ],
    bullets: [
      "Custom UI/UX design & prototyping",
      "Mobile-first responsive development",
      "Sales funnels & landing page optimization",
      "E-commerce store setup & configuration",
    ],
    relatedSlugs: ["website-hosting", "software-development"],
  },
  {
    slug: "website-hosting",
    title: "Website Hosting",
    subtitle: "UPTIME, SECURITY & PERFORMANCE",
    num: "04",
    shortDescription:
      "Fast, secure, and reliable hosting with 99.9% uptime and hands-free management.",
    fullDescription:
      "We provide fully managed hosting that keeps your website fast, secure, and always online. From SSL certificates and automated backups to performance optimization and 24/7 monitoring, we handle the technical infrastructure so you never have to worry about downtime or security threats.",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90",
    features: [
      {
        title: "99.9% Uptime Guarantee",
        description:
          "Enterprise-grade infrastructure with redundant servers, load balancing, and automatic failover ensures your site stays online around the clock.",
      },
      {
        title: "SSL & Security",
        description:
          "Free SSL certificates, firewall protection, malware scanning, and DDoS mitigation keep your site and visitor data safe from threats.",
      },
      {
        title: "Automated Backups",
        description:
          "Daily automated backups with one-click restore capability. Your data is stored securely across multiple geographic locations for added safety.",
      },
      {
        title: "Managed WordPress",
        description:
          "Automatic core, theme, and plugin updates with staging environments for testing changes before they go live on your production site.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Migration & Setup",
        description:
          "We handle the full migration from your current host with zero downtime. DNS, SSL, and server configuration are all managed for you.",
      },
      {
        num: "02",
        title: "Performance Tuning",
        description:
          "CDN setup, caching configuration, image optimization, and database tuning to maximize your site speed globally.",
      },
      {
        num: "03",
        title: "Monitoring & Maintenance",
        description:
          "24/7 uptime monitoring with instant alerts. We proactively address issues before they impact your visitors.",
      },
    ],
    stats: [
      { value: "99.9%", label: "Uptime Target" },
      { value: "Fast", label: "Response Times" },
      { value: "24/7", label: "Monitoring" },
      { value: "Daily", label: "Backups" },
    ],
    faqs: [
      {
        question: "Can you migrate my existing site?",
        answer:
          "Yes. We handle full site migrations from any hosting provider with zero downtime. The entire process is managed by our team, including DNS updates and SSL configuration.",
      },
      {
        question: "What happens if my site goes down?",
        answer:
          "Our monitoring systems detect issues within seconds and alert our team. Most issues are resolved automatically. For manual interventions, we target resolution within 15 minutes.",
      },
      {
        question: "Do you support non-WordPress sites?",
        answer:
          "Absolutely. We host static sites, Next.js applications, Node.js apps, and other frameworks. Our infrastructure is flexible enough to support most modern web technologies.",
      },
      {
        question: "How often are backups taken?",
        answer:
          "Daily automated backups are standard, with 30-day retention. Critical sites can be configured for real-time backups with point-in-time recovery.",
      },
    ],
    bullets: [
      "99.9% uptime with 24/7 monitoring",
      "Free SSL certificates & firewall protection",
      "Daily automated backups with one-click restore",
      "Managed WordPress updates & staging environments",
    ],
    relatedSlugs: ["website-design", "software-development"],
  },
  {
    slug: "software-development",
    title: "Software & App Development",
    subtitle: "CUSTOM APPS, CRM & AUTOMATION",
    num: "05",
    shortDescription:
      "Custom apps, CRM integrations, workflow automation, and scalable software solutions.",
    fullDescription:
      "We build custom software solutions that streamline your operations and give you a competitive edge. From internal tools and CRM integrations to workflow automation and API development, our engineering team delivers scalable, maintainable applications tailored to your exact business requirements.",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=90",
    features: [
      {
        title: "Custom Application Development",
        description:
          "Bespoke web and mobile applications built from scratch to solve your unique business challenges with modern, scalable architectures.",
      },
      {
        title: "CRM & Integration",
        description:
          "Seamless integrations with Salesforce, HubSpot, and custom CRM solutions that unify your data and automate your sales pipeline.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automated business processes that eliminate manual tasks, reduce errors, and free your team to focus on high-value work.",
      },
      {
        title: "API Development & Integration",
        description:
          "RESTful and GraphQL APIs that connect your systems, enable third-party integrations, and power your digital ecosystem.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Requirements & Architecture",
        description:
          "We document your requirements, map out system architecture, and define the technical roadmap with clear milestones and deliverables.",
      },
      {
        num: "02",
        title: "Agile Development",
        description:
          "Two-week sprint cycles with regular demos keep you involved. You see working software early and often, not just at the end.",
      },
      {
        num: "03",
        title: "Testing & Deployment",
        description:
          "Comprehensive automated testing, staging environment validation, and production deployment with monitoring and rollback capability.",
      },
      {
        num: "04",
        title: "Support & Iteration",
        description:
          "Post-launch support, bug fixes, and feature iterations based on real user feedback and evolving business needs.",
      },
    ],
    stats: [
      { value: "Dozens", label: "of Builds Delivered" },
      { value: "100%", label: "On-Time Delivery" },
      { value: "Custom", label: "Tailored Solutions" },
      { value: "Ongoing", label: "Support" },
    ],
    faqs: [
      {
        question: "What technologies do you work with?",
        answer:
          "Our primary stack includes React, Next.js, Node.js, Python, and PostgreSQL. We also work with React Native for mobile apps and integrate with major cloud platforms like AWS and Vercel.",
      },
      {
        question: "How do you handle project management?",
        answer:
          "We use agile methodology with two-week sprints. You get a dedicated project manager, access to our project board, and regular standup updates throughout development.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes. We specialize in system integration and have connected applications with CRMs, ERPs, payment processors, shipping APIs, and hundreds of other third-party services.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "We offer flexible maintenance and support plans that include bug fixes, security updates, performance monitoring, and feature development on a retainer basis.",
      },
    ],
    bullets: [
      "Custom web & mobile application development",
      "CRM integration & data migration",
      "Workflow automation & process optimization",
      "RESTful & GraphQL API development",
    ],
    relatedSlugs: ["ai-integration", "website-design"],
  },
  {
    slug: "ad-creation",
    title: "Ad Creation & Campaign Management",
    subtitle: "PAID MEDIA & FULL-FUNNEL",
    num: "06",
    shortDescription:
      "High-converting Google Ads, Meta campaigns, creative design, and ongoing A/B testing.",
    fullDescription:
      "We design and manage high-performing ad campaigns across Google, Meta, LinkedIn, and more. From creative concept and copywriting to audience targeting and A/B testing, every campaign is built to maximize conversions while minimizing wasted spend. Our data-driven approach ensures your ad budget works harder.",
    heroImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=90",
    features: [
      {
        title: "Google Ads Management",
        description:
          "Search, display, shopping, and YouTube ad campaigns with strategic keyword targeting, compelling copy, and optimized bidding to capture high-intent traffic.",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description:
          "Full-funnel Meta campaigns with custom audiences, lookalikes, retargeting, and creative formats optimized for each stage of the buyer journey.",
      },
      {
        title: "Creative Design & Copywriting",
        description:
          "Thumb-stopping ad creatives, video ads, carousel designs, and persuasive copy that grabs attention and drives action across every platform.",
      },
      {
        title: "A/B Testing & Optimization",
        description:
          "Systematic testing of headlines, creatives, audiences, and landing pages. We let the data decide what works and scale winning combinations.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Research & Strategy",
        description:
          "Audience research, competitor analysis, and campaign architecture designed around your goals, budget, and target customer profile.",
      },
      {
        num: "02",
        title: "Creative Production",
        description:
          "Our design team produces multiple ad variations across formats, from static images and carousels to short-form video ads.",
      },
      {
        num: "03",
        title: "Launch & Monitor",
        description:
          "Campaigns go live with real-time monitoring. We track impressions, clicks, conversions, and cost metrics from day one.",
      },
      {
        num: "04",
        title: "Test & Scale",
        description:
          "A/B test results guide creative refreshes and budget reallocation. Winning ads get scaled while underperformers are replaced.",
      },
    ],
    stats: [
      { value: "Strong", label: "ROAS Lift" },
      { value: "Strategic", label: "Spend Allocation" },
      { value: "A/B", label: "Tested Creative" },
      { value: "Always", label: "Optimizing" },
    ],
    faqs: [
      {
        question: "What platforms do you run ads on?",
        answer:
          "We manage campaigns on Google Ads (Search, Display, Shopping, YouTube), Meta (Facebook and Instagram), LinkedIn, TikTok, and Pinterest. Platform selection is based on where your audience is most active.",
      },
      {
        question: "How much should I budget for ad spend?",
        answer:
          "We recommend starting with at least $2,000 per month in ad spend per platform. This gives us enough data to optimize effectively. Management fees are separate from your ad budget.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Most campaigns start generating leads within the first 1-2 weeks. Full optimization typically takes 4-6 weeks as we gather data and refine targeting, creatives, and bidding strategies.",
      },
      {
        question: "Do you provide the ad creative or do I need to supply it?",
        answer:
          "We handle everything. Our team creates all ad visuals, writes copy, and produces video content. You just approve the creatives before they go live.",
      },
    ],
    bullets: [
      "Google Ads & Meta Ads campaign management",
      "Custom ad creative design & video production",
      "Audience targeting & retargeting strategy",
      "Ongoing A/B testing & performance optimization",
    ],
    relatedSlugs: ["digital-marketing", "social-content-creation"],
  },
  {
    slug: "ai-integration",
    title: "AI Integration & Automation",
    subtitle: "WORKFLOWS, OPERATIONS & BUSINESS AI",
    num: "07",
    shortDescription:
      "Practical AI systems that reduce manual work, automate follow-up, and help your team operate faster — built into the tools and processes you already use.",
    fullDescription:
      "We integrate practical AI into your daily operations — automating follow-up, reducing manual work, standardizing processes, and helping your team get more done without changing the way you already work. From CRM and project management tools to communication platforms and internal documentation, we build AI into the systems your business runs on.",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=90",
    features: [
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive business processes — from lead intake and assignment to invoicing and status updates — using AI-powered workflows that run in the background.",
      },
      {
        title: "Follow-Up & Communication Systems",
        description:
          "Automated follow-up sequences, internal notifications, client check-ins, and status updates that keep nothing from slipping through the cracks.",
      },
      {
        title: "Knowledge & Documentation",
        description:
          "Centralized knowledge bases, AI-assisted SOPs, and searchable documentation systems that capture what your team knows and make it accessible to everyone.",
      },
      {
        title: "Operations & Admin Automation",
        description:
          "Reduce the hours your team spends on scheduling, data entry, report generation, and routine admin through targeted AI automation.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit",
        description:
          "We map your current workflows, tools, and team processes to identify where AI can save the most time and reduce the most friction.",
      },
      {
        num: "02",
        title: "Design",
        description:
          "We build a custom automation plan targeting your highest-impact processes — with clear outcomes and timelines for each.",
      },
      {
        num: "03",
        title: "Implement",
        description:
          "We configure, integrate, and test every automation in your live environment — with your team involved at every step.",
      },
      {
        num: "04",
        title: "Support",
        description:
          "Ongoing monitoring, optimization, and training to make sure your AI systems keep delivering as your business evolves.",
      },
    ],
    stats: [
      { value: "50+", label: "Workflows Built" },
      { value: "60%", label: "Less Manual Work" },
      { value: "15+", label: "Hrs Saved Weekly" },
      { value: "12+", label: "Industries Served" },
    ],
    faqs: [
      {
        question: "Do I need to be technical to use AI in my business?",
        answer:
          "Not at all. We build systems that work inside the tools your team already uses — email, CRM, project management, calendars, and messaging. Your team doesn't need to learn AI. They just get faster, more consistent tools.",
      },
      {
        question:
          "How is this different from your software development service?",
        answer:
          "Software development builds custom applications from scratch — mobile apps, web platforms, APIs. AI Integration & Automation focuses on embedding AI into your existing tools and daily operations. Software development builds the car. AI integration makes it drive itself to the places you go every day.",
      },
      {
        question: "What tools and platforms do you integrate with?",
        answer:
          "We work with whatever your business already uses — HubSpot, Salesforce, Slack, Microsoft Teams, Google Workspace, Asana, Monday, Notion, QuickBooks, and dozens of others. If your team uses it daily, we can integrate AI into it.",
      },
      {
        question: "How long does a typical AI integration project take?",
        answer:
          "Most initial implementations take 2 to 4 weeks from audit to live deployment. Simpler automations can be running within days. We prioritize quick wins first so your team sees value immediately, then expand from there.",
      },
    ],
    bullets: [
      "AI-powered workflow automation & process optimization",
      "Automated follow-up, reminders & communication sequences",
      "Internal knowledge bases & documentation systems",
      "AI integration with existing CRM, PM & business tools",
    ],
    relatedSlugs: ["software-development", "digital-marketing"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceDetail[] {
  return services.filter((s) => slugs.includes(s.slug));
}
