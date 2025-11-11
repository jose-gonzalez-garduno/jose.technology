# jose.technology

Professional technology consulting and AI services website for small businesses. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern, Responsive Design** — Clean, accessible UI that works beautifully on all devices
- **Service Showcase** — Five core service offerings with clear value propositions
- **Portfolio/Resume** — Professional experience, skills, and downloadable resume
- **Technical Blog** — Thought leadership content with MDX support
- **Contact & Scheduling** — Contact form and Calendly integration for bookings
- **SEO Optimized** — Meta tags, semantic HTML, and performance-focused
- **Privacy-First Analytics** — Plausible Analytics integration (placeholder)

## 📋 Pages

- `/` — Home page with hero and service overview
- `/services` — Detailed service offerings
- `/portfolio` — Resume, skills, and professional experience
- `/blog` — Blog post index
- `/blog/:slug` — Individual blog posts
- `/about` — Personal bio and company information
- `/contact` — Contact form and scheduling
- `/privacy` — Privacy policy
- `/terms` — Terms of service

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Icons**: Phosphor Icons
- **Animations**: Framer Motion
- **Build Tool**: Next.js (Turbopack)
- **Deployment**: Vercel (recommended)

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## 🌐 Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
gh repo create jose.technology --public --source=. --remote=origin --push
```

### Step 2: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure build settings (auto-detected):
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click "Deploy"

### Step 3: Configure Domain (jose.technology)

1. In Vercel project settings, go to "Domains"
2. Add `jose.technology` as custom domain
3. Vercel will provide DNS records to add to GoDaddy:
   - **Type**: A Record
   - **Name**: @
   - **Value**: 76.76.19.19
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com
4. Log into GoDaddy DNS settings and add these records
5. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## 📝 Customization Tasks

### Replace Placeholder Content

1. **Resume PDF**: Add your resume to `/public/resume.pdf`
2. **Headshot Image**: Add to `/src/assets/images/headshot.jpg` and update About page
3. **GitHub/LinkedIn URLs**: Update in `Footer.tsx`, `Portfolio.tsx`, and `About.tsx`
4. **Email Address**: Replace `hello@jose.technology` throughout the codebase
5. **Bio & Experience**: Update in `About.tsx` and `Portfolio.tsx`
6. **Service Descriptions**: Customize in `Services.tsx` to match your offerings

### Configure Calendly

In `/src/pages/Contact.tsx`, replace the Calendly placeholder:

```tsx
<iframe
  src="https://calendly.com/YOUR-USERNAME/30min"
  width="100%"
  height="600"
  frameBorder="0"
></iframe>
```

### Add Plausible Analytics

Add to `/index.html` in the `<head>` section:

```html
<script defer data-domain="jose.technology" src="https://plausible.io/js/script.js"></script>
```

### Contact Form Backend

The contact form currently logs to console. To connect a real email service:

1. Create an API route in `pages/api/contact.ts` (already created)
2. Configure SendGrid or Mailgun with API keys
3. Add environment variables in Vercel or `.env.local`
4. Update the form submission handler in `Contact.tsx` to call the API

Example implementation in `pages/api/contact.ts`:

```typescript
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    // Send email using your preferred service
    // e.g., SendGrid, Mailgun, etc.
    res.status(200).json({ message: "Form submission successful!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
```

## 🎨 Design System

### Colors
- **Primary**: Deep Tech Blue `oklch(0.45 0.15 250)` — Professional, trustworthy
- **Accent**: Energetic Coral `oklch(0.68 0.18 25)` — Warm, approachable
- **Secondary**: Warm Slate `oklch(0.35 0.02 250)` — Supporting actions

### Typography
- **Primary Font**: Inter (headings and body text)
- **Code Font**: JetBrains Mono (code snippets)

### Spacing
- Section padding: `py-20` (desktop), `py-12` (mobile)
- Content max-width: `max-w-6xl` (wide) or `max-w-4xl` (narrow)

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome! Open an issue or submit a pull request.

## 📧 Contact

- **Email**: hello@jose.technology
- **GitHub**: [@josegonzalez](https://github.com/josegonzalez)
- **LinkedIn**: [josegonzalez](https://linkedin.com/in/josegonzalez)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
