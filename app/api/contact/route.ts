import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  service?: string
  budget?: string
  timeline?: string
  message?: string
  description?: string
}

// Configure your email service
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

function row(label: string, value?: string) {
  if (!value) return ''
  return `<p style="margin: 0 0 10px;"><strong>${label}:</strong> ${value}</p>`
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const details = body.description || body.message || ''

    // Only the essentials are required — this endpoint serves both the simple
    // contact form (name/email/project type/message) and the richer chat widget.
    if (!body.name || !body.email || !details) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL
    const smtpFrom = process.env.SMTP_FROM

    if (!companyEmail) {
      console.error('Missing NEXT_PUBLIC_COMPANY_EMAIL environment variable')
      return NextResponse.json({ error: 'Email configuration error' }, { status: 500 })
    }

    if (!smtpFrom) {
      console.error('Missing SMTP_FROM environment variable')
      return NextResponse.json({ error: 'Email configuration error' }, { status: 500 })
    }

    // Email to agency
    const agencyEmailHTML = `
      <div style="font-family: monospace, monospace; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 32px;">
        <h2 style="color: #f97316; margin-top: 0;">New project inquiry</h2>
        <div style="background: #131313; border: 1px solid #262626; padding: 20px; margin: 20px 0;">
          ${row('Name', body.name)}
          ${row('Email', body.email)}
          ${row('Phone', body.phone)}
          ${row('Service', body.service)}
          ${row('Budget', body.budget)}
          ${row('Timeline', body.timeline)}
          <p style="margin: 16px 0 4px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #8a8a8a;">${details}</p>
        </div>
        <p style="color: #5c5c5c; font-size: 12px;">This is an automated message from the vektro.tech contact form.</p>
      </div>
    `

    // Email to client
    const clientEmailHTML = `
      <div style="font-family: monospace, monospace; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 32px;">
        <h2 style="color: #f97316; margin-top: 0;">Thanks for reaching out</h2>
        <p>Hi ${body.name},</p>
        <p>We&rsquo;ve received your project request and we&rsquo;re excited to help.</p>
        <div style="background: #131313; border: 1px solid #262626; padding: 20px; margin: 20px 0;">
          ${row('Service', body.service)}
          ${row('Budget', body.budget)}
          ${row('Timeline', body.timeline)}
        </div>
        <p>Our team will review your requirements and get back to you within <strong>24 hours</strong>.</p>
        <hr style="border: none; border-top: 1px solid #262626; margin: 30px 0;" />
        <p style="color: #5c5c5c; font-size: 12px;">
          <strong>vektro;</strong><br>
          ${companyEmail}
        </p>
      </div>
    `

    await transporter.sendMail({
      from: smtpFrom,
      to: companyEmail,
      subject: `New project inquiry from ${body.name}`,
      html: agencyEmailHTML,
      replyTo: body.email,
    })

    await transporter.sendMail({
      from: smtpFrom,
      to: body.email,
      subject: 'We received your project request - Vektro',
      html: clientEmailHTML,
    })

    return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to process your request' }, { status: 500 })
  }
}
