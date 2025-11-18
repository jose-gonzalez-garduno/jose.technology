# Deployment Guide for jose.technology

## Pre-Deployment Checklist

Before deploying to production, complete these tasks:

### 1. Content Updates

- [ ] Add your actual resume PDF to `/public/resume.pdf`
- [ ] Update GitHub URL in Footer, About, and Portfolio pages
- [ ] Update LinkedIn URL in Footer, About, and Portfolio pages  
- [ ] Update Calendly URL in Contact page
- [ ] Review and customize service descriptions if needed
- [ ] Update professional experience in Portfolio page
- [ ] Review and customize About page content

### 2. Environment Variables

- [ ] Sign up for [Resend](https://resend.com) and get your API key
- [ ] Add `RESEND_API_KEY` to your environment variables
- [ ] Test contact form locally with your API key

### 3. SEO & Assets

- [ ] Verify all meta descriptions are appropriate
- [ ] Ensure `robots.txt` and `sitemap.xml` are in `/public` directory
- [ ] All images optimized and loading correctly
- [ ] Test on multiple devices and browsers

## Deployment Steps

### Deploy to Vercel (Recommended)

Vercel is optimized for Next.js applications and offers:
- Automatic deployments from Git
- Built-in SSL certificates
- Edge network CDN
- Serverless API routes support

#### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: jose.technology production-ready"
git branch -M main
git remote add origin git@github.com:YOUR-USERNAME/jose.technology.git
git push -u origin main
```

#### Step 2: Connect Vercel

1. Visit [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `jose.technology` repository
4. Vercel will auto-detect Next.js configuration
5. Add environment variable: `RESEND_API_KEY`
6. Click "Deploy"

#### Step 3: Configure Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `jose.technology` as a custom domain
4. Vercel will provide DNS configuration instructions

#### Step 4: Update DNS Settings

Add these DNS records with your domain provider:

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

Wait 5-60 minutes for DNS propagation. Vercel will automatically issue SSL certificate.

### Alternative: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Tasks

### 1. Test Everything

- [ ] Test all page routes work correctly
- [ ] Test contact form submission and email delivery
- [ ] Verify Calendly embed loads properly
- [ ] Test mobile responsive layout on real devices
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify resume download works
- [ ] Test all external links (GitHub, LinkedIn, email)

### 2. Performance & SEO

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Verify Open Graph meta tags with [OpenGraph.xyz](https://www.opengraph.xyz/)

### 3. Monitoring

- [ ] Enable Vercel Analytics
- [ ] Monitor contact form submissions in Resend dashboard
- [ ] Set up error tracking if needed (Sentry, etc.)

## Environment Variables

Required environment variables for production:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Set these in Vercel project settings under "Environment Variables".

## Continuous Deployment

Once connected to Vercel:
- Every push to `main` branch triggers automatic production deployment
- Preview deployments created automatically for pull requests
- Rollback to previous deployment from Vercel dashboard if needed

## Troubleshooting

### Build Fails on Vercel

- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Ensure Node.js version compatibility

### Custom Domain Not Working

- Verify DNS records are correct (use `dig jose.technology` or `nslookup`)
- Wait for DNS propagation (can take up to 48 hours)
- Check domain status in Vercel project settings

### Contact Form Not Working

- Verify `RESEND_API_KEY` is set in environment variables
- Check Resend dashboard for API usage and errors
- Test API route directly: `https://jose.technology/api/contact`

### Images Not Loading

- Ensure images are in `/public` directory
- Check image paths are correct (case-sensitive)
- Verify images are optimized and not too large

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)

---

Good luck with your deployment! 🚀
