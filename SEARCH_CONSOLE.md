# Google Search Console – Troubleshooting

If Search Console is not connecting or verifying the site, check the following.

## 1. Property URL

- **Exact match**: The property URL in Search Console must match how the site is served (e.g. `https://www.buddhiworks.com` vs `https://buddhiworks.com`).
- **Consistent canonical**: This project sets `metadataBase` and `alternates.canonical` so the chosen canonical domain should match the Search Console property.

## 2. Verification methods

- **HTML tag**: Add the meta tag Google gives you in the `<head>`. In this Next.js app, add it in `app/layout.tsx` under the existing metadata (e.g. in a `<head>` child or via `metadata.other` if you add custom meta).
- **HTML file**: Download the verification file, put it in `public/`, and ensure it’s reachable at `https://<your-domain>/<filename>.html`.
- **DNS**: Use the TXT record Google provides at your domain DNS.

## 3. Sitemap

- **URL**: Submit `https://www.buddhiworks.com/sitemap.xml` (or your live domain + `/sitemap.xml`).
- **Source**: The sitemap is generated in `app/sitemap.ts` and uses `NEXT_PUBLIC_SITE_URL` or falls back to `https://www.buddhiworks.com`. Set `NEXT_PUBLIC_SITE_URL` in production to your live URL.
- **robots.txt**: `public/robots.txt` allows all crawlers and references `Sitemap: /sitemap.xml`. Crawlers resolve this relative to the site origin.

## 4. Crawlability

- **robots.txt**: Ensure no rule is blocking `/` or `/sitemap.xml`.
- **Response**: The site must return 200 for the homepage and for `/sitemap.xml` when requested by Google (no auth, no blocking by host/firewall).

## 5. Common fixes

| Issue | Fix |
|-------|-----|
| Wrong property | Add a new property for the exact URL (with or without `www`) and verify it. |
| Verification pending | Re-check the meta tag or file is in the live site’s HTML and the domain matches. |
| Sitemap “couldn’t fetch” | Confirm `NEXT_PUBLIC_SITE_URL` is set in production; test `https://<your-domain>/sitemap.xml` in a browser. |
| Duplicate/alternate URL | Use one canonical (e.g. `https://www.buddhiworks.com`) and 301 redirect the other (e.g. non-www) to it at host level. |

## 6. Environment variable

In production (e.g. Vercel), set:

```bash
NEXT_PUBLIC_SITE_URL=https://www.buddhiworks.com
```

(Replace with your actual live URL.) This is used for canonical URLs and the sitemap.
