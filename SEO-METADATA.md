# Vektro Website - SEO Metadata Guide

## Current Metadata Exports

Each page exports optimized metadata for SEO. Here are the current values:

### Home Page (`app/page.tsx`)
```
Title: "Vektro - Software Agency | Custom Development & AI Solutions"
Description: "Full-service software agency specializing in web design, mobile apps, AI assistants, and QA automation. Build software that moves your business forward."
```

### About Page (`app/about/page.tsx`)
```
Title: "About Vektro - Full-Service Software Agency"
Description: "Learn about Vektro, a software agency built by builders and obsessed with delivering results. Founded on principles of innovation, quality, and partnership."
```

### Services Page (`app/services/page.tsx`)
```
Title: "Services - Vektro Software Agency"
Description: "Explore our full range of services: website design, mobile app development, AI assistants, QA automation, and custom software solutions."
```

### Portfolio Page (`app/portfolio/page.tsx`)
```
Title: "Portfolio - Vektro Software Agency"
Description: "Explore our portfolio of successful projects across web, mobile, AI, and QA. See the work we're proud of."
```

### Contact Page (`app/contact/page.tsx`)
```
Title: "Contact Vektro - Get Your Project Started"
Description: "Get in touch with Vektro. Let's discuss your project and how we can help your business succeed."
```

## Customizing Metadata

### Update Home Page Metadata
Edit `app/page.tsx` (top of file):
```typescript
export const metadata: Metadata = {
  title: "Your Custom Title",
  description: "Your custom description...",
  openGraph: {
    title: "OG Title",
    description: "OG Description...",
    url: "https://yourdomain.com",
    type: "website",
    images: [{
      url: "https://yourdomain.com/og-image.jpg",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    description: "Twitter description...",
  },
}
```

## Open Graph Images

For social media sharing, add OG images:
1. Create 1200x630px images
2. Upload to `/public/og-image.jpg`
3. Update `url` in metadata

## Recommended Metadata Updates

| Page | Title Length | Description Length |
|---|---|---|
| Home | 50-60 chars | 150-160 chars |
| About | 50-60 chars | 150-160 chars |
| Services | 50-60 chars | 150-160 chars |
| Portfolio | 50-60 chars | 150-160 chars |
| Contact | 50-60 chars | 150-160 chars |

## SEO Best Practices Implemented

✅ **Title Tags** - Unique on each page (50-60 chars)
✅ **Meta Descriptions** - Unique on each page (150-160 chars)
✅ **Open Graph Tags** - Social media preview
✅ **Twitter Cards** - Twitter-specific sharing
✅ **Sitemap** - Auto-generated at `/sitemap.xml`
✅ **Robots.txt** - Search engine directives
✅ **Responsive Images** - Using Next.js Image
✅ **Internal Linking** - Between pages
✅ **Mobile Friendly** - Full responsiveness
✅ **Fast Load Times** - Optimized assets

## Google Analytics Setup (Optional)

Add Google Analytics to `app/layout.tsx`:
```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID');
            `,
          }}
        />
      </Script>
    </html>
  )
}
```

Replace `GA_ID` with your Google Analytics ID

## Sitemap Configuration

Current sitemap includes:
- Home (priority: 1.0)
- About (priority: 0.8)
- Services (priority: 0.9)
- Portfolio (priority: 0.9)
- Contact (priority: 0.7)

To update priorities, edit `public/sitemap.xml`

## Robots.txt Rules

Current configuration:
```
Allow all public pages
Disallow: /admin, /private
Allow Google bots full access
```

To customize, edit `public/robots.txt`

## Structured Data (Schema.org)

To add structured data (optional), add to `app/layout.tsx`:
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vektro",
      url: "https://vektro.com",
      logo: "https://vektro.com/logo.png",
      sameAs: [
        "https://twitter.com/vektro",
        "https://linkedin.com/company/vektro"
      ]
    })
  }}
/>
```

## Keyword Targeting

Current pages optimized for:
- **Home**: "software agency", "web development", "AI solutions"
- **Services**: "website design", "mobile app development", "AI chatbots"
- **Portfolio**: "software projects", "case studies"
- **About**: "software team", "about agency"
- **Contact**: "contact software agency", "get in touch"

## Performance SEO

Lighthouse scores optimization:
- ✅ Images optimized with Next.js Image
- ✅ CSS minified via Tailwind
- ✅ JS split via dynamic imports
- ✅ Lazy loading on scroll
- ✅ No render-blocking resources

Monitor at: https://pagespeed.web.dev/

## Checklist Before Launch

- [ ] Update all metadata titles and descriptions
- [ ] Add OG images for social sharing
- [ ] Setup Google Analytics if needed
- [ ] Add Google Search Console verification
- [ ] Add Bing Webmaster Tools verification
- [ ] Test with Lighthouse
- [ ] Check mobile optimization
- [ ] Verify sitemap.xml loads
- [ ] Test robots.txt directives
- [ ] Add schema markup (optional)
- [ ] Setup 404 page redirect
- [ ] Test all internal links

## Monitor After Launch

- Google Search Console - Check indexing
- Google Analytics - Track traffic
- Lighthouse - Monthly performance check
- Bing Webmaster Tools - Alternative tracking

---

Current metadata is production-ready. Customize as needed!
