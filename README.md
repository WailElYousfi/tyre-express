# Tyre-Express — Angular Frontend

Premium mobile tire service website built with **Angular 17** (standalone components, lazy-loaded routes).

---

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root shell (Header + Router Outlet + Footer)
│   ├── app.config.ts             # App configuration (routing, animations)
│   ├── app.routes.ts             # All application routes
│   │
│   ├── core/
│   │   └── components/
│   │       ├── header/           # Sticky header with mobile menu
│   │       └── footer/           # Footer with links and contact info
│   │
│   └── features/
│       ├── home/                 # Landing page (hero, services, how-it-works, testimonials)
│       ├── services/             # Full services detail page
│       ├── how-it-works/         # Step-by-step + FAQ page
│       ├── service-area/         # Coverage map and municipalities
│       ├── about/                # Company story and values
│       └── contact/              # Booking form + contact info
│
├── styles.scss                   # Global styles, CSS variables, utilities
├── index.html
└── main.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm start
# → http://localhost:4200

# Production build
npm run build
```

---

## 🛣️ Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomeComponent | Landing page |
| `/services` | ServicesComponent | Detailed services |
| `/how-it-works` | HowItWorksComponent | Process + FAQ |
| `/service-area` | ServiceAreaComponent | Coverage map |
| `/about` | AboutComponent | Company story |
| `/contact` | ContactComponent | Booking form |

---

## 🎨 Design System

All design tokens are in `src/styles.scss` as CSS variables:

```scss
--primary: #f5c800          // Brand yellow
--bg-dark: #121212          // Page background
--surface-dark: #1e1e1e     // Card background
--border-dark: #2d2d2d      // Borders
--text-muted: #6b7280       // Muted text
```

Global utility classes available:
- `.btn-primary` — Orange CTA button
- `.btn-outline` — Ghost button
- `.card` — Dark surface card with hover border
- `.badge` — Orange pill badge
- `.section-title` — Large section header
- `.page-hero` — Inner page hero banner
- `.fade-in` / `.visible` — Scroll-triggered animation
- `.text-primary` — Orange text

---

## ⚙️ Architecture Notes

- **Standalone components** throughout (Angular 17+)
- **Lazy-loaded routes** for optimal bundle splitting
- **View Transitions API** enabled for smooth page navigation
- **Signal-based** reactive state in components
- **IntersectionObserver** for scroll-triggered animations on Home page
- **SCSS** with CSS custom properties (no Tailwind dependency)
- All pages are self-contained with inline styles where appropriate
