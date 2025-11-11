# Deployment Guide for jose.technology

## Pre-Deployment Checklist

Before deploying to production, complete these tasks:

### 1. Content Updates

- [ ] Replace placeholder bio in `/src/pages/About.tsx`
- [ ] Update professional experience in `/src/pages/Portfolio.tsx`
- [ ] Customize service descriptions in `/src/pages/Services.tsx`
- [ ] Add your actual resume PDF to `/public/resume.pdf`
- [ ] Update GitHub username in all components (search for `josegonzalez`)
- [ ] Update LinkedIn username in all components (search for `/in/josegonzalez`)
- [ ] Replace email address throughout (search for `hello@jose.technology`)

### 2. Third-Party Integrations

- [ ] Sign up for Calendly and get your scheduling URL
- [ ] Update Calendly embed in `/src/pages/Contact.tsx`
- [ ] Sign up for Plausible Analytics (or another privacy-focused service)
- [ ] Add Plausible script to `/index.html`
- [ ] Set up email service (SendGrid, Mailgun, etc.) for contact form
- [ ] Create Vercel Serverless Function for contact form handling

### 3. SEO & Metadata

- [ ] Review and customize meta descriptions in each page
- [ ] Add Open Graph images (1200x630px) for social sharing
- [ ] Create `robots.txt` file
- [ ] Create `sitemap.xml` file
- [ ] Add structured data (JSON-LD) for Person/Organization schema

### 4. Assets

- [ ] Add professional headshot image to `/src/assets/images/`
- [ ] Update headshot reference in `/src/pages/About.tsx`
- [ ] Add logo image (if desired) to replace text logo in header
- [ ] Optimize all images for web (WebP format recommended)
- [ ] Add favicon set (favicon.ico, apple-touch-icon.png, etc.)

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

Vercel is optimized for Vite/React applications and offers:
- Automatic deployments from Git
- Built-in SSL certificates
- Edge network CDN
- Serverless functions support

#### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: jose.technology website"
git branch -M main
git remote add origin git@github.com:YOUR-USERNAME/jose.technology.git
git push -u origin main
```

#### Step 2: Connect Vercel

1. Visit [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `jose.technology` repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

#### Step 3: Configure Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `jose.technology` as a custom domain
4. Vercel will provide DNS configuration

#### Step 4: Update GoDaddy DNS

Log into GoDaddy DNS management and add these records:

**For apex domain (jose.technology):**
- Type: `A`
- Name: `@`
- Value: `76.76.19.19`
- TTL: `600`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `600`

Wait 5-60 minutes for DNS propagation. Vercel will automatically issue SSL certificate once DNS is active.

### Option 2: Deploy to Netlify

```bash
npm install netlify-cli -g
netlify login
netlify init
netlify deploy --prod
```

### Option 3: Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   {
     "homepage": "https://jose.technology",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run `npm run deploy`
4. Configure custom domain in GitHub repository settings

## Post-Deployment Tasks

### 1. Test Everything

- [ ] Test all page routes work correctly
- [ ] Test contact form submission
- [ ] Verify Calendly embed loads
- [ ] Test mobile responsive layout on real devices
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify resume download works
- [ ] Test all external links (GitHub, LinkedIn, email)

### 2. Performance & SEO

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test site speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify SEO with [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)

### 3. Analytics & Monitoring

- [ ] Verify Plausible Analytics is tracking visitors
- [ ] Set up Vercel Analytics (if using Vercel)
- [ ] Monitor contact form submissions
- [ ] Set up error tracking (Sentry, LogRocket, etc.)

### 4. Content & Marketing

- [ ] Write first blog post
- [ ] Share website on LinkedIn
- [ ] Share website on GitHub profile
- [ ] Add website URL to email signature
- [ ] Add website to portfolio sites (if applicable)

## Environment Variables (Optional)

If using serverless functions for contact form:

```bash
# .env.local (local development only, never commit)
SENDGRID_API_KEY=your_key_here
CONTACT_EMAIL=hello@jose.technology
```

In Vercel dashboard, add these as Environment Variables under project settings.

## Troubleshooting

### Build Fails on Vercel

- Check Node.js version matches local development
- Ensure all dependencies are in `package.json`
- Review build logs for specific errors

### Custom Domain Not Working

- Verify DNS records are correct (use `dig jose.technology`)
- Wait for DNS propagation (can take up to 48 hours)
- Check Vercel domain status in project settings

### Contact Form Not Working

- Check browser console for errors
- Verify form validation is working
- Ensure serverless function is deployed (if configured)

### Images Not Loading

- Verify images are in correct directory (`/src/assets/`)
- Check image imports are correct
- Ensure file extensions match (case-sensitive on some systems)

## Continuous Deployment

Once connected to Vercel/Netlify:
- Every push to `main` branch triggers automatic deployment
- Preview deployments created for pull requests
- Rollback to previous deployment from dashboard if needed

## Support

For issues or questions:
- Review Vercel documentation: https://vercel.com/docs
- Check Vite documentation: https://vitejs.dev/
- Open GitHub issue in your repository

---

Good luck with your deployment! 🚀
