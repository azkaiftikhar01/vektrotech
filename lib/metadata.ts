import type { Metadata } from 'next'

const SITE_URL = 'https://vektro.tech'

export const aboutMetadata: Metadata = {
  title: 'About Vektro - Full-Service Software Agency',
  description:
    'Learn about Vektro, a software agency built by builders and obsessed with delivering results. Founded on principles of innovation, quality, and partnership.',
  openGraph: {
    title: 'About Vektro',
    description: 'Learn about our mission, team, and approach to building exceptional software.',
  },
}

export const servicesMetadata: Metadata = {
  title: 'Services - Vektro Software Agency',
  description:
    'Explore our full range of services: website design, mobile app development, AI assistants, QA automation, and custom software solutions.',
  openGraph: {
    title: 'Our Services - Vektro',
    description: 'Full-service software development from web to AI solutions.',
  },
}

export const portfolioMetadata: Metadata = {
  title: 'Portfolio - Vektro Software Agency',
  description:
    'Explore our portfolio of successful projects across web, mobile, AI, and QA. See the work we\'re proud of.',
  openGraph: {
    title: 'Our Portfolio - Vektro',
    description: 'A selection of successful projects we\'ve delivered.',
  },
}

export const contactMetadata: Metadata = {
  title: 'Contact Vektro - Get Your Project Started',
  description:
    'Get in touch with Vektro. Let\'s discuss your project and how we can help your business succeed.',
  openGraph: {
    title: 'Contact Us - Vektro',
    description: 'Reach out to start your next project.',
  },
}

export const phoolMetadata: Metadata = {
  title: 'Phool - Flower Delivery Platform | Vektro Portfolio',
  description:
    'Custom e-commerce platform for Phool with a flower delivery service, bouquet builder, bulk orders, and event coordination. Built with Next.js, React, MongoDB and Stripe.',
  openGraph: {
    title: 'Phool Case Study - Vektro',
    description: 'E-commerce flower delivery platform with custom bouquet builder and event coordination.',
    url: `${SITE_URL}/portfolio/phool`,
  },
}

export const premierHealthMetadata: Metadata = {
  title: 'Premier Health - Medical Practice Platform | Vektro Portfolio',
  description:
    'Complete healthcare management platform for Premier Health with appointment scheduling, patient portal, insurance integration, and staff dashboard. Built with Next.js and PostgreSQL.',
  openGraph: {
    title: 'Premier Health Case Study - Vektro',
    description: 'Full-featured medical practice management system with patient portal and staff tools.',
    url: `${SITE_URL}/portfolio/premier-health`,
  },
}

export const airovaMetadata: Metadata = {
  title: 'Airova - AI Assistant Platform | Vektro Portfolio',
  description:
    'AI-powered platform for building personalised conversational assistants for restaurants, clinics, and retail. Multi-tenant with analytics. Built with Next.js, TypeScript and OpenAI.',
  openGraph: {
    title: 'Airova Case Study - Vektro',
    description: 'SaaS platform for deploying branded AI assistants across industries.',
    url: `${SITE_URL}/portfolio/airova`,
  },
}

export const nfsytMetadata: Metadata = {
  title: 'NFSYT - Mental Wellness Platform | Vektro Portfolio',
  description:
    'Comprehensive mental health platform with CBT journaling, mood tracking, therapist matching, support groups, and appointment management. Built with Next.js and real-time chat.',
  openGraph: {
    title: 'NFSYT Case Study - Vektro',
    description: 'Mental wellness app with therapy support, journaling, and professional therapist connections.',
    url: `${SITE_URL}/portfolio/nfsyt`,
  },
}
