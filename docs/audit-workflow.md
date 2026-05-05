# Website Audit Workflow

How to deliver a complimentary website audit to leads from the
exit-intent popup. End-to-end: from lead → delivered audit in ~10
minutes per audit.

---

## 1. Lead Delivery (already configured)

Leads from the exit-intent popup are delivered via **Gmail SMTP**
to your inbox automatically.

**Currently configured in Vercel env vars:**
- `SMTP_HOST` = `smtp.gmail.com`
- `SMTP_PORT` = `587`
- `SMTP_USER` = `oscar@servicestorm.io` (Gmail App Password)
- `SMTP_PASS` = (Gmail App Password)
- `FROM_EMAIL` = `support@servicestorm.io`
- `NOTIFY_EMAIL` = `support@servicestorm.io`

To change which inbox leads land in, edit the `NOTIFY_EMAIL` env
var in Vercel → Project Settings → Environment Variables, then
redeploy.

> **No service signup needed.** Resend, Formspree, etc. were
> alternatives — we use your existing Gmail SMTP setup instead.

---

## 2. The Per-Lead Workflow (~7-10 minutes per audit)

When a popup submission arrives in your inbox:

### Step 1 — Open the email
Subject: *"New website audit request — [their domain]"*

The email contains a "Paste-Ready Claude Prompt" with the
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
Reply to the lead's email (the popup auto-sets `Reply-To` to the
prospect, so just hit reply) with:

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

## 5. Troubleshooting

**Leads aren't arriving:**
1. Check Vercel → Project → Logs for errors from `/api/audit-request`
2. Verify `SMTP_*` env vars are present in Vercel settings
3. Confirm the Gmail App Password hasn't expired (rotate at
   <https://myaccount.google.com/apppasswords> if it has)
4. Check spam folder on the receiving inbox

**Want to change the destination email:**
1. Vercel → Project → Settings → Environment Variables
2. Edit `NOTIFY_EMAIL` to your preferred inbox
3. Redeploy (or push any commit)
