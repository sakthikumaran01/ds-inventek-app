# Email Configuration Guide for DS Inventek Contact Form

## Overview
The contact form now sends emails to your inbox when users submit queries. Two emails are sent:
1. **Admin Email** — Full query details sent to you
2. **Confirmation Email** — Auto-reply sent to the user

## Setup Steps

### 1. Enable Gmail App Password
Since Gmail requires app-specific passwords for third-party applications:

1. Go to [Google Account Security Settings](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App passwords** section
4. Select **Mail** and **Windows Computer**
5. Google will generate a **16-character password**
6. Copy this password

### 2. Update `.env.local`
Edit `C:\Projects\ds-inventek-app\.env.local`:

```env
# Email Configuration
RECIPIENT_EMAIL=sakthikumaran.dsinventek@gmail.com

# SMTP Configuration (for Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sakthikumaran.dsinventek@gmail.com
SMTP_PASSWORD=your_16_character_app_password_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

Replace `your_16_character_app_password_here` with the password from Step 1.

### 3. Restart Dev Server
```bash
cd C:\Projects\ds-inventek-app
npm run dev
```

### 4. Test the Form
1. Navigate to http://localhost:3001/contact
2. Fill out the contact form
3. Click "Send Message →"
4. You should receive:
   - Email in your inbox (sakthikumaran.dsinventek@gmail.com)
   - Confirmation email sent to the user's provided email

## Email Template Features

### Admin Email Includes:
- Full Name, Email, Phone
- Subject line
- How they heard about you
- Complete message
- Reference ID for tracking

### User Confirmation Email Includes:
- Personalized greeting with their name
- Expected response time (24 hours)
- Reference ID
- Contact information
- Signature with company details

## Troubleshooting

### Issue: "Failed to send email" error
**Solution:** Check that:
- App password is correctly copied (16 characters)
- Gmail 2-Step Verification is enabled
- `.env.local` file has the correct values
- Restart the dev server after updating `.env.local`

### Issue: Emails not arriving
**Solution:**
- Check spam/junk folder
- Verify sender email in Gmail account
- Check browser console for error messages
- Look at terminal output for detailed error logs

### Issue: "SMTP Authentication failed"
**Solution:**
- Regenerate app password from Google Account
- Verify `SMTP_USER` matches your Gmail address
- Ensure there are no extra spaces in `.env.local`

## Production Deployment

For production, update environment variables:
1. In your hosting platform (Vercel, AWS, etc.)
2. Add the same variables to your environment configuration
3. Use the same Gmail account or switch to a dedicated email service

## Security Notes

⚠️ **Never commit `.env.local` to Git** — it contains sensitive credentials
- Add `.env.local` to `.gitignore` (already done)
- Use environment-specific configuration for production
- Consider using a dedicated email service (SendGrid, Mailgun) for production

## Contact Form Data Flow

```
User fills form on /contact page
    ↓
Submit button triggers POST request
    ↓
Data sent to /api/contact route
    ↓
Server validates and creates emails
    ↓
Nodemailer sends via Gmail SMTP
    ↓
Two emails delivered:
   → Admin inbox
   → User's email (confirmation)
    ↓
Success message shown to user
```
