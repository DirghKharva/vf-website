# Fruits & Vegetables Business Website — Updated Website Scope

## 1. Reference Design

The uploaded screenshot of the Piton Agri Export website is being used only as a **visual/layout reference** for the top navigation/header.

We will create an original design for our friend's business rather than copying the reference website.

### What we are taking from the reference

We want the clean top navigation style:

- Company logo on the left
- Navigation in the center/right
- Language selector on the right
- Clean white/light header
- Professional agricultural/business appearance
- Responsive navigation for mobile

### What we are NOT taking

We do **not** want to reproduce the complete reference website.

We are intentionally removing:

- Blog section
- Gallery section
- Unnecessary sections
- Unnecessary navigation items
- Any features that are not required by the business

---

# 2. Main Navigation

The website navigation should contain only the following:

```text
[LOGO]       Home     About     Products ▼     Catalogue     Contact Us
```

Optional right-side item:

```text
[Language]
```

depending on whether multilingual support is actually required.

---

# 3. Navigation Structure

## Home

Route:

```text
/
```

Purpose:

- Main landing page
- Company introduction
- Main product highlights
- Business value proposition
- Contact CTA

---

## About

Route:

```text
/about
```

Purpose:

- Company introduction
- Company story
- Mission
- Vision
- Values
- Business experience
- Quality commitment

---

## Products

Products will have a **hover dropdown** on desktop.

```text
Products ▼

    Fresh Vegetables
    Fresh Fruits
    Salt
```

### Desktop behavior

When the user hovers over:

```text
Products
```

the dropdown should appear.

Example:

```text
             Products ▼
                  │
          ┌───────┴────────┐
          │ Fresh Vegetables│
          │ Fresh Fruits    │
          │ Salt            │
          └─────────────────┘
```

Each option should be clickable.

---

# 4. Product Categories

For the initial version, we have exactly three product categories.

## 4.1 Fresh Vegetables

Route:

```text
/products/fresh-vegetables
```

This page will contain the vegetables that the business actually sells.

Possible future products:

```text
Onion
Potato
Tomato
Garlic
Green Chilli
Ginger
etc.
```

**Important:** Do not add products until the business owner confirms the actual product list.

---

## 4.2 Fresh Fruits

Route:

```text
/products/fresh-fruits
```

This page will contain the fruits sold by the business.

Possible future products:

```text
Mango
Pomegranate
Grapes
Banana
Orange
etc.
```

Again, the actual product list will be based on the friend's business.

---

## 4.3 Salt

Route:

```text
/products/salt
```

This page will contain the salt products offered by the business.

The exact products, specifications, packaging, and descriptions will be added after collecting business information.

---

# 5. Catalogue

Navigation item:

```text
Catalogue
```

Route:

```text
/catalogue
```

Purpose:

Provide the company's product catalogue.

Possible implementation:

### Option A — PDF catalogue

```text
Catalogue
    ↓
View / Download PDF
```

### Option B — Website catalogue

Display products directly on a catalogue page.

For Version 1, PDF support can be used if the business already has a catalogue.

---

# 6. Contact Us

Navigation item:

```text
Contact Us
```

Route:

```text
/contact
```

The contact page should include:

- Company name
- Phone number
- Email
- WhatsApp
- Business address
- Contact form
- Google Maps location if required

### Contact Form

Initial fields:

```text
Name
Company
Email
Phone
Product Interested In
Message
[Submit Enquiry]
```

No online payment or checkout functionality.

---

# 7. No Blog

The navigation must NOT contain:

```text
Blog
```

There will be no blog page in Version 1.

If the business later needs articles/news, it can be added separately.

---

# 8. No Gallery

The navigation must NOT contain:

```text
Gallery
```

We can still use business/product images throughout the website where useful.

A separate gallery page is not required.

---

# 9. No E-Commerce

This website is a **business showcase and enquiry website**.

We are NOT implementing:

```text
Cart
Checkout
Online Payment
Customer Login
Order Tracking
```

The main conversion actions are:

```text
Contact Us
Request a Quote
Call
WhatsApp
```

---

# 10. Header Design

The header should be inspired by the uploaded reference screenshot.

### Desktop layout

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [LOGO]        Home   About   Products ▼   Catalogue   Contact│
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

If language support is required:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [LOGO]    Home  About  Products ▼  Catalogue  Contact  [EN▼]│
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 11. Header Behavior

## Normal state

Clean, simple navigation.

## Hover state

Interactive navigation items should have a visual indication.

For Products:

```text
Products
    ↓ hover
Dropdown opens
```

The dropdown should contain:

```text
Fresh Vegetables
Fresh Fruits
Salt
```

## Sticky Header

We can make the header sticky:

```text
Page scroll
     ↓
Header remains at top
```

This should be implemented only if it improves usability and does not negatively affect mobile viewing.

---

# 12. Mobile Navigation

On mobile, the desktop hover dropdown will not be relied upon because hover does not work naturally on touch devices.

Instead:

```text
☰
```

opens the mobile navigation.

Example:

```text
☰ Menu

Home
About
Products ▼
    Fresh Vegetables
    Fresh Fruits
    Salt
Catalogue
Contact Us
```

Products should expand/collapse when tapped.

---

# 13. Updated Page Architecture

The initial website will contain:

```text
Home
│
├── About
│
├── Products
│   ├── Fresh Vegetables
│   ├── Fresh Fruits
│   └── Salt
│
├── Catalogue
│
└── Contact Us
```

That is the complete initial navigation structure.

---

# 14. Updated URL Structure

