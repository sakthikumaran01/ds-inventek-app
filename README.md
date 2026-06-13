# DS Inventek — Modern Multipage Next.js Application

A stunning modern multipage application for DS Inventek (Robotics Education for the Next Generation) built with **Next.js 14**, **React 18**, and **CSS Modules** featuring advanced **glassmorphism design**.

## 🎨 Design Features

- **Modern Glassmorphism UI** — Frosted glass effects with backdrop blur
- **Smooth Animations** — Scroll reveals, hover effects, and transitions
- **Responsive Design** — Mobile-first approach with breakpoints for all devices
- **Dark Theme** — Eye-friendly dark mode with purple and cyan accents
- **Premium Typography** — Orbitron (headings), Inter (body), JetBrains Mono (code)

## 📁 Project Structure

```
ds-inventek-app/
├── app/
│   ├── layout.jsx               # Root layout with navbar & footer
│   ├── page.jsx                 # Home page
│   ├── page.module.css          # Home page styles
│   ├── globals.css              # Global styles & animations
│   ├── services/
│   │   ├── page.jsx             # Services page
│   │   └── services.module.css
│   ├── courses/
│   │   ├── page.jsx             # Courses page
│   │   └── courses.module.css
│   ├── about/
│   │   ├── page.jsx             # About page
│   │   └── about.module.css
│   └── contact/
│       ├── page.jsx             # Contact page
│       └── contact.module.css
├── components/
│   ├── Navbar.jsx               # Navigation component
│   ├── Navbar.module.css
│   ├── Footer.jsx               # Footer component
│   ├── Footer.module.css
│   └── BackgroundOrbs.jsx       # Animated background
├── package.json
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd ds-inventek-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

## 📄 Pages

### Home (`/`)
- Hero section with world championship badge
- Statistics counter with animations
- Featured services showcase
- Featured courses grid
- Call-to-action banner

### Services (`/services`)
- Complete service catalog (6 verticals)
- Detailed feature lists for each service
- Industry expertise highlights
- Get started CTA

### Courses (`/courses`)
- Course grid with difficulty levels
- Expandable course details with modules
- Learning path visualization (3 stages)
- FAQ section
- Enrollment CTA

### About (`/about`)
- Mission and vision statements
- Interactive timeline of achievements
- Team member profiles (6 founders)
- Why choose us highlights

### Contact (`/contact`)
- Contact information
- Response time transparency
- Social media links
- Contact form with validation
- Quick links to other sections

## 🎯 Key Features

### Glassmorphism Components
```jsx
// All cards use glass-card class
<div className="glass-card">
  // Content with frosted glass effect
</div>
```

### Scroll Reveal Animations
```jsx
// Elements reveal on scroll
<div className="reveal-item">Content</div>
```

### Responsive Grid System
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns (depending on content)

### Form Handling
- Client-side validation
- Success messages
- Auto-reset after submission

## 🎨 Color Palette

```css
--primary: #7c3aed          /* Purple */
--primary-light: #a78bfa    /* Light purple */
--secondary: #06b6d4        /* Cyan */
--accent: #f59e0b           /* Amber */
--bg-dark: #06040f          /* Near black */
--text-primary: #f8fafc     /* Off white */
--text-muted: #94a3b8       /* Gray */
```

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

**No external UI libraries** — Pure CSS modules and React!

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: 480px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Large**: 1280px (container max-width)

## ✨ Advanced Features

### Intersection Observer API
Smooth scroll reveals using native browser APIs (no library bloat)

### CSS Custom Properties
Easy theme customization via CSS variables

### Module CSS
Scoped styles prevent conflicts and improve maintainability

### Dynamic Navigation
Active link highlighting based on current route

### Mobile Menu
Hamburger menu with smooth animations for mobile devices

## 🚀 Performance Optimizations

- ✅ Next.js automatic code splitting
- ✅ Image optimization ready
- ✅ CSS modules (no global bloat)
- ✅ Lazy component loading
- ✅ Optimized animations (GPU-accelerated)

## 🎬 Animation Details

### Glassmorphism Effects
- `backdrop-filter: blur(30px)` with `-webkit-` prefix
- Subtle opacity and border gradients
- Smooth transitions on hover

### Scroll Reveals
- Fade up animation on scroll
- Staggered delays (0.1s increments)
- Intersection Observer trigger at 10% threshold

### Hover States
- Transform translate on Y-axis
- Glow effect via box-shadow
- Border color transitions
- Text shadow effects

## 🔄 Navigation Flow

```
Home (/)
├── Services (/services)
├── Courses (/courses)
├── About (/about)
└── Contact (/contact)
    └── Back links to all pages
```

## 📝 Form Features

- Real-time field validation
- Multi-select dropdown
- Success feedback animation
- Auto-clear after submission
- Required field indicators

## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🎓 Learning Resources

This project demonstrates:
- Next.js App Router (13+)
- React Hooks (useState, useEffect)
- CSS Modules for component styling
- Intersection Observer API
- Responsive design patterns
- Modern CSS (Grid, Flexbox, Gradients)
- Form handling in React

## 📄 License

Built for DS Inventek © 2024

## 🤝 Support

For questions or issues:
- Email: sakthikumaran.dsinventek@gmail.com
- Location: Chennai / Pondicherry, India

---

**Made with ❤️ for the next generation of robotics innovators** 🚀
