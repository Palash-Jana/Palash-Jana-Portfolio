# Palash Jana – Neon Portfolio with 3D Avatar

A futuristic, neon-themed personal portfolio website featuring an interactive 3D avatar, built with React, Three.js, and Framer Motion.

## ✨ Features

- **Interactive 3D Avatar** – A custom humanoid avatar built from Three.js primitives (spheres, cylinders, boxes) with neon emissive materials, idle floating animation, and drag-to-rotate controls.
- **Neon Design System** – Dark background with cyan, magenta, and green neon glows, CSS text-shadow/box-shadow effects, and a live scrolling grid background.
- **Typing Animation** – Rotating role titles in the hero section.
- **Animated Sections** – Framer Motion scroll-triggered entrance animations throughout.
- **Terminal-style About** – A simulated terminal card displaying personal info.
- **Skill Bars** – Animated progress bars for Frontend, Backend, and Tools.
- **Project Showcase** – 6 highlighted projects with neon accent colours.
- **Contact Form** – Functional form UI ready to connect to any backend or EmailJS.
- **Responsive** – Works on desktop, tablet, and mobile.

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite |
| 3D Rendering | Three.js + @react-three/fiber + @react-three/drei |
| Animations | Framer Motion |
| Styling | CSS3 (custom properties, neon effects) |
| Fonts | Orbitron · Rajdhani · Share Tech Mono |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Avatar3D.jsx       # Three.js 3D humanoid avatar
│   ├── GridBackground.jsx # Animated neon grid canvas
│   ├── Navbar.jsx         # Sticky navigation with mobile burger
│   ├── Hero.jsx           # Hero section with typing animation
│   ├── About.jsx          # Terminal-style about section
│   ├── Skills.jsx         # Skill bars + tech badges
│   ├── Projects.jsx       # Project cards grid
│   └── Contact.jsx        # Contact form
├── motionComponents.js    # Shared Framer Motion wrappers
├── App.jsx
├── App.css
├── index.css              # Global neon design system
└── main.jsx
```

## 📄 License

MIT
