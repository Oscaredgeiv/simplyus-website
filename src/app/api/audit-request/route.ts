import { NextResponse } from "next/server";

/**
 * /api/audit-request — receives website-audit lead from exit-intent popup.
 *
 * If RESEND_API_KEY is set in environment variables, sends an email to
 * Support@SimplyUsandU.com with the prospect's URL + email + a ready-
 * to-use Claude prompt for generating their custom audit.
 *
 * If no API key, falls back to console logging so the form still works
 * during local dev.
 *
 * Setup:
 *   1. Sign up at https://resend.com (free tier: 3K emails/mo)
 *   2. Verify simplyusandu.com as a sending domain
 *   3. Add RESEND_API_KEY to Vercel project env vars
 *   4. Set AUDIT_NOTIFY_EMAIL to your inbox (defaults to support address)
 */

const NOTIFY_EMAIL =
  process.env.AUDIT_NOTIFY_EMAIL || "Support@SimplyUsandU.com";
/* Defaults to Resend's free dev sender (works without domain verification).
   Once simplyusandu.com is verified in Resend, set AUDIT_FROM_EMAIL to
   leads@simplyusandu.com for branded sending. */
const FROM_EMAIL = process.env.AUDIT_FROM_EMAIL || "onboarding@resend.dev";

interface AuditRequestBody {
  website?: string;
  email?: string;
}

export async function POST(req: Request) {
  let body: AuditRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const website = (body.website || "").trim();
  const email = (body.email || "").trim();

  /* Basic validation */
  if (!website || !email) {
    return NextResponse.json(
      { error: "Both website and email are required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email." },
      { status: 400 },
    );
  }

  /* Normalize URL */
  let normalizedUrl = website;
  if (!/^https?:\/\//i.test(normalizedUrl)) {
    normalizedUrl = `https://${normalizedUrl}`;
  }

  /* Build a paste-ready Claude prompt for Oz */
  const claudePrompt = buildClaudePrompt(normalizedUrl, email);

  const apiKey = process.env.RESEND_API_KEY;

  /* No API key → just log and succeed (so the form still works) */
  if (!apiKey) {
    console.log("[audit-request] No RESEND_API_KEY — logging instead");
    console.log({ website: normalizedUrl, email });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  /* Send notification via Resend */
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        reply_to: email,
        subject: `New website audit request — ${normalizedUrl}`,
        html: buildEmailHtml(normalizedUrl, email, claudePrompt),
      }),
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => "");
      console.error("[audit-request] Resend error", r.status, errText);
      /* Don't fail the user-facing flow over email issues */
      return NextResponse.json({ ok: true, mode: "queued" });
    }

    return NextResponse.json({ ok: true, mode: "sent" });
  } catch (err) {
    console.error("[audit-request] Send failed", err);
    return NextResponse.json({ ok: true, mode: "errored" });
  }
}

/* ─────────────────────── helpers ─────────────────────── */

function buildClaudePrompt(url: string, email: string): string {
  return `You are an expert website auditor. Produce a 1-page website review for Simply Us & U to send to a prospect.

PROSPECT WEBSITE: ${url}
PROSPECT EMAIL: ${email}

Steps:
1. Fetch the homepage and 1-2 key pages.
2. Take or describe a screenshot of the homepage above the fold.
3. Identify 3-5 specific, actionable issues across these categories:
   - First-impression / value proposition (is it clear in 5 seconds?)
   - Mobile experience / responsive design
   - Page speed signals (compressed images, unoptimized assets, render-blocking)
   - SEO basics (title tag, meta description, H1, schema, alt text)
   - Conversion signals (clear CTAs, trust elements, social proof)
   - Local SEO (if relevant — GBP mentions, NAP consistency, location signals)

OUTPUT FORMAT (one page, ~400-600 words total):

# Website Audit: ${url}

**Prepared by Simply Us & U** · ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}

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
[2-3 sentences connecting the fixes to outcomes — more leads, better SEO, less bounce]

---
Want our team to handle these fixes for you? Reply to this email or book a free call: simplyusandu.com/contact

Tone: plain-spoken, helpful, not salesy. Specific examples over vague advice. No invented stats. No "industry-leading" filler.`;
}

function buildEmailHtml(url: string, email: string, prompt: string): string {
  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  return `<!doctype html>
<html><body style="font-family:-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif;background:#0B0B0D;color:#fff;margin:0;padding:24px;">
  <div style="max-width:640px;margin:0 auto;background:#111;border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:32px;">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.32em;text-transform:uppercase;color:#F97316;">New Audit Request</div>
    <h1 style="font-size:24px;font-weight:700;margin:12px 0 24px;color:#fff;">Website audit lead — ${escape(url)}</h1>

    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <tr>
        <td style="padding:8px 0;color:#9CA3AF;width:120px;">Website:</td>
        <td style="padding:8px 0;"><a href="${escape(url)}" style="color:#F97316;">${escape(url)}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#9CA3AF;">Email:</td>
        <td style="padding:8px 0;"><a href="mailto:${escape(email)}" style="color:#F97316;">${escape(email)}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#9CA3AF;">Submitted:</td>
        <td style="padding:8px 0;color:#fff;">${new Date().toUTCString()}</td>
      </tr>
    </table>

    <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:0.32em;text-transform:uppercase;color:#F97316;margin-bottom:12px;">Paste-Ready Claude Prompt</div>
      <p style="color:#9CA3AF;font-size:14px;line-height:1.6;margin:0 0 16px;">Copy the prompt below into Claude (claude.ai or Claude Code) to generate the audit. Edit before sending.</p>
      <pre style="background:#0B0B0D;border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:16px;color:#D1D5DB;font-size:12px;line-height:1.5;white-space:pre-wrap;word-wrap:break-word;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">${escape(prompt)}</pre>
    </div>

    <div style="margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:12px;color:#6B7280;">
      Sent from simplyusandu.com exit-intent capture
    </div>
  </div>
</body></html>`;
}
