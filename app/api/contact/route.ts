import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  timeline: string
  description: string
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

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.service || !body.budget || !body.timeline || !body.description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Get environment variables
    const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL
    const smtpFrom = process.env.SMTP_FROM

    // Validate email configuration
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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1B2A6B;">New Quote Request</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Service:</strong> ${body.service}</p>
          <p><strong>Budget:</strong> ${body.budget}</p>
          <p><strong>Timeline:</strong> ${body.timeline}</p>
          <p><strong>Description:</strong></p>
          <p style="white-space: pre-wrap;">${body.description}</p>
        </div>
        <p style="color: #666; font-size: 12px;">This is an automated message from your website form.</p>
      </div>
    `

    // Email to client
    const clientEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1B2A6B;">Thank You for Your Inquiry! 🚀</h2>
        <p>Hi ${body.name},</p>
        <p>We've received your project request and we're excited to help!</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0084FF;">Quote Summary</h3>
          <p><strong>Service:</strong> ${body.service}</p>
          <p><strong>Budget Range:</strong> ${body.budget}</p>
          <p><strong>Timeline:</strong> ${body.timeline}</p>
        </div>
        <p>Our team will review your requirements and get back to you with a detailed quote within <strong>24 hours</strong>.</p>
        <p>In the meantime, if you have any questions, feel free to reach out to us directly.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
        <p style="color: #666; font-size: 12px;">
          <strong>Vektro</strong><br>
          Software Agency<br>
          ${companyEmail}
        </p>
      </div>
    `

    // Send email to agency
    await transporter.sendMail({
      from: smtpFrom,
      to: companyEmail,
      subject: `New Quote Request from ${body.name}`,
      html: agencyEmailHTML,
      replyTo: body.email,
    })

    // Send confirmation email to client
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
