# Website Audit Workflow

How to deliver a complimentary website audit to leads from the
exit-intent popup. End-to-end: from lead → delivered audit in ~10
minutes per audit.

---

## 1. Setup (one-time)

### 1a. Wire up Resend (lead notifications)

The popup is connected to `/api/audit-request`. To get email
notifications when leads submit, set up Resend:

1. Sign up at <https://resend.com> (free: 3K emails/mo)
2. Add `simplyusandu.com` as a verified sending domain (one DNS
   record — see Resend dashboard)
3. Generate an API key
4. In the Vercel project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` → paste the key
   - `AUDIT_NOTIFY_EMAIL` → `Support@SimplyUsandU.com`
   - `AUDIT_FROM_EMAIL` → `leads@simplyusandu.com`
5. Redeploy (or push any commit — Vercel will auto-rebuild)

Done. From now on, every popup submission emails you the prospect's
URL, email, and a paste-ready Claude prompt.

> **Until Resend is set up**, the popup still works — leads just go
> to the Vercel function logs (Vercel Dashboard → Project → Logs).

### 1b. Subscribe to Claude Pro / Claude API

The audit workflow uses Claude (claude.ai or Claude Code) to do the
research and write. Either is fine.

---

## 2. The Per-Lead Workflow (~7-10 minutes per audit)

When a popup submission arrives in your inbox:

### Step 1 — Open the email
The notification includes a "Paste-Ready Claude Prompt" with the
prospect's URL pre-filled. Copy that prompt.

### Step 2 — Run it through Claude
Paste it into Claude (claude.ai or Claude Code with internet/computer
access). Claude will:
- Visit the prospect's site
- Identify 3-5 actionable issues
- Output a formatted Markdown report

**Tip:** Use Claude's web-browsing or computer-use feature so it
actually fetches the live site rather than guessing.

### Step 3 — Edit for voice
Read through Claude's output. Edit anything that:
- Sounds too generic
- Doesn't reflect what you'd actually say
- Includes claims you can't back up

This step takes 2-3 minutes. The whole point of the offer is that it
feels personal — your voice matters.

### Step 4 — Convert to PDF
Three easy options:
- **Easiest:** Paste the Markdown into a Notion page, "Export as PDF"
- **Fastest:** Use [md-to-pdf.fly.dev](https://md-to-pdf.fly.dev) or similar
- **Branded:** Use a Google Doc template with your logo

### Step 5 — Send the email
Reply to the lead's email with:

```
Subject: Your website review — [their domain]

Hi [first name if you have it],

Thanks for the chance to look at [their domain]. The PDF attached
has 5 specific things you can knock out this week — most of them
are quick fixes that compound into bigger wins.

If you want our team to handle any of them, just reply or grab a
free call here: simplyusandu.com/contact

Either way, hope this is useful.

Oz
Simply Us & U
(770) 524-0488
```

### Step 6 — Log the lead
Add to your CRM, spreadsheet, or follow-up tool. The popup form
doesn't store anywhere yet — leads come via email only. If volume
gets high, we can wire it into HubSpot / Airtable / Notion.

---

## 3. The Claude Prompt (reference copy)

This is what `/api/audit-request` automatically generates and emails
you. Below is a generic version you can paste into Claude any time.

````
You are an expert website auditor. Produce a 1-page website review
for Simply Us & U to send to a prospect.

PROSPECT WEBSITE: [URL HERE]

Steps:
1. Fetch the homepage and 1-2 key pages.
2. Take or describe a screenshot of the homepage above the fold.
3. Identify 3-5 specific, actionable issues across these categories:
   - First-impression / value proposition (clear in 5 seconds?)
   - Mobile experience / responsive design
   - Page speed signals (compressed images, unoptimized assets,
     render-blocking)
   - SEO basics (title tag, meta description, H1, schema, alt text)
   - Conversion signals (clear CTAs, trust elements, social proof)
   - Local SEO (if relevant — GBP mentions, NAP consistency,
     location signals)

OUTPUT FORMAT (one page, ~400-600 words):

# Website Audit: [URL]

**Prepared by Simply Us & U** · [today's date]

## What's working
[2-3 sentences on what they're doing right — start with positives]

## 5 things to fix this week

### 1. [Issue title]
[2-3 sentences: what we noticed, why it matters, what to do]

### 2. [Issue title]
[Same format]

### 3. [Issue title]
[Same format]

### 4. [Issue title]
[Same format]

### 5. [Issue title]
[Same format]

## What this could mean for your business
[2-3 sentences connecting the fixes to outcomes — more leads,
better SEO, less bounce]

---
Want our team to handle these fixes for you? Reply to this email
or book a free call: simplyusandu.com/contact

Tone: plain-spoken, helpful, not salesy. Specific examples over
vague advice. No invented stats. No "industry-leading" filler.
````

---

## 4. Conversion Math

| Step | Conversion |
|------|-----------|
| Visitors who hit exit-intent | ~15-30% of all desktop sessions |
| Of those, who submit | ~3-8% (industry standard) |
| Of submitters, who become a discovery call | ~30-50% |
| Of calls, who become a paying client | ~25-40% |

**Working assumption:** 1,000 desktop sessions/mo = ~5-15 audit
requests = ~2-5 discovery calls = ~1-2 new clients/mo from this
single popup.

---

## 5. When to Automate Further

This manual workflow is the right call for **the first 50-100
audits**. After that, if volume gets crazy:

- Pre-fetch screenshots automatically (Browserless / ApiFlash)
- Auto-pull Lighthouse + PageSpeed data
- Use Claude API to draft → you review → send
- Store leads in Airtable or Notion automatically
- Send templated follow-up emails via Resend automation

We can build that as a Phase 2 when the volume justifies it. For
now, manual delivery preserves the personal-feel that makes the
offer convert in the first place.
