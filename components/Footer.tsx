'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'

const LinkedInIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
    <title>Instagram</title>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 3.252.148 4.771 1.691 4.919 4.919.049 1.265.064 1.645.064 4.849 0 3.205-.015 3.585-.074 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.072-4.85.072-3.204 0-3.584-.014-4.849-.072-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.072-1.644-.072-4.849 0-3.204.013-3.583.072-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.071 4.849-.071zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-blue/5 to-purple/5 border-t border-blue/10 text-navy py-16">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <Logo size="small" />
            <p className="text-sm text-navy/70 leading-relaxed mt-4">
              Vektro is a full-service software agency built for businesses that
              refuse to stay average.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/company/vektro-tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vektro on LinkedIn"
                className="w-9 h-9 rounded-full bg-navy/8 border border-navy/15 flex items-center justify-center text-navy/60 hover:text-[#0077B5] hover:border-[#0077B5]/40 hover:bg-[#0077B5]/10 transition-all duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/vektro.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vektro on Instagram"
                className="w-9 h-9 rounded-full bg-navy/8 border border-navy/15 flex items-center justify-center text-navy/60 hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10 transition-all duration-200"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#website"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  Website Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mobile"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  AI Assistants
                </Link>
              </li>
              <li>
                <Link
                  href="/services#qa"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  QA Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@vektro.tech"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  hello@vektro.tech
                </a>
              </li>
              <li className="space-y-2 pt-2">
                <a
                  href="https://www.linkedin.com/company/vektro-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-navy/70 hover:text-[#0077B5] transition-all group"
                >
                  <span className="text-navy/40 group-hover:text-[#0077B5] transition-all"><LinkedInIcon /></span>
                  <span>linkedin.com/company/vektro-tech</span>
                </a>
                <a
                  href="https://www.instagram.com/vektro.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-navy/70 hover:text-[#E1306C] transition-all group"
                >
                  <span className="text-navy/40 group-hover:text-[#E1306C] transition-all"><InstagramIcon /></span>
                  <span>@vektro.tech</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-navy/60">
            © {currentYear} Vektro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue transition-all">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
