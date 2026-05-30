# Vektro Website - Setup & Customization Guide

## 🎯 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Visit http://localhost:3000

4. **Find & Replace Placeholders**
   - All customizable placeholders are marked with `{CAPS_IN_BRACKETS}`
   - Use your code editor's Find & Replace feature (Ctrl+H / Cmd+H)
   - See complete list below

## 🔍 All Placeholders to Replace

### Logo & Branding
- `{LOGO}` - Your company logo (appears in navbar and footer)

### Images & Graphics
- `{HERO_IMAGE_OR_GRAPHIC}` - Large graphic/image on hero section (right side)
- `{ABOUT_IMAGE}` - Image on about page (right side)
- `{TEAM_MEMBER_1_PHOTO}` - Team member 1 photo
- `{TEAM_MEMBER_2_PHOTO}` - Team member 2 photo
- `{TEAM_MEMBER_3_PHOTO}` - Team member 3 photo
- `{TEAM_MEMBER_4_PHOTO}` - Team member 4 photo
- `{WEBSITE_SERVICE_IMAGE}` - Website design service image
- `{MOBILE_SERVICE_IMAGE}` - Mobile app service image
- `{CHATBOT_SERVICE_IMAGE}` - AI chatbot service image
- `{PERSONALIZED_AI_IMAGE}` - Personalized AI service image
- `{QA_SERVICE_IMAGE}` - QA automation service image
- `{CUSTOM_SOFTWARE_IMAGE}` - Custom software service image
- `{PROJECT_1_IMAGE}` through `{PROJECT_6_IMAGE}` - Portfolio project images

### Icons
- `{ICON_1}`, `{ICON_2}`, `{ICON_3}` - Service teaser section icons
- `{TWITTER_ICON}`, `{LINKEDIN_ICON}`, `{GITHUB_ICON}` - Social media icons in contact

### Team Information
- `{TEAM_MEMBER_1_NAME}` - Team member 1 name
- `{TEAM_MEMBER_1_ROLE}` - Team member 1 role/title
- `{TEAM_MEMBER_1_BIO}` - Team member 1 bio
- `{TEAM_MEMBER_2_NAME}`, `{TEAM_MEMBER_2_ROLE}`, `{TEAM_MEMBER_2_BIO}`
- `{TEAM_MEMBER_3_NAME}`, `{TEAM_MEMBER_3_ROLE}`, `{TEAM_MEMBER_3_BIO}`
- `{TEAM_MEMBER_4_NAME}`, `{TEAM_MEMBER_4_ROLE}`, `{TEAM_MEMBER_4_BIO}`

### Portfolio Projects
- `{PROJECT_1_NAME}` through `{PROJECT_6_NAME}` - Project names
- `{PROJECT_CATEGORY_1}` through `{PROJECT_CATEGORY_6}` - Project categories

### Contact Information
- `{PHONE_NUMBER}` - Your phone number
- `hello@vektro.com` - Update in components/Footer.tsx and app/contact/page.tsx

### Services Descriptions
- `{SERVICE_DESCRIPTION_1}` through `{SERVICE_DESCRIPTION_4}` - Short descriptions in services strip

### Social Links (in Footer)
- `{TWITTER}` - Twitter link
- `{LINKEDIN}` - LinkedIn link
- `{GITHUB}` - GitHub link

## 📝 Step-by-Step Customization

### 1. Update Basic Contact Info
1. Find `hello@vektro.com` in:
   - `components/Footer.tsx` (line 28)
   - `app/contact/page.tsx` (line 109)
   - Replace with your actual email

2. Find `{PHONE_NUMBER}` and replace with your actual phone number:
   - `components/Footer.tsx` (line 35)
   - `app/contact/page.tsx` (line 115)

### 2. Add Your Logo
1. Create a logo component in `components/Logo.tsx` or use a Next.js Image
2. Replace `{LOGO}` placeholders in:
   - `components/Navbar.tsx` (line 30)
   - `components/Footer.tsx` (line 12)

### 3. Add Team Members
1. Create team photos/images
2. Find and replace in `app/about/page.tsx`:
   - `{TEAM_MEMBER_1_PHOTO}`, `{TEAM_MEMBER_1_NAME}`, `{TEAM_MEMBER_1_ROLE}`, `{TEAM_MEMBER_1_BIO}`
   - Repeat for members 2-4

