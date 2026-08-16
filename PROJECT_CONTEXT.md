# Project Context: Minerock Impex Web Application

This file serves as a comprehensive project handoff document. If the LLM context window becomes saturated or if a new chat session is initiated, feed this file to the AI to restore the entire project state, design systems, and current workflow.

---

## 1. Project Overview & Tech Stack
*   **Company Name:** Minerock Impex (recently rebranded from *VF Agri Export*)
*   **Business Profile:** Global B2B exporter of premium agro commodities (fresh fruits, fresh vegetables, and diverse packing of salts) based in Gandhidham, Gujarat, India.
*   **Architecture:**
    *   **Backend:** Python 3.12 + Flask (serverless ready).
    *   **Frontend:** Semantic HTML5, Vanilla CSS3 (no frameworks like Tailwind, custom responsive layouts), and modular Vanilla JavaScript.
    *   **Hosting & Deployment:** Configured for **Vercel** via serverless functions.
        *   `vercel.json` routes all wildcards to `app.py`.
        *   Flask auto-reloads templates in development, and assets (images, CSS, JS) are served static/CDN ready from Vercel's global CDN.
    *   **Branch Status:** Currently working on `feature/image`.

---

## 2. Brand Identity & Asset Setup

### A. Logo Implementation
*   **File Path:** [minerock-logo.jpg](file:///Users/kharva/Desktop/vf-website/static/images/logo/minerock-logo.jpg) (circular corporate logo).
*   **Header Layout:** In [base.html](file:///Users/kharva/Desktop/vf-website/templates/base.html), the logo image and the text logo (`Minerock Impex` and `Est. 2015`) are placed **side-by-side** inside a flexbox container with `gap: 0.75rem`.
*   **Responsive Styling:** 
    *   **Desktop:** `.nav-logo-img` is configured at `60px` height.
    *   **Mobile (<768px):** Automatically scales down via [responsive.css](file:///Users/kharva/Desktop/vf-website/static/css/responsive.css) to `44px` height, and the brand text drops to `1.15rem` font size to fit neatly beside the mobile hamburger button without overflow.
*   **Footer Logo:** Preserves its original colors (removed the white-out filter) and sits on a circular white background padding (`border-radius: 50%; background: white; padding: 4px;`) to pop cleanly against the dark green/charcoal footer.
*   **Favicon:** Updated to point to [minerock-logo.jpg](file:///Users/kharva/Desktop/vf-website/static/images/logo/minerock-logo.jpg) with a `type="image/jpeg"` MIME layout.

### B. Product Catalogs & Images
*   **Fresh Vegetables:** 17 high-quality local produce images compressed to web-ready size (reducing folder weight from 175MB to ~1.2MB for Vercel's 225MB serverless limits). Sourced from `pic/fresh-veg` to `static/images/products/fresh-veg/`.
*   **Fresh Fruits:** 13 high-quality fruit produce images compressed (reducing folder weight from 116MB to ~908KB). Sourced from `pic/fresh fruits` to `static/images/products/fresh-fruits/`.
*   **Salt:** Sourced with customizable packing specs.
*   **Git Rules:** The `pic/` folder (raw source photography) and `myenv/` (local conda/virtualenv) are explicitly ignored in `.gitignore`.

---

## 3. Active Pages & Custom Features
The project has 9 active pages:
1.  **Home (`/`):** Hero section, categories overview, "Why Choose Us" grid, and bottom call-to-action cards.
2.  **About (`/about`):** 
    *   Updated with Minerock Impex's custom vision and mission (17+ years experience).
    *   **Automatic Slideshow:** The main team image block runs an automatic crossfade slideshow switching between `slide-1.jpg` and `slide-2.jpg` (found in `static/images/about/`) at 4-second intervals using custom CSS opacity and vanilla JS.
3.  **Products Overview (`/products`):** Highlighting major category portals.
4.  **Fresh Vegetables Category (`/products/fresh-vegetables`):** Shows 14 items with custom descriptions.
5.  **Fresh Fruits Category (`/products/fresh-fruits`):** Shows 13 items with custom descriptions.
6.  **Salt Category (`/products/salt`):** Showcases raw/edible varieties and packaging models.
7.  **Catalogue (`/catalogue`):** Downloadable business literature.
8.  **Contact (`/contact`):** Includes a contact details sidebar and an enquiry form.
9.  **404 Page:** Custom error page layout.

---

## 4. Current Contact Details (Implemented Everywhere)
*   **Phone (Tel & WhatsApp Links):** `+91 92652 29817` (Cleaned in both text visual labels and internal `tel:+919265229817` / `wa.me/919265229817` URLs).
*   **Email:** `info@minerock.co.in`
*   **Physical Address:**
    ```text
    39 Madhav, GF, 
    LS NO 30/1, Shinay,
    Gandhidham 370205
    ```

---

## 5. Next Steps / Active Task List (Handoff to New Chat)

The next feature to implement is the **Enquiry Form Backend**.

### [ ] Task 1: SMTP Email Integration in `app.py`
*   **Target File:** [app.py](file:///Users/kharva/Desktop/vf-website/app.py) (Specifically inside the `@app.route('/contact', methods=['GET', 'POST'])` handler).
*   **Objective:** Wire up the logic to collect form fields:
    *   `name` (Name)
    *   `company` (Company Name)
    *   `email` (Customer Email)
    *   `phone` (WhatsApp/Phone)
    *   `product` (Dropdown select)
    *   `message` (Enquiry details)
*   **Implementation:** Use Python's standard `smtplib` and `email.mime` modules to format an HTML/Plaintext email and send it to **`infominerock@gmail.com`** when a user submits the form.
*   **Security:** Read SMTP configurations safely from environment variables using `python-dotenv`:
    *   `SMTP_SERVER` (e.g. `smtp.gmail.com` or custom SMTP host)
    *   `SMTP_PORT` (e.g., `465` for SSL or `587` for TLS)
    *   `SENDER_EMAIL` (The email logging into the SMTP server)
    *   `SENDER_PASSWORD` (App password or SMTP password)
    *   `RECEIVER_EMAIL` (Set to `infominerock@gmail.com` to receive submissions)

### [ ] Task 2: Configure `.env` Environment File
*   Create a local `.env` file at the project root with the SMTP keys listed above.
*   Ensure it remains ignored under `.gitignore`.
*   Draft a `.env.example` explaining how the user should obtain a Gmail "App Password" to allow the server to securely log in.

### [ ] Task 3: Flash Message Verification & Testing
*   Ensure when a form is successfully sent, Flask redirects and displays a clean success flash message.
*   Validate handling for server connection timeouts so the site doesn't crash if the mail server is down (implement proper `try/except` wrappers).
