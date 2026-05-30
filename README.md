# Vektro - Professional Software Agency Website

A modern, high-performance website for Vektro, a full-service software agency. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Next.js 14 App Router** - Latest React framework with optimized performance
- **Tailwind CSS** - Beautiful, responsive design with custom color system
- **Framer Motion** - Smooth, professional animations throughout
- **Fully Responsive** - Mobile-first design for all devices
- **SEO Optimized** - Metadata exports, sitemap.xml, robots.txt
- **Contact Form** - Built-in form with validation (no backend required)
- **Dark Mode Ready** - Easy to extend with dark theme support
- **Vercel Ready** - Optimized for instant deployment

## 📋 Pages

- `/` - Home page with hero, services, portfolio teaser, and CTA
- `/about` - About page with mission, team, and values
- `/services` - Full services page with 6 service blocks
- `/portfolio` - Filterable portfolio grid with category filters
- `/contact` - Contact form with validation and success state

## 🎨 Brand Colors

- **Primary Navy**: `#1B2A6B`
- **Accent Blue**: `#0084FF`
- **Gradient**: `#6D3ACF` → `#0084FF`
- **Light Background**: `#F4F6FB`
- **Body Text**: `#6B7280`

## 🔤 Typography

- **Headings**: DM Serif Display (Google Fonts)
- **Body**: DM Sans (Google Fonts)

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## 🔄 Customization

All placeholder assets are clearly marked in CAPS with curly braces:

- `{LOGO}` - Replace with your logo component or image
- `{HERO_IMAGE_OR_GRAPHIC}` - Hero section graphic
- `{ABOUT_IMAGE}` - About section image
- `{PROJECT_IMAGE_1}`, `{PROJECT_IMAGE_2}`, etc. - Portfolio images
- `{TEAM_MEMBER_*}` - Team member photos and info
- `{SERVICE_IMAGE}` - Service section images
- `{PHONE_NUMBER}` - Your phone number
- `{TWITTER}`, `{LINKEDIN}`, `{GITHUB}` - Social links

Simply search for `{` in your codebase to find all placeholders and replace them with your actual content.

## 🚀 Deployment to Vercel

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel automatically detects Next.js and configures build settings
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 3: Docker

```bash
docker build -t vektro .
docker run -p 3000:3000 vektro
```

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1280px

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading on scroll
- CSS-only animations where possible
- Fast route transitions with Framer Motion
- SEO metadata on all pages

## 📄 SEO

Each page exports metadata including:
- Title and description
- Open Graph tags for social sharing
- Twitter Card support
- Structured sitemap.xml
- robots.txt for search engines

## 📚 File Structure

```
vektrotech/
├── app/
│   ├── layout.tsx          # Root layout with navbar & footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── lib/
│   └── animations.ts       # Framer Motion animation configs
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Fonts**: Google Fonts (DM Serif Display, DM Sans)
- **Form Validation**: Native HTML5 + Custom validation
- **Deployment**: Vercel (Recommended)

## ✨ Key Features Explained

### Animations
- **Hero Section**: Staggered fade-in animations on load
- **Scroll Animations**: Elements fade and slide in as you scroll
- **Hover Effects**: Cards lift and scale on hover
- **Page Transitions**: Smooth fade between routes
- **Interactive Forms**: Focus states with smooth color transitions

### Responsive Design
- Mobile hamburger menu with smooth animations
- Flexible grid layouts that adapt to all screen sizes
- Optimized touch targets for mobile
- Responsive typography

### Contact Form
- Client-side validation
- Email format checking
- Required field validation
- Loading state with spinner
- Success message after submission
- No backend required (static UI)

## 📞 Support

For customization help or questions:
1. Search for `{PLACEHOLDER}` tags in the code
2. Replace with your actual content
3. Adjust colors in `tailwind.config.ts` if needed
4. Customize animations in `lib/animations.ts`

## 📄 License

This website template is provided as-is for Vektro.

## 🚀 Next Steps

1. Replace all `{PLACEHOLDER}` tags with your actual content
2. Add real project images and team photos
3. Update contact information and social links
4. Configure deployment to Vercel
5. Set up Google Analytics or other tracking (optional)
6. Customize colors and fonts as needed
7. Test on multiple devices and browsers

---

Built with ❤️ for Vektro - Moving Business Forward