```text
/
├── /about
├── /products
├── /products/fresh-vegetables
├── /products/fresh-fruits
├── /products/salt
├── /catalogue
└── /contact
```

---

# 15. Flask Route Plan

Initial Flask routes:

```python
@app.route("/")
def home():
    pass


@app.route("/about")
def about():
    pass


@app.route("/products")
def products():
    pass


@app.route("/products/fresh-vegetables")
def fresh_vegetables():
    pass


@app.route("/products/fresh-fruits")
def fresh_fruits():
    pass


@app.route("/products/salt")
def salt():
    pass


@app.route("/catalogue")
def catalogue():
    pass


@app.route("/contact")
def contact():
    pass
```

These routes will later render Jinja2 templates.

---

# 16. Updated Folder Structure

```text
fruit_business/
│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
├── .env.example
│
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── about.html
│   ├── products.html
│   ├── fresh_vegetables.html
│   ├── fresh_fruits.html
│   ├── salt.html
│   ├── catalogue.html
│   ├── contact.html
│   └── 404.html
│
├── static/
│   ├── css/
│   │   ├── style.css
│   │   ├── navbar.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   └── navbar.js
│   │
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── vegetables/
│       ├── fruits/
│       ├── salt/
│       └── company/
│
└── data/
    └── products.py
```

---

# 17. Jinja2 Navigation

The navigation should be written once in:

```text
templates/base.html
```

Example structure:

```html
<nav>
    <a href="{{ url_for('home') }}">Home</a>

    <a href="{{ url_for('about') }}">About</a>

    <div class="dropdown">
        <a href="{{ url_for('products') }}">
            Products
        </a>

        <div class="dropdown-menu">
            <a href="{{ url_for('fresh_vegetables') }}">
                Fresh Vegetables
            </a>

            <a href="{{ url_for('fresh_fruits') }}">
                Fresh Fruits
            </a>

            <a href="{{ url_for('salt') }}">
                Salt
            </a>
        </div>
    </div>

    <a href="{{ url_for('catalogue') }}">
        Catalogue
    </a>

    <a href="{{ url_for('contact') }}">
        Contact Us
    </a>
</nav>
```

This keeps the navigation consistent across every page.

---

# 18. Design Direction

The visual design should communicate:

```text
Fresh
Natural
Professional
Trustworthy
Agricultural
Export / B2B
Premium
Clean
```

### Avoid

- Overly complicated animations
- Too many sections
- Excessive colors
- Crowded navigation
- Unnecessary pages
- Generic template appearance

---

# 19. Homepage Direction

The homepage can contain more sections than the navigation.

Important distinction:

> **Not every homepage section needs to become a navigation item.**

For example:

```text
HOME

Hero
  ↓
About Preview
  ↓
Product Categories
  ↓
Why Choose Us
  ↓
Quality / Process
  ↓
Markets / Business Information
  ↓
Contact CTA
  ↓
Footer
```

We do NOT need:

```text
Gallery page
Blog page
```

---

# 20. Product Section on Homepage

The homepage should showcase the three categories:

```text
Our Products

┌────────────────────┐
│                    │
│ Fresh Vegetables   │
│                    │
└────────────────────┘

┌────────────────────┐
│                    │
│ Fresh Fruits       │
│                    │
└────────────────────┘

┌────────────────────┐
│                    │
│ Salt               │
│                    │
└────────────────────┘
```

Each card should link to its respective category page.

---

# 21. Footer

The footer does not need to duplicate the entire navigation.

It should contain:

```text
Company Logo
Short company description

Quick Links
- Home
- About
- Products
- Catalogue
- Contact Us

Products
- Fresh Vegetables
- Fresh Fruits
- Salt

Contact
- Phone
- Email
- WhatsApp
- Address

Copyright
```

---

# 22. Implementation Priority

We will build in this order:

```text
1. Flask project setup
       ↓
2. Base HTML structure
       ↓
3. Header / Navbar
       ↓
4. Products dropdown
       ↓
5. Mobile navigation
       ↓
6. Home page
       ↓
7. About page
       ↓
8. Product category pages
       ↓
9. Catalogue
       ↓
10. Contact page
       ↓
11. Footer
       ↓
12. Responsive design
       ↓
13. SEO
       ↓
14. Performance
       ↓
15. Testing
       ↓
16. Production deployment
```

---

# 23. Current Navigation Requirement — Final

The navigation is finalized for Version 1 as:

```text
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│  LOGO     Home   About   Products ▼   Catalogue   Contact Us  │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

Products dropdown:

```text
Products ▼
    │
    ├── Fresh Vegetables
    ├── Fresh Fruits
    └── Salt
```

### Explicitly excluded

```text
❌ Blog
❌ Gallery
❌ Online Payment
❌ Cart
❌ Checkout
❌ Customer Login
```

---

# 24. Current Project Principle

Keep the website focused on the actual business.

The website should answer four questions quickly:

1. **Who are they?**
2. **What products do they sell?**
3. **Why should a customer trust them?**
4. **How can a customer contact them?**

Everything else is secondary.

---

# 25. Next Execution Step

Before coding the complete website, we should collect the actual business information:

```text
Company Name
Logo
Tagline
About/Company Description
Phone
Email
WhatsApp
Address
Products under Fresh Vegetables
Products under Fresh Fruits
Products under Salt
Catalogue
Business Photos
Product Photos
Social Media Links
Export/Service Locations
Certifications (if any)
```

Once this information is available, we can start **Phase 1: Flask project setup + navbar implementation**.
