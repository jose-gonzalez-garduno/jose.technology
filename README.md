# jose.technology

Professional technology consulting and AI services website for small businesses. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern, Responsive Design** — Clean, accessible UI that works beautifully on all devices
- **Service Showcase** — Five core service offerings with clear value propositions
- **Portfolio/Resume** — Professional experience, skills, and downloadable resume
- **Technical Blog** — Thought leadership content with static blog posts
- **Contact & Scheduling** — Fully functional contact form with Resend email service and Calendly integration
- **SEO Optimized** — Meta tags, semantic HTML, and performance-focused
- **Production-Ready** — Error boundaries, form validation, rate limiting, and security best practices

## 📋 Pages

- `/` — Home page with hero and service overview
- `/services` — Detailed service offerings
- `/portfolio` — Resume, skills, and professional experience
- `/blog` — Blog post index
- `/blog/:slug` — Individual blog posts
- `/about` — Personal bio and company information
- `/contact` — Contact form with email notifications and Calendly scheduling
- `/privacy` — Privacy policy
- `/terms` — Terms of service

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Icons**: Phosphor Icons
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Notifications**: Sonner (toast notifications)
- **Error Handling**: React Error Boundary
- **Deployment**: Vercel (recommended)

## 💻 Local Development

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your Resend API key to .env.local
RESEND_API_KEY=your_api_key_here

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get your Resend API key at: https://resend.com

## 📧 Email Configuration

The contact form uses Resend for email delivery. Configure in your Vercel project:

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add `RESEND_API_KEY` with your API key
4. Redeploy the application

## 🚀 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure environment variables (RESEND_API_KEY)
6. Deploy

### Configure Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Update DNS records with your domain provider
4. Wait for DNS propagation

## 📝 Customization Checklist

Before going live, update these items:

### Required Changes
- [ ] Add your actual resume PDF to `/public/resume.pdf`
- [ ] Update GitHub URL in Footer, About, and Portfolio pages
- [ ] Update LinkedIn URL in Footer, About, and Portfolio pages
- [ ] Update Calendly URL in contact page
- [ ] Review and update service descriptions if needed
- [ ] Update professional experience in Portfolio page
- [ ] Review and customize About page content

### Optional Enhancements
- [ ] Add more blog posts
- [ ] Add project case studies to Portfolio
- [ ] Set up custom analytics (Plausible, Google Analytics, etc.)
- [ ] Add more detailed service pages
- [ ] Create a sitemap.xml (already in /public)

## 🎨 Design System

### Brand Colors
- **Primary Cyan**: `#00A8E8` — Logo color, represents innovation and technology
- **Primary Dark**: `#2D2D2D` — Professional, stable
- **Neutrals**: Slate color palette for sophisticated feel

### Typography
- **Font**: Inter (sans-serif)
- Professional, modern type scale

### Spacing
- Consistent 8px grid system
- Generous whitespace for clarity

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 📧 Contact

- **Website**: https://jose.technology
- **Email**: contact@jose.technology

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