### 4. Add Portfolio Projects
1. Create or obtain 6 project images
2. Find and replace in `app/portfolio/page.tsx`:
   - `{PROJECT_1_IMAGE}` through `{PROJECT_6_IMAGE}`
   - `{PROJECT_1_NAME}` through `{PROJECT_6_NAME}`
   - Categories are already set (web, mobile, ai, qa)

### 5. Update Services Images
1. Get images for each service
2. Replace in `app/services/page.tsx`:
   - `{WEBSITE_SERVICE_IMAGE}`
   - `{MOBILE_SERVICE_IMAGE}`
   - `{CHATBOT_SERVICE_IMAGE}`
   - `{PERSONALIZED_AI_IMAGE}`
   - `{QA_SERVICE_IMAGE}`
   - `{CUSTOM_SOFTWARE_IMAGE}`

### 6. Update Colors (Optional)
If you want to change the color scheme:
1. Edit `tailwind.config.ts`
2. Update the colors section:
   ```typescript
   colors: {
     'navy': '#1B2A6B',        // Primary color
     'blue': '#0084FF',        // Accent color
     'purple': '#6D3ACF',      // Gradient start
     'light-bg': '#F4F6FB',    // Light background
     'body-text': '#6B7280',   // Text color
   }
   ```

## 🖼️ Image Recommendations

| Placeholder | Size | Format | Purpose |
|---|---|---|---|
| `{LOGO}` | 40x40px | PNG/SVG | Navigation logo |
| `{HERO_IMAGE_OR_GRAPHIC}` | 800x600px | PNG/JPG | Hero section graphic |
| `{ABOUT_IMAGE}` | 600x400px | JPG | About section image |
| Service Images | 600x400px | JPG | Service showcases |
| Portfolio Images | 800x600px | JPG | Project showcases |
| Team Photos | 400x400px | JPG | Team member photos |

## 🌐 Social Links
Update social media links in `components/Footer.tsx`:
- Line 47: Twitter URL
- Line 52: LinkedIn URL
- Line 57: GitHub URL

## 📧 Email Configuration
To make the contact form actually send emails (optional):
1. Choose an email service:
   - Sendgrid
   - Mailgun
   - AWS SES
   - Your own SMTP server

2. Create an API endpoint at `/api/contact`
3. Update `app/contact/page.tsx` to call this endpoint

## 🚀 Deployment Checklist

- [ ] Replace all `{PLACEHOLDERS}` with actual content
- [ ] Update contact email and phone
- [ ] Add all images
- [ ] Update social media links
- [ ] Review all pages for accuracy
- [ ] Test responsive design on mobile
- [ ] Test contact form (submission state)
- [ ] Update SEO titles/descriptions if needed
- [ ] Deploy to Vercel or your hosting provider
- [ ] Set up Google Analytics (optional)
- [ ] Test on production domain

## 🔧 Advanced Customization

### Modify Color Scheme
Edit `tailwind.config.ts` colors section

### Add More Team Members
1. Duplicate team member card in `app/about/page.tsx`
2. Update placeholders for new member
3. Adjust grid: change `lg:grid-cols-4` to accommodate

### Add More Portfolio Projects
1. Add project data to `projects` array in `app/portfolio/page.tsx`
2. Update filter categories if adding new ones
3. Create corresponding images

### Enable Contact Form Email Sending
```typescript
// In app/contact/page.tsx handleSubmit:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 📱 Testing Checklist

- [ ] Desktop (1440px, 1280px, 1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Mobile menu toggle
- [ ] Form validation
- [ ] Hover effects
- [ ] Page transitions
- [ ] Scroll animations
- [ ] Link functionality
- [ ] Responsiveness

## 🚢 Vercel Deployment

1. Push to GitHub
2. Visit vercel.com and connect your repo
3. Vercel auto-detects Next.js settings
4. Click Deploy
5. Custom domain: Add in Project Settings → Domains

## 📞 Need Help?

1. Check the README.md for architecture overview
2. Review Next.js documentation: https://nextjs.org
3. Framer Motion docs: https://www.framer.com/motion
4. Tailwind CSS docs: https://tailwindcss.com

---

**Made with ❤️ for Vektro**
