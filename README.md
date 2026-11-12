# Grand View 🏨🌄

> **A luxury hospitality, resort, and vacation booking website built with modern responsive web technologies.**

Welcome to the official repository for **Grand View**. This project is a multi-page, mobile-responsive web platform designed to provide guests with an immersive preview of resort accommodations, luxury suites, amenities, customer testimonials, and direct booking capabilities.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Pages & Architecture](#pages--architecture)
- [Contact Details & Alternative Information](#contact-details--alternative-information)
- [Technologies & Libraries Used](#technologies--libraries-used)
- [Project Directory Structure](#project-directory-structure)
- [Getting Started & Local Development](#getting-started--local-development)
- [Browser Compatibility](#browser-compatibility)
- [License](#license)

---

## 🌟 Overview

**Grand View** is a premier resort dedicated to delivering exceptional comfort, world-class hospitality, and memorable vacation experiences. The website provides visitors with all essential resort information, from suite rates and conference facilities to interactive booking and client inquiry workflows.

---

## ✨ Key Features

- **📱 Fully Responsive Design**: Optimized across mobile, tablet, and desktop using Tailwind CSS responsive utilities (`sm:`, `md:`, `lg:`).
- **🖼️ Interactive Carousel Banner**: High-resolution sliding banner highlighting the resort grounds, relaxation lounges, and pool facilities.
- **✨ Animate On Scroll (AOS)**: Smooth entrance animations for text headings, cards, and testimonial elements.
- **🏨 Suite & Accommodation Showcase**: Comprehensive catalog of resort suites with star ratings, transparent pricing, and direct booking CTAs.
- **🎯 Facilities & Amenities with Modals**: Detailed interactive popups for meeting rooms, Olympic pool, dining section, fitness center, relaxation area, and lobby.
- **📝 Form Validation**: Client-side JavaScript validation on the contact form checking for empty fields and valid email syntax with visual success/error indicators.
- **📅 Reservation Engine Interface**: Intuitive booking interface allowing guests to pick room suites, dates, and number of guests.
- **💬 Guest Testimonials**: Authentic feedback and reviews from featured guests.
- **📬 Newsletter Subscription**: Integrated newsletter signup forms across all page footers.
- **🍔 Mobile Navigation Drawer**: Hamburger toggle menu with smooth transition animations for smaller displays.

---

## 📄 Pages & Architecture

| File | Page Name | Purpose & Highlights |
| :--- | :--- | :--- |
| [`index.html`](./index.html) | **Homepage** | Hero slider, welcome message, resort highlights, quick facilities grid with interactive modal popups, and footer. |
| [`html/reservation.html`](./html/reservation.html) | **Reservations & Suites** | Detailed room directory (Hill-Top, Sea-Side, Main, Legend-Side, Master-Top, and Sea-View suites) with rates and amenities. |
| [`html/about.html`](./html/about.html) | **About Us** | Resort story, mission, scenic location overview, and verified guest reviews. |
| [`html/contact.html`](./html/contact.html) | **Contact & Booking** | Inquiry form with real-time validation, suite reservation form, and primary + alternative contact details. |

---

## 📞 Contact Details & Alternative Information

Grand View provides multiple communication channels to ensure seamless support for bookings, inquiries, and corporate events:

### 📍 Addresses & Locations
- **Main Resort:** 276, Charles Avenue behind Alaba Oro, Lagos, Nigeria
- **Alternative / International Branch:** 177, Phase 2 Velvet Station, Slevi, Sweden

### ☎️ Telephone Lines
- **Primary:** [(+234) 906-712-5235](tel:+2349067125235)
- **Alternative / Front Desk:** [(01) 73-277-732](tel:+0173277732)

### ✉️ Email Inquiries
- **General Inquiries:** [info@grandviewresort.com](mailto:info@grandviewresort.com)
- **Alternative / Reservations:** [reservations@grandviewresort.com](mailto:reservations@grandviewresort.com)

### 🌐 Official Social Channels
- **Twitter / X:** [@GrandViewResort](https://twitter.com/GrandViewResort)
- **Facebook:** [Grand View Official](https://web.facebook.com/GrandViewResort)
- **Instagram:** [@GrandViewResort](https://www.instagram.com/GrandViewResort/)

---

## 🛠️ Technologies & Libraries Used

- **Markup & Layout**: HTML5 (Semantic elements)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) via CDN (utility-first, fully responsive)
- **Typography**: [Google Fonts (Oswald)](https://fonts.google.com/specimen/Oswald)
- **Iconography**: [Font Awesome 5](https://fontawesome.com/)
- **Interactivity & Validation**: Vanilla JavaScript (ES6) — mobile nav, carousel, modals, form validation
- **Scroll Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

---

## 📂 Project Directory Structure

```text
Grand-View/
├── html/
│   ├── about.html         # About Grand View & guest reviews
│   ├── contact.html       # Contact information, inquiry & booking forms
│   └── reservation.html   # Suites, rates, and full facility list
├── images/                # Resort photography, suite images, and icons
├── js/
│   ├── main.js            # Mobile nav, carousel, modals & form validation
│   └── scripts.js         # AOS animation initializer
├── .gitignore             # Git ignore patterns
├── index.html             # Homepage / primary landing page (Tailwind CSS)
└── README.md              # Project documentation and specifications
```

---

## 🚀 Getting Started & Local Development

No package manager or build pipeline is required. You can preview and run the project locally using any standard static file server:

### Option 1: Live Server (VS Code Extension)
1. Open the project folder in VS Code.
2. Right-click [`index.html`](./index.html) and select **Open with Live Server**.
3. The website will automatically launch in your default web browser at `http://127.0.0.1:5500/index.html`.

### Option 2: Python HTTP Server
Run the built-in HTTP server from the root directory:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option 3: Node.js `serve` / `http-server`
```bash
npx serve .
# or
npx http-server -p 8080
```

---

## 🌐 Browser Compatibility

Tested and compatible across all modern web browsers:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
- Mobile Browsers (Chrome for Android, iOS Safari)

---

## 📝 License

This project is licensed under the MIT License — free for personal and educational use.
