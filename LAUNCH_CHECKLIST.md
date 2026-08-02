# Abhiriti Advisory — Go-Live Checklist

Everything below needs attention before this site goes live for real users. Ordered roughly by priority — nothing in "Domain & Hosting" or "Email" works live without those pieces in place first.

---

## 1. Domain & Hosting

- [ ] Buy the real domain (e.g. `abhiritiadvisory.com`, if that's the final name) and connect it in **Netlify → Domain settings**. Netlify's free auto-SSL handles HTTPS once DNS points to it.
- [ ] Once the domain is finalized, update the hardcoded canonical/OG URLs — currently all point to `https://abhiritiadvisory.com/` as a placeholder in:
  - `index.html` (canonical link, `og:url`, `og:image`, `twitter:image`)
  - `public/sitemap.xml`
  - `public/robots.txt`
- [ ] Add these environment variables in **Netlify → Site settings → Environment variables** (they currently only exist in the local `.env`, so the live site can't send emails yet):
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_NOTIFY_TEMPLATE_ID`
  - `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
  - `VITE_COMPANY_EMAIL`
  - `VITE_COMPANY_NAME`

## 2. Email — the biggest one

- [ ] **`RvTech1991@gmail.com` is a temp inbox** — replace with the real business email before launch. Once available:
  - Update `VITE_COMPANY_EMAIL` (local `.env` **and** Netlify env vars).
  - Connect that real inbox as the EmailJS Gmail service (or move to SMTP — see below).
- [ ] **Consider moving off a personal Gmail connection for real launch.** EmailJS-via-personal-Gmail landed in spam during testing. Once a real business domain exists, prefer either:
  - A Google Workspace email on your own domain, or
  - A dedicated transactional service (Resend, SES, etc.)
- [ ] EmailJS free tier caps at **200 emails/month** — fine to start, monitor and upgrade if enquiry volume grows.
- [ ] Manually update the phone number inside the **live Auto-Reply template content** in the EmailJS dashboard (code changes don't reach content already pasted into their editor).

## 3. Fake testimonials — needs a decision, not just an asset swap

The 6 testimonials (Rohan Deshpande, Kavya Menon, etc.) are **entirely fictional placeholder quotes** carried over from the original mockup — invented names, invented quotes, invented roles. Publishing fabricated testimonials attributed to named "clients" on a live CA firm's site is a real reputational/compliance risk. Before go-live, pick one:

- [ ] Replace with real client quotes (with their permission), **or**
- [ ] Replace names/photos with a clearly generic format (e.g. "Verified Client — Real Estate Sector"), **or**
- [ ] Remove the section until real testimonials exist.

## 4. Real media still needed

- [ ] **Hero background video** — currently generic Pexels stock footage (flagged with `TODO` in `src/components/Hero/Hero.tsx`). Replace with real footage of the team/office.
- [ ] **Testimonials video** — same situation, flagged in `src/components/Testimonials/Testimonials.tsx`.
- [ ] **About section team photo** — currently stock, should become a real team/office photo.
- [ ] Core Services tab images (tax documents, financial charts, blueprint, code screen) — generic but not misleading; fine to keep at launch, swap later for branded photography if desired.
- [x] Industry card photos (Mining, Logistics, etc.) — legitimately licensed stock representing the *sector*, not a specific client. No action needed, fine to keep permanently.

## 5. SEO finishing touches

- [ ] Create **`og-image.jpg`** (1200×630) and **`apple-touch-icon.png`** (180×180) — flagged with a `TODO` in `index.html`, not yet created.
- [ ] Confirm the JSON-LD `email`/`telephone` reflect the final (non-temp) contact details.
- [ ] After going live: submit the site + sitemap to **Google Search Console** and **Bing Webmaster Tools**.

## 6. Analytics

- [ ] No analytics installed yet. Add Google Analytics 4 or Plausible, loaded async/deferred so it doesn't block first paint.

## 7. Legal

- [ ] No **Privacy Policy** page exists yet. Since the contact form collects name/email/phone, a basic privacy policy is worth having (good practice, and often required by ad platforms/analytics providers). The sitemap is already structured to extend for this later.

## 8. Final QA pass before flipping it live

- [ ] Test the contact form end-to-end with a **real external recipient** (not the sending inbox itself) to confirm deliverability outside of spam.
- [ ] Run Lighthouse (mobile + desktop) against the targets in the original build spec (§8.7).
- [ ] Cross-browser/device check: Chrome, Safari, Firefox, Edge, iOS Safari, Android Chrome, at 375 / 768 / 1024 / 1440px widths.
- [ ] Verify `prefers-reduced-motion` disables the orb drift / marquee / fade animations for users who request it (already implemented — just needs a final confirmation pass).
