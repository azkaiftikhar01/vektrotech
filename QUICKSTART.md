# 🚀 Vektro Website - Quick Start Guide

## Installation & Development (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

## Production Build & Deploy (5 minutes)

```bash
# Build for production
npm run build

# Start production server locally
npm start

# Or deploy directly to Vercel
# git push (Vercel auto-deploys on push if connected)
```

## 🎨 Customize Your Site (15 minutes)

### Step 1: Find All Placeholders
Use Find & Replace (Ctrl+H / Cmd+H) to search for `{` to find all placeholders

### Step 2: Replace Key Items
Essential replacements:
- `{LOGO}` - Your company logo (2 locations)
- `hello@vektro.com` - Your email (2 locations)
- `{PHONE_NUMBER}` - Your phone (2 locations)

### Step 3: Add Images
- `{HERO_IMAGE_OR_GRAPHIC}` - Main hero image
- `{PROJECT_1_IMAGE}` through `{PROJECT_6_IMAGE}` - Portfolio images
- `{TEAM_MEMBER_1_PHOTO}` through `{TEAM_MEMBER_4_PHOTO}` - Team photos

See `CUSTOMIZATION.md` for complete placeholder list

## 📁 Project Structure

```
vektrotech/
├── app/
│   ├── page.tsx                    # Home page
│   ├── about/page.tsx              # About page
│   ├── services/page.tsx           # Services page
│   ├── portfolio/page.tsx          # Portfolio page
│   ├── contact/page.tsx            # Contact page
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   ├── Navbar.tsx                  # Navigation bar
│   └── Footer.tsx                  # Footer
├── lib/
│   └── animations.ts               # Framer Motion configs
├── public/
│   ├── sitemap.xml                 # SEO sitemap
│   └── robots.txt                  # Search engines
├── package.json
├── tailwind.config.ts              # Color & style config
├── next.config.js
└── README.md / CUSTOMIZATION.md    # Documentation
```

## 🎯 5 Key Features Already Implemented

1. **Responsive Design** - Works perfectly on mobile, tablet, desktop
2. **Smooth Animations** - Scroll animations, hover effects, transitions
3. **Contact Form** - Built-in validation, no backend needed
4. **Portfolio Filters** - Click to filter by category (Web/Mobile/AI/QA)
5. **Mobile Menu** - Hamburger menu for mobile devices

## 🌐 Colors & Fonts (Easy to Change)

Edit `tailwind.config.ts`:
```typescript
colors: {
  'navy': '#1B2A6B',     // Primary
  'blue': '#0084FF',     // Accent
  'purple': '#6D3ACF',   // Gradient start
}
```

Edit `app/globals.css`:
- DM Serif Display - Headlines
- DM Sans - Body text

## ✅ Pages Checklist

- [x] **Home** - Hero, Services strip, About teaser, Services teaser, Portfolio teaser, CTA
- [x] **About** - Hero, Values, Team section, CTA
- [x] **Services** - 6 full-width service blocks with features
- [x] **Portfolio** - Filterable grid with 6 projects (Web/Mobile/AI/QA)
- [x] **Contact** - Form with validation, contact info, success state

## 🚀 Deploy in 3 Steps

### Option A: Vercel (Recommended - Instant)
1. Push code to GitHub
2. Go to vercel.com → New Project → Import repo
3. Click Deploy (done!)

### Option B: CLI Deployment
```bash
npm i -g vercel
vercel
```

### Option C: Docker
```bash
docker build -t vektro .
docker run -p 3000:3000 vektro
```

## 📊 Performance Optimized

- ✅ Next.js Image optimization
- ✅ Lazy loading on scroll
- ✅ CSS animations (no heavy JS)
- ✅ SEO metadata on all pages
- ✅ Sitemap & robots.txt included

## 🔍 Find & Replace All Placeholders

All customizable content marked with `{BRACKETS_LIKE_THIS}`

**Search for `{` in your editor** to find all placeholders

See `CUSTOMIZATION.md` for complete details

## 📞 Need Email Sending for Forms?

Contact form currently shows success state without sending.
To add real email:

1. Choose service: Sendgrid, Mailgun, AWS SES
2. Create `/api/contact` route
3. Update `app/contact/page.tsx` handleSubmit function

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/learn
- **Tailwind**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

## ✨ What's Ready to Go

✅ Fully responsive layout
✅ Mobile hamburger menu
✅ Smooth scroll animations
✅ Hover effects on cards
✅ Portfolio filter system
✅ Contact form validation
✅ Page metadata & SEO
✅ Sitemap & robots.txt
✅ Vercel-ready config
✅ Clean, documented code

## 🚀 You're All Set!

1. Install: `npm install`
2. Develop: `npm run dev`
3. Customize: Replace all `{PLACEHOLDERS}`
4. Deploy: Push to GitHub + Vercel
5. Launch: Your site is live!

---

**Questions?** Check `README.md` or `CUSTOMIZATION.md`

Happy building! 🎉
