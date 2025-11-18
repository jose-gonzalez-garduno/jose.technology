# Environment Variables Setup Guide

This guide explains how to set up environment variables for local development, GitHub, and Vercel deployment.

## 📋 Overview

Environment variables store sensitive information like API keys that should **never** be committed to version control. This project uses different environment files for different purposes.

## 🗂️ Environment Files

| File | Purpose | Committed to Git? | Where it's used |
|------|---------|-------------------|-----------------|
| `.env.example` | Template with variable names only | ✅ Yes | Documentation |
| `.env.local` | Your actual API keys for local dev | ❌ No | Local machine only |
| GitHub Secrets | Encrypted secrets for CI/CD | N/A | GitHub Actions |
| Vercel Environment Variables | Production/preview API keys | N/A | Vercel deployments |

## 🔒 Security Rules

### ✅ DO:
- Keep `.env.local` on your machine only
- Commit `.env.example` with empty values
- Use different API keys for development and production
- Add `.env.local` to `.gitignore`

### ❌ DON'T:
- Never commit `.env.local` to Git
- Never share API keys in Slack, Discord, or email
- Never hardcode API keys in your source code
- Never push API keys to GitHub (even private repos)

## 🚀 Setup Instructions

### Step 1: Local Development Setup

1. **Get your Resend API Key:**
   - Go to [resend.com](https://resend.com) and sign up/login
   - Navigate to **API Keys** section
   - Click **Create API Key**
   - Give it a name like "jose.technology-dev"
   - Copy the key (you'll only see it once!)

2. **Add the key to `.env.local`:**
   ```bash
   # Open the file
   open .env.local
   
   # Or use your editor
   code .env.local
   ```

3. **Paste your actual API key:**
   ```env
   RESEND_API_KEY=re_YourActualAPIKey123456789
   ```

4. **Save the file and restart your dev server:**
   ```bash
   npm run dev
   ```

### Step 2: Verify `.gitignore` Protection

Your `.gitignore` already includes:
```gitignore
.env.local
.env*.local
```

**Verify it's working:**
```bash
# This should show .env.local as "ignored"
git status --ignored

# This should NOT show .env.local
git status
```

### Step 3: GitHub Setup (Optional - for CI/CD)

If you're using GitHub Actions and need environment variables:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
5. Click **Add secret**

### Step 4: Vercel Deployment Setup

1. **Go to your Vercel dashboard:**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your project

2. **Add environment variables:**
   - Go to **Settings** → **Environment Variables**
   - Click **Add New**
   - Add the following:

   | Key | Value | Environment |
   |-----|-------|-------------|
   | `RESEND_API_KEY` | Your production API key | Production, Preview, Development |

3. **Best Practice - Use different keys:**
   - Create a separate Resend API key for production
   - Name it "jose.technology-production"
   - This way if your dev key is compromised, production is safe

4. **After adding variables:**
   - Vercel will automatically redeploy
   - Or manually redeploy from the **Deployments** tab

## 🧪 Testing Your Setup

### Test Local Environment:
```bash
# Start your dev server
npm run dev

# Try submitting the contact form at:
# http://localhost:3000/contact

# Check the terminal for any errors
```

### Test if variable is loaded:
Create a simple test API route (temporary):
```typescript
// pages/api/test-env.ts
export default function handler(req, res) {
  const hasKey = !!process.env.RESEND_API_KEY;
  const keyPrefix = process.env.RESEND_API_KEY?.substring(0, 6);
  
  res.json({ 
    hasKey, 
    keyPrefix: hasKey ? keyPrefix + '...' : null 
  });
}
```

Visit `http://localhost:3000/api/test-env` to verify.

## 🔄 Updating API Keys

### For Local Development:
1. Edit `.env.local`
2. Restart your dev server

### For Vercel:
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Edit the variable
3. Redeploy your application

### For GitHub:
1. Go to Repository Settings → Secrets
2. Update the secret value

## 🆘 Troubleshooting

### "RESEND_API_KEY is undefined"
- ✅ Check `.env.local` exists in project root
- ✅ Verify the variable name matches exactly: `RESEND_API_KEY`
- ✅ Restart your dev server after adding the variable
- ✅ Make sure there are no spaces around the `=` sign

### "API key is invalid"
- ✅ Check for extra spaces or line breaks in the key
- ✅ Verify the key starts with `re_`
- ✅ Generate a new key from Resend dashboard

### "Email not sending in production"
- ✅ Verify Vercel environment variables are set
- ✅ Check Vercel deployment logs for errors
- ✅ Ensure you're using a verified domain or `onboarding@resend.dev`

## 📝 What Gets Committed to GitHub?

```bash
# ✅ These files ARE committed:
.env.example          # Template only, no real keys
.gitignore           # Protects .env.local
ENVIRONMENT_SETUP.md # This guide

# ❌ These files are NOT committed:
.env.local           # Your actual keys (protected by .gitignore)
.env.production      # If you create one
.env*.local          # Any local env files
```

## 🔐 If You Accidentally Commit a Secret

**If you accidentally commit `.env.local` or expose an API key:**

1. **Immediately revoke the key:**
   - Go to Resend dashboard
   - Delete the compromised API key
   - Generate a new one

2. **Remove from Git history:**
   ```bash
   # Remove the file from Git tracking
   git rm --cached .env.local
   
   # Commit the removal
   git commit -m "Remove .env.local from tracking"
   
   # Push changes
   git push
   ```

3. **For complete removal from history (advanced):**
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env.local" \
     --prune-empty --tag-name-filter cat -- --all
   
   git push origin --force --all
   ```

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [GitHub Encrypted Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

## ✅ Checklist

Before deploying to production, verify:

- [ ] `.env.local` exists locally with your API key
- [ ] `.env.local` is listed in `.gitignore`
- [ ] `.env.example` is committed to Git (without real keys)
- [ ] Vercel environment variables are configured
- [ ] Domain is verified in Resend (for production emails)
- [ ] Contact form works locally
- [ ] Contact form works in production

---

**Need help?** Check the troubleshooting section or review your Vercel deployment logs.
