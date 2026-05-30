# Email Configuration Setup Guide

## Quick Start

The contact form on your Vektro website is now integrated with email functionality! Follow these steps to enable it.

### Step 1: Configure Your Email Provider

Copy the `.env.local.example` file to `.env.local`:

```bash
cp .env.local.example .env.local
```

### Step 2: Choose Your Email Provider

Pick ONE of the options below and configure accordingly:

#### ✅ **Option 1: Gmail (Recommended for Testing)**

1. Go to your Google Account: https://myaccount.google.com/security
2. Enable "2-Step Verification"
3. Generate an App Password: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer" (or your device)
5. Google will generate a 16-character password
6. Add to `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-password
SMTP_FROM=noreply@vektro.com
NEXT_PUBLIC_COMPANY_EMAIL=your-email@gmail.com
```

#### 📧 **Option 2: SendGrid (Best for Production)**

1. Create a SendGrid account: https://sendgrid.com
2. Create an API key in Settings → API Keys
3. Add to `.env.local`:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.your-api-key-here
SMTP_FROM=noreply@vektro.com
NEXT_PUBLIC_COMPANY_EMAIL=contact@vektro.com
```

#### 🚀 **Option 3: AWS SES (Best for Scale)**

1. Set up AWS SES: https://aws.amazon.com/ses
2. Create SMTP credentials
3. Add to `.env.local`:

```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-aws-username
SMTP_PASSWORD=your-aws-password
SMTP_FROM=noreply@vektro.com
NEXT_PUBLIC_COMPANY_EMAIL=contact@vektro.com
```

### Step 3: Update Company Email

Change `NEXT_PUBLIC_COMPANY_EMAIL` to your actual business email where you want to receive quote requests.

### Step 4: Test It Out

1. Restart your dev server: `npm run dev`
2. Go to http://localhost:3000
3. Fill out the chat form and click "Send My Request"
4. Check both your email and the client's email for confirmations

## What Happens When Someone Submits?

### 📨 Email to Your Team
- Includes all form data
- Shows client contact info for follow-up
- Reply-to is set to client email

### ✉️ Confirmation Email to Client
- Thanks them for their interest
- Summarizes their quote request
- Sets expectation: "We'll get back within 24 hours"
- Professional branding

## Troubleshooting

### Emails Not Sending?

**Gmail issues:**
- Make sure 2-Factor Auth is enabled
- Generate a NEW app password (don't use your regular password)
- Check that SMTP_USER matches your email

**SendGrid issues:**
- Verify API key is correct (starts with "SG.")
- Check SendGrid account is verified
- Try with a verified sender email first

**General tips:**
- Check server logs for errors
- Verify all env vars are set
- Test SMTP credentials separately

### Emails Going to Spam?

- Add SPF records to your domain
- Add DKIM records for authentication
- Use a reputable email service (SendGrid/AWS SES)
- Include unsubscribe link (optional but recommended)

## Next Steps

1. **Custom Email Templates** - Modify `/app/api/contact/route.ts` to match your branding
2. **Database Storage** - Add MongoDB to store submissions
3. **Admin Dashboard** - Create a dashboard to view all submissions
4. **Webhooks** - Send submissions to Slack/Discord
5. **File Uploads** - Allow clients to attach project files

## Security Note

Never commit `.env.local` to Git. It's already in `.gitignore`. Only share example files!
