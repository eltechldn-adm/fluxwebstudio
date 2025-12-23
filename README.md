# Flux Web Studio Website

Professional website for Flux Web Studio — a modern web studio helping businesses and creators launch professional websites using proven templates.

**Live URL:** fluxwebstudio.com

---

## 📁 Project Structure

```
flux-web-studio/
├── index.html          # Home page
├── templates.html      # Template gallery
├── services.html       # Services & pricing
├── contact.html        # Contact form
├── styles.css          # Complete stylesheet
├── script.js           # Minimal JavaScript
└── README.md           # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary Accent:** Forest Green (#2D5F3F)
- **Background:** Soft grey (#F5F5F3) and Light grey (#FAFAF8)
- **Text:** Charcoal (#2B2B2B, #5A5A5A, #7A7A7A)

### Typography
- **Font:** System font stack (San Francisco, Segoe UI, Roboto, Helvetica, Arial)
- **Responsive sizing** for all headings and text

### Components
- Reusable card styles
- Consistent button variants (primary, secondary, outline)
- Grid layouts with responsive breakpoints
- Form elements with validation styling

---

## 📝 How to Edit Content

### Update Business Information

**Email Address** appears in multiple places:
1. Footer of all pages: Search for `hello@fluxwebstudio.com`
2. Contact page info boxes: Search for `hello@fluxwebstudio.com`
3. JavaScript console message: Search in `script.js`

**Brand Name:**
- Header logo: `<a href="index.html" class="brand-logo">Flux Web Studio</a>`
- Footer tagline: `<p class="brand-tagline">Professional websites that grow with you.</p>`

### Update Page Content

**Home Page (index.html):**
- Hero headline: Line 30
- Hero subtitle: Line 31
- How It Works steps: Lines 41–59
- Who It's For cards: Lines 68–85
- Why Flux benefits: Lines 94–113

**Templates Page (templates.html):**
- Template cards start at Line 35
- Each card has: name, category, description, features, and action buttons
- To add a new template, copy a complete `.template-card` block

**Services Page (services.html):**
- Main pricing: Lines 32–60
- Optional setup services: Lines 68–98
- Care plan: Lines 106–131
- FAQ items: Lines 143–174

**Contact Page (contact.html):**
- Form fields: Lines 35–91
- Info boxes: Lines 110–141
- Reassurance section: Lines 153–178

---

## 💰 Update Pricing

All pricing is in `services.html`:

**Website Build Price:**
- Line 38: `<div class="price-amount">Starting at $1,500</div>`

**Optional Services:**
- Lines 72, 80, 88, 96 (Domain, Hosting, Email, Package)

**Care Plan:**
- Line 111: `<div class="price-amount">$150/month</div>`

---

## 🎨 Adding New Templates

### Template Catalog System

The template catalog uses real thumbnail screenshots displayed in a premium Wix/Webflow-style layout.

**Current Templates:**
1. Modern Trades - `thumb-trades.jpg`
2. Elegant Salon - `thumb-salon.jpg`
3. Creative Portfolio - `thumb-creative.jpg`
4. Corporate Minimal - `thumb-corporate.jpg`
5. Community Local - `thumb-community.jpg`

### Adding a New Template

1. **Create thumbnail screenshot** (1600x1000px, JPEG, 150-300KB)
2. Save as `assets/images/thumb-yourtemplate.jpg`
3. Open `templates.html`
4. Copy an existing `.template-card` block
5. Update the content:
   - Thumbnail `src`: `assets/images/thumb-yourtemplate.jpg`
   - Alt text: Descriptive text for accessibility
   - `.template-category`: Category badge (e.g., "Retail & E-commerce")
   - `.template-name`: Template name (e.g., "Modern Shop")
   - `.template-description`: Brief description
   - `.feature-tag`: List of key features (3–4 tags)
   - Update both button links with template slug

**Example:**
```html
<div class="template-card">
    <div class="template-preview">
        <img src="assets/images/thumb-yourtemplate.jpg" 
             alt="Your Template screenshot showing key features" 
             class="template-thumbnail">
    </div>
    <div class="template-info">
        <div class="template-category">Your Category</div>
        <h3 class="template-name">Your Template Name</h3>
        <p class="template-description">Description of your template...</p>
        <div class="template-features">
            <span class="feature-tag">Feature 1</span>
            <span class="feature-tag">Feature 2</span>
            <span class="feature-tag">Feature 3</span>
        </div>
        <div class="template-actions">
            <a href="#" class="btn btn-outline" target="_blank">Preview Demo</a>
            <a href="contact.html?template=your-template" class="btn btn-primary">Choose This Template</a>
        </div>
    </div>
