# ⚡ Quick Start - Contact Form Setup

## What You Need To Do

### 3 Simple Steps To Go Live

#### Step 1️⃣: Get Formspree Endpoint (2 minutes)
```
1. Go to formspree.io
2. Click "Sign Up" (free)
3. Create new form project
4. Enter your email
5. Copy the endpoint from the code shown
   Example: https://formspree.io/f/xyzabc123
```

#### Step 2️⃣: Update contact.html (1 minute)
Find and replace **2 things**:

**Find:** `REPLACE_ME_FORMSPREE_ENDPOINT`
**Replace With:** `https://formspree.io/f/YOUR_ID_HERE`
*(from step 1)*

**Find:** `REPLACE_ME_EMAIL`
**Replace With:** `your@email.com`
*(appears 2 times in the file)*

#### Step 3️⃣: Deploy & Test (2 minutes)
```
1. Push changes to GitHub
2. Visit your contact page
3. Fill form and submit
4. Check your email (may be in spam)
5. You're done! ✅
```

---

## Form Features

| Feature | Details |
|---------|---------|
| **Fields** | Name, Email, Subject, Message |
| **Email Button** | Direct mailto: link |
| **Validation** | Real-time error checking |
| **Spam Protection** | Honeypot field |
| **Accessibility** | WCAG 2.1 AA compliant |
| **Backend** | Formspree (free tier) |
| **Hosting** | GitHub Pages compatible |

---

## What Changed

```
FILES MODIFIED:
├── contact.html       (form fields, Formspree integration)
├── script.js          (validation for new fields)
├── styles.css         (new form styling classes)
└── CONTACT_FORM_SETUP.md  (detailed setup guide)
```

---

## Form Validation Rules

✅ **Full Name** — Min 2 characters
✅ **Email** — Valid email format  
✅ **Subject** — Min 2 characters
✅ **Message** — Min 10 characters
✅ **Honeypot** — Must stay empty (auto-protected)

---

## Security Built-In

🔒 Client-side validation
🔒 Server-side validation (Formspree)
🔒 Honeypot spam protection  
🔒 HTTPS only (GitHub Pages)
🔒 No data storage (sent to email)

---

## Testing

**Before going live, test:**
- [ ] Form submits and you receive email
- [ ] Invalid inputs show error messages
- [ ] Works on mobile device
- [ ] Contact link on all pages works
- [ ] Email CTA button works (opens email client)

---

## Need Help?

📖 **Full Setup Guide:** See `CONTACT_FORM_SETUP.md`
📋 **Implementation Details:** See `IMPLEMENTATION_SUMMARY.md`
🔗 **Formspree Docs:** formspree.io/documentation

---

## Key Placeholders To Replace

```
contact.html line 60:
action="REPLACE_ME_FORMSPREE_ENDPOINT"

contact.html line 113:
href="mailto:REPLACE_ME_EMAIL"

contact.html line 119:
href="mailto:REPLACE_ME_EMAIL"
```

**That's it!** You're ready to go. 🚀
