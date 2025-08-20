# Portfolio (Next.js + Tailwind)

A clean, fast personal portfolio site built with Next.js App Router and Tailwind CSS.

Features:
- Home, About, Projects, Contact pages
- Reusable UI components
- SEO-friendly metadata
- Contact form with email sending (via SMTP using Nodemailer)
- Mobile-first, accessible UI

## Quick start

1. Install dependencies
2. Run dev server

### Prerequisites
- Node.js 18+

### Environment
Create `.env.local` with your SMTP settings for the contact form:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
CONTACT_TO=you@example.com
CONTACT_FROM=portfolio@yourdomain.com
```

### Scripts
- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm start` - start production server