</div>
```

### Template Selection Flow

When a user clicks "Choose This Template":
1. Button links to `contact.html?template=template-slug`
2. JavaScript reads the URL parameter
3. Contact form auto-selects the matching template
4. User sees pre-filled form ready to submit

This is already implemented in `script.js` (lines 230-251).

---

## 🎨 Customizing Colors

All colors are defined as CSS variables in `styles.css` (Lines 17–29):

```css
:root {
    --color-primary: #2D5F3F;           /* Forest green accent */
    --color-primary-dark: #1F4129;      /* Darker shade */
    --color-primary-light: #3A7550;     /* Lighter shade */
    
    --color-bg-main: #F5F5F3;           /* Soft grey background */
    --color-bg-alt: #FAFAF8;            /* Light grey surface */
    
    --color-text-primary: #2B2B2B;      /* Charcoal text */
    --color-text-secondary: #5A5A5A;    /* Mid-grey text */
}
```

**To change the accent color:**
1. Open `styles.css`
2. Update `--color-primary`, `--color-primary-dark`, and `--color-primary-light`
3. Save and refresh — all buttons, links, and accents will update

**To change backgrounds:**
- Update `--color-bg-main` and `--color-bg-alt`

---

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints at:
- **768px:** Mobile navigation activates
- **968px:** Contact form stacks vertically
- All grids adapt automatically with CSS Grid `auto-fit`

Test the site at different screen sizes to ensure everything looks good.

---

## �️ Template Catalog Features

### Premium Layout
The template catalog features a Wix/Webflow-style gallery with:
- Real template screenshots (16:10 aspect ratio)
- Hover effects: subtle scale (1.03x) + forest green border
- Consistent spacing and alignment
- Mobile-responsive grid

### Hover Behavior
```css
/* On hover: */
- Card lifts up (translateY -6px)
- Border changes to forest green
- Thumbnail scales slightly (1.03x)
- Box shadow increases
```

### Template Card Structure
Each card includes:
1. **Thumbnail** - Real screenshot
2. **Category badge** - Color-coded
3. **Template name** - Clear heading
4. **Description** - 1-2 lines
5. **Feature tags** - Key capabilities
6. **Action buttons** - Preview & Choose

### Technical Details
- Border: 2px (emphasizes premium feel)
- Transitions: 0.25s ease
- Image optimization: 150-300KB per thumbnail
- Lazy loading ready (add `loading="lazy"` to img tags if needed)

---

## �🚀 Deployment Guide

### Option 1: Netlify (Recommended)
1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop the entire project folder
3. Your site will be live in seconds
4. Connect your custom domain in Netlify settings

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select the branch and root folder
5. Your site will be live at `username.github.io/repo-name`

### Option 3: Traditional Web Hosting
1. Purchase hosting (e.g., SiteGround, Bluehost, HostGator)
2. Upload files via FTP to the `public_html` folder
3. Your site will be live at your domain

---

## 📧 Setting Up the Contact Form

The contact form currently shows a success message but **doesn't send email** (it's static).

### To Make It Functional:

**Option 1: Netlify Forms (Easiest)**
1. Add `netlify` attribute to the form tag in `contact.html`:
   ```html
   <form id="contactForm" netlify>
   ```
2. Deploy to Netlify
3. Form submissions will appear in your Netlify dashboard

**Option 2: Formspree**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option 3: Custom Backend**
- Build a server-side endpoint (Node.js, PHP, etc.)
- Update the form submission logic in `script.js` (see commented section around Line 215)

---

## 🛠 Maintenance & Updates

### Regular Updates
- **Pricing:** Update in `services.html`
- **Templates:** Add new cards to `templates.html`
- **Content:** Edit HTML files directly
- **Images:** Add to an `images/` folder and update image paths

### Adding Template Preview Images
1. Create an `images/` folder in your project
2. Add template screenshots (e.g., `modern-trades.jpg`)
3. Replace `.template-placeholder` divs with:
   ```html
   <img src="images/modern-trades.jpg" alt="Modern Trades Template" class="template-image">
   ```
4. Add this CSS to `styles.css`:
   ```css
   .template-image {
       width: 100%;
       height: auto;
       display: block;
   }
   ```

### Stock Images (Integrated)

The site uses professional stock images in key areas:

**Required Images** (place in `assets/images/`):
- `flux-hero-studio.jpg` - Hero background
- `flux-process-collaboration.jpg` - How It Works section
- `flux-services-work.jpg` - Services page header
- `flux-about-workspace.jpg` - Why Flux section
- `flux-contact-calm.jpg` - Contact page visual

**Image Guidelines:**
- Format: JPEG, optimized for web
- Color scheme: Complement grey × forest green theme
- Target size: 200-500KB per image
- Professional, modern, calm aesthetic

See `assets/images/README.md` for detailed specifications.

---

## 🔍 SEO Best Practices

The site includes:
- ✅ Semantic HTML structure
- ✅ Meta descriptions on all pages
- ✅ Descriptive page titles
- ✅ Clean URLs (no complex parameters)
- ✅ Fast loading (no frameworks)
- ✅ Mobile-responsive design

### To Improve SEO Further:
1. Add an `images/` folder with template screenshots
2. Add `alt` text to all images
3. Create a `sitemap.xml` file
4. Add Google Analytics tracking code
5. Submit your site to Google Search Console

---

## 📦 Future Enhancements

Ideas for scaling the site:

### Phase 1: Content
- Add real template preview images
- Create actual demo sites for each template
- Add client testimonials (when available)
- Add case studies or portfolio examples

### Phase 2: Features
- Blog section for SEO content
- Live chat widget (e.g., Intercom, Drift)
- Pricing calculator
- Template filtering/search

### Phase 3: Advanced
- CMS integration (e.g., Netlify CMS, Forestry)
- Client portal for project tracking
- Payment integration (Stripe)
- Template previews with live editing

---

## 📄 License & Ownership

This website is built for **Flux Web Studio** and is fully owned by the business. You can modify, duplicate, or extend it without restrictions.

---

## 💡 Support

For questions about editing or maintaining this website:
- Review this README thoroughly
- Check the comments in `styles.css` and `script.js`
- Search for specific text in files to locate sections

---

## 🎯 File-Specific Notes

### index.html
- Main landing page with hero and key sections
- Update hero text to test different messaging

### templates.html
- Gallery of your template offerings
- Easy to add more templates by copying card blocks

### services.html
- Clear pricing and service breakdowns
- FAQ section addresses common questions

### contact.html
- Project intake form
- Pre-fills template selection from URL parameter

### styles.css
- Fully commented with section headers
- CSS variables make color changes easy
- Mobile-first responsive design

### script.js
- Mobile menu toggle
- Form validation
- Minimal, dependency-free code

---

**Built with care for Flux Web Studio** 🚀
