# BALKAPSO Construction website

Next.js 16 (App Router) + Tailwind CSS 4. Every page is statically generated.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where to edit

| What | File |
| --- | --- |
| Phone, WhatsApp, email, address, hours, socials | `src/lib/site.ts` |
| Services (text, FAQs, SEO titles) | `src/content/services.ts` |
| Projects | `src/content/projects.ts` |
| FAQ page | `src/content/faqs.ts` |
| Insights articles | `src/content/articles.ts` |
| Redirects from the old WordPress URLs | `next.config.ts` |

## Before launch

- [x] Replace the placeholder phone/WhatsApp numbers in `src/lib/site.ts`
- [ ] Confirm the email address (`contact@balkapso.com`) exists
- [ ] Confirm the PIN code and map coordinates in `src/lib/site.ts`
- [ ] Review project write-ups in `src/content/projects.ts` for accuracy
- [ ] Submit `https://balkapso.com/sitemap.xml` in Google Search Console
- [ ] Update the Google Business Profile with the same name, address and phone
