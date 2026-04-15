# GR8BODY Website

Professional mobile massage therapy website for **GR8BODY by Anna** — serving South East London and Kent.

**Live site:** [gr8body.uk](https://gr8body.uk)

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub repository

1. Log in to [github.com](https://github.com) (create a free account if you don't have one)
2. Click the **+** icon top-right → **New repository**
3. Name it `gr8body` (or anything you like)
4. Set visibility to **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2 — Upload the website files

**Option A — Via the GitHub website (easiest):**
1. Open your new repository
2. Click **uploading an existing file**
3. Drag and drop all files and folders from this project
4. Click **Commit changes**

**Option B — Via Git (faster for updates):**
```bash
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gr8body.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, click **Settings**
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Select branch: `main` / folder: `/ (root)`
5. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/gr8body/` within a few minutes.

### Step 4 — Connect your custom domain (gr8body.uk)

1. In the Pages settings, enter `gr8body.uk` in the **Custom domain** field and click Save
2. GitHub will create a `CNAME` file in your repository automatically
3. Log in to your domain registrar (GoDaddy, Namecheap, etc.) and update the DNS records:

| Type  | Host | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | YOUR_USERNAME.github.io |

4. DNS changes can take up to 48 hours to propagate
5. Once propagated, tick **Enforce HTTPS** in GitHub Pages settings (free SSL!)

---

## 📂 File Structure

```
gr8body/
├── index.html              Homepage
├── about.html              About Anna
├── contact.html            Contact & booking form
├── gift-vouchers.html      Gift vouchers
├── privacy-policy.html     GDPR privacy policy
├── sitemap.xml             XML sitemap for search engines
├── robots.txt              Search engine crawl instructions
├── assets/
│   ├── css/style.css       All styles (fonts, colours, layout)
│   └── js/main.js          Navigation, animations, FAQ accordion
├── treatments/
│   ├── index.html          Treatments overview
│   ├── swedish-massage.html
│   ├── deep-tissue-massage.html
│   ├── pregnancy-massage.html
│   ├── indian-head-massage.html
│   ├── lymphatic-drainage.html
│   ├── oncology-massage.html
│   ├── corporate-chair-massage.html
│   └── pamper-party.html
└── blog/
    ├── index.html
    ├── spring-into-wellness.html
    ├── wellness-at-work.html
    ├── benefits-of-mobile-massage.html
    ├── pregnancy-massage-guide.html
    ├── lymphatic-drainage-explained.html
    └── massage-gift-voucher-ideas.html
```

---

## 📝 After Launch: Important Tasks

### 1. Update the contact form
The booking form on `contact.html` uses a placeholder Formspree action. To make it work:
1. Sign up at [formspree.io](https://formspree.io) (free tier available)
2. Create a new form and copy your form ID
3. In `contact.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and replace `YOUR_FORM_ID`

Alternatively, replace with Netlify Forms, EmailJS, or any other form handler.

### 2. Submit your sitemap to Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (gr8body.uk)
3. Submit `https://gr8body.uk/sitemap.xml`

### 3. Submit to Bing Webmaster Tools
[bing.com/webmasters](https://www.bing.com/webmasters)

### 4. Update the footer copyright year
In each HTML file, update `© 2025` to the current year as needed.

### 5. Add a favicon
Create a favicon (32×32 PNG or ICO) and add to the root directory. Then add to each page `<head>`:
```html
<link rel="icon" type="image/png" href="/favicon.png">
```

---

## ✅ SEO Checklist

- [x] Unique `<title>` and `<meta description>` on every page
- [x] Canonical URLs on every page
- [x] Open Graph tags (Facebook/social sharing)
- [x] Schema.org JSON-LD structured data (LocalBusiness, Service, BlogPosting, FAQPage)
- [x] XML sitemap at `/sitemap.xml`
- [x] robots.txt allowing all crawlers
- [x] Mobile responsive design
- [x] Semantic HTML (h1–h3, article, nav, footer)
- [x] Alt text on images
- [x] Internal linking between treatments and blog posts
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools submitted
- [ ] Google Business profile linked to website URL

---

## 🎨 Design System

**Colours:**
- Ivory background: `#FAF7F2`
- Deep green: `#2D4A3E`
- Gold accent: `#C9A96E`
- Blush: `#F2E0D5`
- Terra (red-brown): `#8B4A4A`

**Fonts:**
- Headings: Cormorant Garamond (Google Fonts)
- Body: Nunito Sans (Google Fonts)

---

## 📞 Business Details

| Field | Value |
|-------|-------|
| Business | GR8BODY – Mobile Massage Therapy by Anna |
| Phone | 020 3411 7476 / 075 8304 5487 |
| WhatsApp | +44 7583 045487 |
| Email | info@gr8body.uk |
| Address | The Green, Bexleyheath, DA7 5DW |
| Hours | Mon–Sun 9:00am–8:00pm |
| Membership | FHT, Guild of Beauty Therapists |
| Google Reviews | https://g.page/r/CUozbae-FrdmEB0/review |
