'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'

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
                  href="/contact"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@vektro.com"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  hello@vektro.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-navy/70 hover:text-blue transition-all"
                >
                  {'{PHONE_NUMBER}'}
                </a>
              </li>
              <li className="flex gap-4 pt-4">
                <a href="#" className="text-navy/70 hover:text-blue transition-all">
                  {'{TWITTER}'}
                </a>
                <a href="#" className="text-navy/70 hover:text-blue transition-all">
                  {'{LINKEDIN}'}
                </a>
                <a href="#" className="text-navy/70 hover:text-blue transition-all">
                  {'{GITHUB}'}
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
