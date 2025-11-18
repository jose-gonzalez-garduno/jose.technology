# Task: Update Hero, Footer, and Services Copy

Goal: Keep AI in scope without hype. Emphasize consulting, modern websites/design, integrations/automation, custom software. Make it clear you’re not selling a product.

## 1) Hero (Homepage)

- Keep headline:
  Thoughtful engineering for growing businesses.

- Replace the subline with:
  Not a platform—just skilled engineers: modern websites, integrations, and custom software to solve real operational problems. We use AI where it adds clear value to speed and accuracy.

- CTA (unchanged or update as preferred):
  - Primary: Start a Modernization Review
  - Secondary: See How We Work

### Implementation notes
- Locate the hero component (commonly `pages/index.tsx`, `components/Hero.tsx`, or `components/home/Hero.tsx`).
- Search for the current subline text and replace with the new subline above.
- Ensure no hard-coded “AI services” phrasing remains in the hero.

## 2) Footer

- Footer tagline (short line under logo or intro block):
  Modern systems, integrations, and custom builds—AI used where it adds clear value.

- Footer “Services” list (3 items):
  - Technical Advisory
  - Workflow Automation & Integrations
  - Custom Websites & Software

### Implementation notes
- Update `components/Footer.tsx` (or equivalent) service links to these three items.
- Ensure links point to valid routes (see Services page updates below).

## 3) Services Page

- Page intro (top paragraph):
  We help growing businesses improve existing products and operations through advisory, integrations, and custom builds. We’re consultants—not a product—using AI selectively when it clearly improves speed or accuracy.

- Three service cards (titles + one-liners):

  1) Technical Advisory  
     Architecture decisions, vendor/tool selection, and roadmaps tailored to your goals—clear direction without a full-time leadership hire.

  2) Workflow Automation & Integrations  
     Connect the tools you already use and remove repetitive steps with targeted automation; add AI for classification, routing, or summarization when it measurably helps.

  3) Custom Websites & Software  
     Design and build modern sites and purpose-built software that improve reliability, performance, and customer experience.

- Optional “Examples” bullets under Automation & Integrations:
  - Email-to-ticket triage and assignment
  - Quote/invoice sync between CRM and accounting
  - Document-to-database extraction
  - Lead enrichment and routing
  - Weekly KPI report generation

### Implementation notes
- Ensure these routes exist (or create them):
  - `/services/advisory`
  - `/services/automation-integrations`
  - `/services/custom-web-and-software`
- Update nav/footer to match final slugs.

## 4) SEO (optional quick improvements)

- Home meta description:
  Advisory, integrations, and custom web/software builds for growing businesses—modern systems and targeted automation, with AI used where it adds clear value to speed and accuracy.

- OG title:
  Thoughtful engineering for growing businesses.

## 5) QA checklist

- [ ] Homepage shows the new hero subline exactly as specified.
- [ ] Footer shows the new tagline and exactly three services.
- [ ] Each footer service link resolves to a live page.
- [ ] No “AI services” or “Dev Teams” phrasing remains.
- [ ] Lighthouse check: no obvious SEO/accessibility regressions.
