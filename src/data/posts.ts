export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  blocks: PostBlock[];
}

export const posts: Post[] = [
  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: "signs-your-website-is-costing-you-customers",
    title: "5 Signs Your Website Is Costing You Customers",
    excerpt:
      "Your website might be your biggest liability. Slow load times, confusing navigation, and poor mobile design silently drive customers away every day. Here's how to spot the leaks.",
    date: "Jan 15, 2025",
    readTime: "6 min read",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=630&fit=crop",
    blocks: [
      {
        type: "paragraph",
        text: "Your website is open 24 hours a day, 7 days a week. It's also the first impression most of your customers will ever get of your business. So when something on it isn't working, you're not just losing visitors — you're losing real revenue, and you usually have no idea it's happening.",
      },
      {
        type: "paragraph",
        text: "We audit a lot of websites for new clients, and the same five problems come up over and over. None of them are mysterious or expensive to fix. But left alone, any one of them can quietly chase customers to your competitors.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. It takes more than 3 seconds to load",
      },
      {
        type: "paragraph",
        text: "Google's own data shows that a site loading in 1 second has a bounce rate around 9%. At 5 seconds, that jumps to 38%. By the time your homepage finally renders, more than a third of your visitors have already given up and clicked back to Google.",
      },
      {
        type: "paragraph",
        text: "The most common culprits are oversized images, bloated page builders, and cheap shared hosting. A modern site should fully load in under 2 seconds on a normal connection. If yours doesn't, that's not a nice-to-have — it's actively costing you sales.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. The mobile experience is an afterthought",
      },
      {
        type: "paragraph",
        text: "Roughly 60-70% of all web traffic happens on a phone. If your site was designed on a desktop and never properly tested on mobile, your customers are probably pinching, zooming, and squinting at tiny buttons that aren't meant to be tapped with a thumb.",
      },
      {
        type: "paragraph",
        text: "A mobile-first site isn't just smaller — it's structured differently. Navigation collapses, copy gets shorter, buttons get bigger, forms get simpler. If your mobile experience is just your desktop site shrunk down, you're losing the majority of your visitors.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. There's no clear value proposition above the fold",
      },
      {
        type: "paragraph",
        text: "When a visitor lands on your homepage, they should be able to answer three questions in five seconds: What do you do? Who is it for? What should I do next? If your hero section is a stock photo of a handshake and a vague slogan like \"Excellence Delivered,\" your visitors are doing the math on whether to stay — and most won't.",
      },
      {
        type: "paragraph",
        text: "The fix is brutally simple: replace the slogan with a one-sentence description of exactly what you do and who you do it for. Pair it with one obvious call-to-action. That's it.",
      },
      {
        type: "heading",
        level: 2,
        text: "4. The navigation confuses visitors",
      },
      {
        type: "paragraph",
        text: "There's a design principle called Hick's Law: the more choices you give someone, the longer it takes them to make any choice — and the more likely they are to make none. A nav bar with 12 links isn't more useful than one with 5. It's actually less useful.",
      },
      {
        type: "paragraph",
        text: "Your top-level navigation should have your most important pages and nothing else. Services, About, Contact. Maybe a blog. Everything else can live in the footer. Your visitors aren't browsing your sitemap — they want one specific thing, and your job is to get them there.",
      },
      {
        type: "heading",
        level: 2,
        text: "5. Your calls-to-action are buried or missing",
      },
      {
        type: "paragraph",
        text: "Look at your homepage right now. How many times does the visitor see a clear next step? Once? Zero times? On a well-converting page, the answer is at least three: in the hero, somewhere in the middle, and again before the footer.",
      },
      {
        type: "paragraph",
        text: "And your CTA isn't \"Learn More.\" It's a verb-driven action that tells the visitor what they're about to get: \"Get a Free Quote,\" \"Book a Strategy Call,\" \"See Pricing.\" If a visitor has to hunt for the next step, they won't.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to know if any of this applies to you",
      },
      {
        type: "paragraph",
        text: "Run your homepage through Google PageSpeed Insights. That'll tell you in 30 seconds whether your load times and mobile experience are actually working. Then ask three people who've never seen your site to look at it for 5 seconds and tell you what your business does. If they can't, your value prop is buried.",
      },
      {
        type: "paragraph",
        text: "If you find yourself nodding through this list, the good news is none of these are hard to fix — most of the time it's a few hours of focused work, not a full rebuild. We do this kind of audit and fix-up work for clients all the time. Drop us a line if you want a second pair of eyes on your site.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: "google-ads-vs-meta-ads-where-to-spend",
    title: "Google Ads vs. Meta Ads: Where Should You Spend Your Budget?",
    excerpt:
      "Both platforms can deliver incredible ROI — but only if you use them correctly. Here's a plain-English breakdown of where each one wins and how to split your budget.",
    date: "Jan 8, 2025",
    readTime: "8 min read",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=630&fit=crop",
    blocks: [
      {
        type: "paragraph",
        text: "It's the question we get asked more than any other: \"Should I be running Google Ads or Facebook Ads?\" The honest answer is usually \"both, but not equally.\" Each platform does something fundamentally different, and the right split depends entirely on what you sell, who buys it, and how they decide to buy.",
      },
      {
        type: "paragraph",
        text: "Here's the simplest way to think about it: Google captures demand. Meta creates demand.",
      },
      {
        type: "heading",
        level: 2,
        text: "Google Ads: catching people who are already looking",
      },
      {
        type: "paragraph",
        text: "When someone types \"emergency plumber near me\" into Google, they don't need convincing. They need a phone number. Google Ads put you in front of customers at the exact moment they've decided they need what you sell. That's why search ads convert so well — the buying intent is already there.",
      },
      {
        type: "paragraph",
        text: "This makes Google a great fit for businesses with high intent searches: contractors, lawyers, dentists, B2B services, anything where customers know exactly what they need. The downside is that everyone else knows this too, so click costs in competitive industries can hit $20-$80 per click.",
      },
      {
        type: "heading",
        level: 3,
        text: "Google works best when:",
      },
      {
        type: "list",
        items: [
          "People actively search for your service (\"roofer in Atlanta,\" \"divorce lawyer\")",
          "You have a clear, urgent need to capture",
          "Your average customer value is high enough to justify expensive clicks",
          "You can answer phones or respond to leads quickly",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Meta Ads: putting you in front of people who don't know they want you yet",
      },
      {
        type: "paragraph",
        text: "Meta — Facebook and Instagram — works on a completely different principle. Nobody opens Instagram looking for a new e-commerce brand or a coaching program. They open it to see what their friends are up to. Your ad has to interrupt that scroll in a way that feels like content, not like an ad.",
      },
      {
        type: "paragraph",
        text: "When it works, Meta is unbeatable for reach and brand-building. You can put your business in front of 10,000 of exactly the right people for a fraction of what Google would cost. The catch is creative — bad ads burn your budget fast, and Meta rewards good content disproportionately. The same product can have a 1% conversion rate or a 5% conversion rate purely based on the creative.",
      },
      {
        type: "heading",
        level: 3,
        text: "Meta works best when:",
      },
      {
        type: "list",
        items: [
          "Your offer is visual or lifestyle-driven (e-commerce, services, courses)",
          "You're introducing something new or building a brand",
          "Your customers don't necessarily know they need your product yet",
          "You have content — photos, videos, testimonials — that can carry the message",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "How to split your budget (the boring honest answer)",
      },
      {
        type: "paragraph",
        text: "If you're a service business with people actively searching for what you do, start with 70% Google, 30% Meta. Use Google to capture the demand that already exists, and use Meta retargeting to stay in front of people who clicked but didn't convert.",
      },
      {
        type: "paragraph",
        text: "If you're an e-commerce brand or you're selling something people don't know they need yet, flip it: 70% Meta, 30% Google. Use Meta to build awareness and drive cold traffic, and use Google to capture branded searches and people who heard about you somewhere else.",
      },
      {
        type: "paragraph",
        text: "If you have no idea which describes you better, start with $1,000 on each platform for a month and track which one drove more revenue. Don't trust the click-through rate or the cost-per-click — track the actual sales each platform generated. The answer becomes obvious pretty quickly.",
      },
      {
        type: "heading",
        level: 2,
        text: "The mistake almost everyone makes",
      },
      {
        type: "paragraph",
        text: "The biggest mistake we see is running both platforms with no integration between them. People click your Google ad, leave without buying, and then never see your brand again. Or they engage with your Instagram content for weeks but never see a search ad when they finally type your name into Google.",
      },
      {
        type: "paragraph",
        text: "When you connect both platforms with proper retargeting, conversion tracking, and a unified strategy, the whole becomes way greater than the sum. That's the version that actually delivers the kind of returns people brag about.",
      },
      {
        type: "paragraph",
        text: "If you'd like a second opinion on what your business should be running, that's something we do every day. Get in touch and we'll take a look at your current ads or your industry and tell you where the easy wins are.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: "full-funnel-marketing-strategy-2025",
    title: "Why Your Business Needs a Full-Funnel Marketing Strategy in 2025",
    excerpt:
      "Most businesses pour money into ads without a plan for what happens after the click. Learn how a full-funnel approach turns strangers into loyal customers.",
    date: "Dec 28, 2024",
    readTime: "7 min read",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
    blocks: [
      {
        type: "paragraph",
        text: "Here's a bet you'll lose: nine out of ten small businesses we audit are running ads to a homepage and hoping for the best. They have no follow-up sequence, no retargeting, no email capture, no lead magnet, no nurture content. The visitor either buys today, or they're gone forever.",
      },
      {
        type: "paragraph",
        text: "That worked in 2015. In 2025, customers see thousands of ads a day and rarely buy on first contact. If your marketing strategy ends at the click, you're paying full price for prospects you'll never convert.",
      },
      {
        type: "heading",
        level: 2,
        text: "What a marketing funnel actually means (in plain English)",
      },
      {
        type: "paragraph",
        text: "A funnel is just the path someone walks from \"never heard of you\" to \"loyal repeat customer.\" Marketers split it into three parts:",
      },
      {
        type: "list",
        items: [
          "Top of funnel (TOFU): People who don't know you exist yet. Your job here is to show up and earn attention.",
          "Middle of funnel (MOFU): People who've heard of you and are weighing options. Your job here is to build trust.",
          "Bottom of funnel (BOFU): People who are ready to buy. Your job here is to make it easy to say yes.",
        ],
      },
      {
        type: "paragraph",
        text: "Most businesses only do bottom-of-funnel marketing — \"Buy Now! 20% Off!\" — and wonder why their cost per customer keeps going up. They're fishing in the smallest pond.",
      },
      {
        type: "heading",
        level: 2,
        text: "What a real full-funnel strategy looks like",
      },
      {
        type: "paragraph",
        text: "Here's a stripped-down example for a service business. Let's say you're a financial advisor.",
      },
      {
        type: "heading",
        level: 3,
        text: "TOFU: Educational content",
      },
      {
        type: "paragraph",
        text: "You publish short videos on Instagram and TikTok answering common questions: \"How much do I actually need to retire?\" \"What's the difference between a Roth and a Traditional IRA?\" You're not selling. You're teaching, and you're showing up consistently in their feed.",
      },
      {
        type: "heading",
        level: 3,
        text: "MOFU: Lead magnet + nurture sequence",
      },
      {
        type: "paragraph",
        text: "Some of those people click through to your site. They're not ready to hire you, but they'd take a free retirement readiness checklist in exchange for their email. Once they're on your list, they get a 5-email sequence over two weeks that mixes useful content with stories about your work.",
      },
      {
        type: "heading",
        level: 3,
        text: "BOFU: Conversion offer + retargeting",
      },
      {
        type: "paragraph",
        text: "After they've consumed enough content to know you're legit, they see a retargeting ad: \"Free 30-minute portfolio review.\" Now they're not strangers — they've seen 12 of your videos, read 5 of your emails, and they've been thinking about retirement for two months. The conversion rate on that BOFU offer is 5-10x what a cold ad would do.",
      },
      {
        type: "heading",
        level: 2,
        text: "The numbers that make full-funnel obvious",
      },
      {
        type: "paragraph",
        text: "Cold traffic to a homepage typically converts at 1-2%. The same person, after going through a real funnel, converts at 8-15%. That's not a small improvement — that's the difference between a marketing budget that works and one that doesn't.",
      },
      {
        type: "paragraph",
        text: "And the side effect is even better: a real funnel builds a list. Three years from now, that financial advisor has 5,000 people on their email list who've consumed their content for years. That asset is worth more than any single ad campaign.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to build one without losing your mind",
      },
      {
        type: "paragraph",
        text: "You don't have to build it all at once. Pick one missing piece and add it this month. Most service businesses we work with start with the lead magnet — it's the highest-leverage missing piece, and once you have a list, everything else gets easier.",
      },
      {
        type: "list",
        items: [
          "Month 1: Build a useful lead magnet and add an email signup to your site",
          "Month 2: Write a 5-email nurture sequence that delivers value first",
          "Month 3: Set up retargeting ads on Meta or Google for people who visit but don't convert",
          "Month 4: Start posting consistent TOFU content on the platform your customers actually use",
        ],
      },
      {
        type: "paragraph",
        text: "By month four, you have a real funnel. Your cost per acquisition starts dropping. Your email list starts compounding. And every dollar you spend on ads goes further because there's a system catching the leads instead of letting them fall through.",
      },
      {
        type: "paragraph",
        text: "If this feels like a lot to set up — it is. It's also exactly the kind of thing we set up for clients all the time. Reach out if you want a second pair of eyes on what your funnel is missing.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: "marketing-automation-save-20-hours-per-week",
    title: "How Marketing Automation Can Save You 20 Hours Per Week",
    excerpt:
      "Stop doing manually what software can do better. We break down the automations that free up your time and boost your results.",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
    blocks: [
      {
        type: "paragraph",
        text: "If you're a small business owner reading this, there's a good chance you're doing at least three jobs that should be done by software. Manually following up with leads. Manually sending appointment reminders. Manually copy-pasting customer data between five different tools. Each of those tasks feels small until you add them up at the end of the week.",
      },
      {
        type: "paragraph",
        text: "We've audited the workflows of dozens of service businesses, and the same pattern always shows up: the owner is the bottleneck on five things software could handle in their sleep. Automating those five things back is usually worth 15-20 hours per week.",
      },
      {
        type: "heading",
        level: 2,
        text: "What \"marketing automation\" actually means",
      },
      {
        type: "paragraph",
        text: "Marketing automation is just a fancy way of saying \"computers do the repetitive stuff so you don't have to.\" When a lead fills out a form, a system tags them, sends them a welcome email, notifies your sales team, adds them to a CRM, and books them on a follow-up reminder — all without you touching anything.",
      },
      {
        type: "paragraph",
        text: "It's not science fiction and it's not enterprise software. With the right setup, a one-person business can have automations that rival what a 50-person marketing team had in 2015.",
      },
      {
        type: "heading",
        level: 2,
        text: "The 5 automations every service business should have",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Instant lead notification + tagging",
      },
      {
        type: "paragraph",
        text: "When someone fills out your contact form, you get a text within 60 seconds. The lead is automatically added to your CRM with the right tag (\"Web Form,\" \"Service: Roofing,\" etc.). No copy-paste, no missed leads, no \"I'll get to it later.\" Studies show calling a lead within 5 minutes makes you 9x more likely to close — but most businesses take hours.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Welcome email sequence",
      },
      {
        type: "paragraph",
        text: "Within an hour of submitting that form, your prospect gets a personal-feeling welcome email from you. Two days later, a second email with a case study. Four days later, a third email inviting them to book a call. You wrote these emails once. They run forever.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Appointment reminders + no-show recovery",
      },
      {
        type: "paragraph",
        text: "When a lead books a call, they get an automatic confirmation email and a text reminder 1 hour before. If they miss the call, they get an automated \"Sorry we missed you — here's a link to rebook.\" Reschedule rates on no-shows can go from 10% to 40% with this single automation.",
      },
      {
        type: "heading",
        level: 3,
        text: "4. Review request after every job",
      },
      {
        type: "paragraph",
        text: "Three days after you mark a job complete in your CRM, your customer gets a friendly text asking how it went. If they respond positively, the next message links them to your Google Business Profile to leave a review. If they respond with a complaint, it routes to you personally before it ever becomes a public review. Reviews are the lifeblood of local businesses, and most owners are leaving them on the table.",
      },
      {
        type: "heading",
        level: 3,
        text: "5. Quarterly check-in for past customers",
      },
      {
        type: "paragraph",
        text: "Every customer you've worked with is a referral source you're probably ignoring. A simple automation that emails past customers every 90 days with a friendly message — \"How's everything? Any friends or family who could use what we do?\" — generates real referral revenue. And it costs zero dollars to run.",
      },
      {
        type: "heading",
        level: 2,
        text: "The tools that make it possible",
      },
      {
        type: "paragraph",
        text: "There's no single \"right\" tool, but the stack we set up most often for small businesses looks something like this:",
      },
      {
        type: "list",
        items: [
          "A CRM to hold customer data (HubSpot's free tier works great for most)",
          "An email/SMS automation tool (HubSpot, Klaviyo, ActiveCampaign)",
          "A scheduler (Calendly or Cal.com for booking)",
          "A connector tool (Zapier or Make) to glue everything together",
        ],
      },
      {
        type: "paragraph",
        text: "Total cost for a real, working stack: usually $50-150/month. The payback period is almost always under 30 days.",
      },
      {
        type: "heading",
        level: 2,
        text: "Where to start",
      },
      {
        type: "paragraph",
        text: "If you've never set anything like this up before, don't try to build all five at once. Start with #1 — instant lead notification — because it has the biggest immediate impact on revenue. Once that's running, add #3 (appointment reminders) because it stops you from leaving easy money on the floor. Build outward from there.",
      },
      {
        type: "paragraph",
        text: "Or — and this is the honest pitch — hire someone who's done this 30 times to set it up in a week instead of you spending three months figuring it out. Either way, every week you wait is a week of leads slipping through and time you can't get back.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: "social-media-content-that-converts",
    title: "The Ultimate Guide to Social Media Content That Actually Converts",
    excerpt:
      "Likes are nice, but revenue is better. Here are the content frameworks top brands use to turn scrollers into buyers — and how to apply them to your business.",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=630&fit=crop",
    blocks: [
      {
        type: "paragraph",
        text: "Most small business social media looks like this: post a photo of the team. Post a holiday graphic. Post a customer review. Post a stock image with a quote. Repeat for two years. Followers stay flat. Sales don't move. Eventually the owner concludes \"social doesn't work for our business\" and quits.",
      },
      {
        type: "paragraph",
        text: "Social does work. The problem is most businesses are creating content with no actual purpose. They're posting because they think they have to, not because the post is designed to do anything.",
      },
      {
        type: "heading",
        level: 2,
        text: "The only content framework you need",
      },
      {
        type: "paragraph",
        text: "There's a simple ratio that converting brands stick to: 3 educate, 2 entertain, 1 sell. For every six posts:",
      },
      {
        type: "list",
        items: [
          "Three teach your audience something useful (TOFU)",
          "Two entertain or build connection (community-building)",
          "One sells — directly pitches your service or product (BOFU)",
        ],
      },
      {
        type: "paragraph",
        text: "If all your posts are sales pitches, your audience tunes out. If you never sell, your audience never knows how to buy. The 3-2-1 ratio gives you enough goodwill to ask for the sale without burning out your followers.",
      },
      {
        type: "heading",
        level: 2,
        text: "The hook is everything",
      },
      {
        type: "paragraph",
        text: "On every platform — Instagram, TikTok, LinkedIn, X — the first 1-3 seconds determine whether anyone reads or watches the rest. That's it. Everything else only matters if the hook works.",
      },
      {
        type: "paragraph",
        text: "Hooks that work usually fall into one of these patterns:",
      },
      {
        type: "list",
        items: [
          "Contrarian: \"Most marketers tell you to post daily. Here's why we don't.\"",
          "Curiosity gap: \"This $20 fix saved our client $40,000 last year.\"",
          "Specific number: \"3 mistakes 90% of small business websites make.\"",
          "Direct callout: \"If you're a contractor, this video will change how you book jobs.\"",
          "Story open: \"Last week a client told me something that's stuck with me ever since.\"",
        ],
      },
      {
        type: "paragraph",
        text: "Spend more time on your hook than on the rest of the post. A great hook with average content beats a great post with a weak hook every single time.",
      },
      {
        type: "heading",
        level: 2,
        text: "Platform-specific advice (the short version)",
      },
      {
        type: "heading",
        level: 3,
        text: "Instagram",
      },
      {
        type: "paragraph",
        text: "Reels still get the most reach. Carousels are the best format for educational content because the algorithm rewards posts where people swipe through. Static photos are dying — only post them if they're genuinely beautiful or extremely on-brand.",
      },
      {
        type: "heading",
        level: 3,
        text: "TikTok",
      },
      {
        type: "paragraph",
        text: "Talking-head videos work best. Don't over-edit. Don't be too polished. The platform rewards content that feels organic and human. The first 1.5 seconds is everything — if your hook is weak, you're done.",
      },
      {
        type: "heading",
        level: 3,
        text: "LinkedIn",
      },
      {
        type: "paragraph",
        text: "Long text posts (1,000-1,500 characters) outperform everything else on LinkedIn. Personal stories beat business advice. Tag people sparingly. Post Tuesday-Thursday mornings for max reach.",
      },
      {
        type: "heading",
        level: 3,
        text: "Facebook",
      },
      {
        type: "paragraph",
        text: "Local groups and community pages drive more business for service businesses than your business page does. Spend less time posting on your page and more time being helpful in the groups your customers hang out in.",
      },
      {
        type: "heading",
        level: 2,
        text: "What to actually post (when you have no ideas)",
      },
      {
        type: "paragraph",
        text: "If you ever feel stuck, every business has these five posts available to them on any given day:",
      },
      {
        type: "list",
        items: [
          "Behind the scenes: a video of you doing the actual work",
          "Customer transformation: before/after of a real client result",
          "Common myth or mistake your customers make",
          "Question your customers ask all the time, with your answer",
          "Quick win or tip your customers can use today",
        ],
      },
      {
        type: "paragraph",
        text: "If you posted one of those five, three times a week, for one year, you'd have a better content library than 95% of small businesses. The hard part isn't ideas. It's the showing up.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to know if it's working",
      },
      {
        type: "paragraph",
        text: "Likes and follower count are vanity metrics. The numbers that actually matter are saves, shares, comments, profile visits, and link clicks. If your saves and shares are climbing, you're making content that resonates. If your profile visits and link clicks are climbing, you're making content that drives real business.",
      },
      {
        type: "paragraph",
        text: "And give it time. Six months of consistent posting before you judge whether the strategy works — not three weeks. Most businesses quit right before things start compounding.",
      },
      {
        type: "paragraph",
        text: "If you'd like a hand building a real content engine for your business, that's exactly the kind of work we love. Get in touch and we'll take a look at what you're posting now and where the easy wins are.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: "choosing-the-right-tech-stack",
    title: "Choosing the Right Tech Stack for Your Business",
    excerpt:
      "WordPress vs. custom code? Shopify vs. headless? No-code vs. real engineering? The right answer depends on your goals — here's a plain-English guide to picking the stack that won't bite you later.",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop",
    blocks: [
      {
        type: "paragraph",
        text: "Every business owner who's ever built a website has been here: standing in front of a wall of options, every developer telling you something different, every blog post recommending a different tool. WordPress! No, Webflow! No, custom Next.js! No, Shopify! The advice contradicts itself, the prices range from $30/month to $30,000, and somehow you're supposed to know which one is right for you.",
      },
      {
        type: "paragraph",
        text: "Here's the truth nobody tells you: most stack decisions don't matter that much. The wrong stack is rarely what kills a business. But picking poorly can absolutely cost you time and money down the road, and there are a few decisions that genuinely matter.",
      },
      {
        type: "heading",
        level: 2,
        text: "Start with what you're actually building",
      },
      {
        type: "paragraph",
        text: "Before you ask \"what tech should I use,\" answer this question: how complex is what I'm actually building? Most websites fall into one of three buckets, and the right stack is different for each.",
      },
      {
        type: "heading",
        level: 3,
        text: "Bucket 1: Simple business website (5-15 pages)",
      },
      {
        type: "paragraph",
        text: "If you're a service business, a local store, a portfolio, or a coach — and you mostly need an attractive site that makes the phone ring — almost any modern stack will work. The differences in performance and SEO at this size are tiny.",
      },
      {
        type: "paragraph",
        text: "Best options: WordPress (with a clean theme like GeneratePress), Webflow (if you want premium design without code), or a custom Next.js build (if you want maximum performance and don't mind hiring a developer). All three can produce great sites. Don't overthink it.",
      },
      {
        type: "heading",
        level: 3,
        text: "Bucket 2: E-commerce store",
      },
      {
        type: "paragraph",
        text: "If you're selling physical products, the answer is almost always Shopify. It's the boring choice, and it's the right choice. Shopify handles inventory, payments, taxes, shipping, and integrations in a way that custom builds simply can't match without 6 figures of engineering.",
      },
      {
        type: "paragraph",
        text: "When does it make sense to go custom? Only at very high volume (~$10M+/year) or with weird business models (subscription boxes, B2B with custom pricing, etc). Below that, Shopify wins.",
      },
      {
        type: "heading",
        level: 3,
        text: "Bucket 3: SaaS app or custom software",
      },
      {
        type: "paragraph",
        text: "Now we're in different territory. If you're building software with users, accounts, payments, dashboards — that's not a website, that's an application. WordPress and Webflow can't handle this. You need real code: Next.js + a real database (Postgres or Supabase), or Ruby on Rails, or a full custom build depending on what you're doing.",
      },
      {
        type: "paragraph",
        text: "The mistake here is trying to hack a SaaS app together in WordPress with 12 plugins. It works for about six months, then everything breaks at the worst possible time.",
      },
      {
        type: "heading",
        level: 2,
        text: "The decisions that actually matter",
      },
      {
        type: "paragraph",
        text: "Once you've picked a bucket, here are the decisions that genuinely affect your business long-term:",
      },
      {
        type: "heading",
        level: 3,
        text: "Hosting",
      },
      {
        type: "paragraph",
        text: "Cheap hosting is one of the fastest ways to kill an otherwise great site. $4/month shared hosting is shared with 500 other sites — when one of them gets a traffic spike, yours slows to a crawl. Pay $20-40/month for managed hosting (or use a modern platform like Vercel for Next.js sites). Your speed and SEO will thank you.",
      },
      {
        type: "heading",
        level: 3,
        text: "Speed and Core Web Vitals",
      },
      {
        type: "paragraph",
        text: "Google ranks sites partly based on how fast they load. Slow themes and bloated page builders will tank your SEO regardless of how good your content is. If you're picking WordPress, pick a fast, lightweight theme — not a flashy one that loads 14 JavaScript libraries.",
      },
      {
        type: "heading",
        level: 3,
        text: "Lock-in",
      },
      {
        type: "paragraph",
        text: "Some platforms make it easy to leave, others make it nearly impossible. Webflow, Squarespace, and most page builders trap your content in proprietary formats. WordPress and custom code give you full ownership. If long-term flexibility matters to you, factor that in.",
      },
      {
        type: "heading",
        level: 2,
        text: "When no-code is the right answer",
      },
      {
        type: "paragraph",
        text: "No-code tools like Webflow, Bubble, and Softr have come a long way. For a lot of small businesses, no-code is genuinely the right answer — you get a working product faster, cheaper, and without ongoing developer dependency.",
      },
      {
        type: "paragraph",
        text: "Use no-code when: you need to ship fast, your needs aren't unusual, and your team isn't technical. Skip no-code when: you have unusual integrations, very specific user experiences, or you expect to scale beyond what the platform was built for. Most platforms hit a ceiling somewhere — make sure you understand where yours is before you hit it at the wrong moment.",
      },
      {
        type: "heading",
        level: 2,
        text: "The most important advice nobody gives you",
      },
      {
        type: "paragraph",
        text: "Pick something and move. Spending three months agonizing over WordPress vs. Webflow is three months of not having a working site. Almost any modern stack will get you 90% of the way there. The 10% optimization that comes from picking the \"perfect\" tool is rarely worth the months of analysis paralysis.",
      },
      {
        type: "paragraph",
        text: "If you're stuck and you'd like a second opinion on what to build with, that's something we help clients with all the time. We'll look at what you're trying to do and tell you straight what we'd build it on — even if it's not something we'd handle ourselves.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: "small-business-seo-fundamentals",
    title: "Small Business SEO: The Only 5 Things That Actually Move the Needle",
    excerpt:
      "SEO is full of noise. Here's the short list of things that genuinely matter for a local or small business — and the long list of things you can ignore.",
    date: "Oct 30, 2024",
    readTime: "7 min read",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=1200&h=630&fit=crop",
    blocks: [
      {
        type: "paragraph",
        text: "The SEO industry has a problem. There are so many people selling SEO services that you'd think the algorithm is unknowable, ever-changing, and requires monthly retainers forever. The truth is much simpler: for a small or local business, five things drive 80% of your search results. The rest is noise.",
      },
      {
        type: "paragraph",
        text: "If you focus on these five and ignore everything else, you'll outrank almost every competitor in your area within 6-12 months. We've seen it happen dozens of times.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Get your Google Business Profile right",
      },
      {
        type: "paragraph",
        text: "If you're a local business, your Google Business Profile is more important than your website. It's what shows up in Google Maps and the local 3-pack on search results. A complete, well-optimized profile alone will outperform a beautiful website with a weak profile.",
      },
      {
        type: "list",
        items: [
          "Fill out every single field — categories, services, hours, attributes, photos",
          "Add at least 20 high-quality photos of your work",
          "Post weekly (yes, GBP has posts — most businesses ignore them)",
          "Respond to every review, positive or negative",
          "Get the business address, phone, and hours identical everywhere they appear online",
        ],
      },
      {
        type: "paragraph",
        text: "This is free and takes maybe 4 hours to do properly. Most of your competitors haven't done it. That's your opening.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Build location pages that actually serve people",
      },
      {
        type: "paragraph",
        text: "If you serve multiple cities or neighborhoods, you need a dedicated page for each one. Not a thin \"we serve Atlanta\" placeholder — a real page with local photos, local case studies, local landmarks, and information someone in that area would actually find useful.",
      },
      {
        type: "paragraph",
        text: "The mistake everyone makes is building 20 location pages that are clones of each other with the city name swapped. Google sees right through that. One excellent location page beats 20 thin ones.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. Get reviews. Then get more reviews.",
      },
      {
        type: "paragraph",
        text: "Google's local algorithm weights review count and recency heavily. A business with 200 reviews from the past year will outrank a business with 50 reviews from three years ago, even if the older business has a slightly higher star rating.",
      },
      {
        type: "paragraph",
        text: "Set up an automated text or email asking for reviews after every job. Most customers will leave one if you make it easy and you ask within 24 hours of finishing the work. Wait a week and the rate drops by half.",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Write content that answers real questions",
      },
      {
        type: "paragraph",
        text: "Forget keyword stuffing and \"SEO articles.\" The blog posts that actually rank are the ones that fully answer a real question your customers have. \"How much does it cost to install solar panels in Georgia?\" \"What's the difference between a French drain and a yard drain?\" \"How long does it take to remodel a kitchen?\"",
      },
      {
        type: "paragraph",
        text: "One genuinely useful 1,500-word article will rank better than 30 short articles written for keywords. Write fewer pieces. Make them excellent. Update them every year.",
      },
      {
        type: "heading",
        level: 2,
        text: "5. Earn links from other local businesses",
      },
      {
        type: "paragraph",
        text: "Backlinks are still one of the strongest SEO signals. For local businesses, the highest-leverage links come from other reputable local sources: chambers of commerce, local news, partner businesses, suppliers, industry associations, charity sponsorships.",
      },
      {
        type: "paragraph",
        text: "You don't need 1,000 links. You need 20 great ones from sources that matter in your area. Sponsor a local event. Get listed in the chamber of commerce directory. Partner with complementary businesses for cross-promotion. Each of these creates real backlinks that move your rankings.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can safely ignore",
      },
      {
        type: "paragraph",
        text: "While we're here, the things SEO blogs scream about that don't really matter for small businesses:",
      },
      {
        type: "list",
        items: [
          "Schema markup (a fine optimization, but not a needle-mover)",
          "Tweaking title tags to be exactly 60 characters",
          "Keyword density in your articles",
          "AMP pages (Google deprecated the priority)",
          "Buying directory submissions in bulk (mostly worthless or actively harmful)",
        ],
      },
      {
        type: "paragraph",
        text: "Anyone selling you SEO that focuses on these is selling you the cheap version. The five things above are where the actual results come from.",
      },
      {
        type: "heading",
        level: 2,
        text: "How long until it works?",
      },
      {
        type: "paragraph",
        text: "Local SEO has a much shorter timeline than people expect. With a properly optimized Google Business Profile, consistent reviews, and one or two location pages, most businesses see meaningful ranking improvements within 60-90 days. Full results — the kind where you're #1 for your money keywords — typically take 6-9 months.",
      },
      {
        type: "paragraph",
        text: "If you've been doing SEO for over a year and haven't seen results, the most likely explanation isn't that the algorithm hates you. It's that you're focused on the wrong things. The five above are where the leverage is. If you'd like a hand sorting out which ones your business is missing, that's exactly the kind of work we love to do.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
