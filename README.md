# Rachit Singhal - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS.

## 🚀 Quick Deploy to Vercel & GitHub

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `rachit-singhal-portfolio` or similar
   - Don't initialize with README (we already have files)

2. **Initialize and push from your terminal**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Connect GitHub to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Vercel Settings**:
   - Root Directory: `./client`
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - Add `VITE_PLAUSIBLE_DOMAIN=yourdomain.com` when you have your domain

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Click "Domains" 
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Analytics Domain**:
   - Update the Plausible script in `client/index.html`
   - Change `data-domain` to your new domain

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
├── client/           # Frontend React app
│   ├── src/         # Source code
│   ├── public/      # Static assets
│   └── dist/        # Build output
├── server/          # Backend (not used in static deployment)
├── vercel.json      # Vercel configuration
└── package.json     # Dependencies and scripts
```

## 🔧 Features

- ✅ Responsive design with dark/light mode
- ✅ SEO optimized with meta tags
- ✅ Sitemap and robots.txt
- ✅ Plausible Analytics ready
- ✅ CV download functionality
- ✅ Contact form with smooth animations
- ✅ Modern tech stack showcase

## 📊 Analytics

The site is configured with Plausible Analytics for privacy-focused tracking. Update the domain in `client/index.html` when deploying.

## 🚀 Deployment Status

- GitHub: Ready for push
- Vercel: Ready for deployment
- Domain: Configure after deployment

---

Built with ❤️ by Rachit Singhal