# Zarrar Shaikh - Personal Portfolio

A highly animated, responsive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features a Space/AI theme with continuous background animations, dark/light mode toggle, and interactive project showcases.

---

## 🚀 Features

- **Dark Mode First**: Default dark theme with toggle functionality stored in localStorage
- **Space/AI Theme**: Continuous background animations with floating particles, stars, and futuristic elements
- **Responsive Design**: Mobile-first approach with smooth transitions across all devices
- **Interactive Projects**: Hover previews for YouTube videos, live demos, and GitHub repositories
- **Smooth Animations**: Powered by Framer Motion for fluid UI interactions
- **Modern Tech Stack**: React.js functional components, Tailwind CSS, TypeScript

---

## 🛠️ Tech Stack

- **Frontend**: React.js 18 with TypeScript
- **Styling**: Tailwind CSS with custom theme extensions
- **Animations**: Framer Motion for smooth transitions and interactions
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Vercel-ready configuration

---

## 🎨 Theme & Design

The portfolio features a sophisticated Space/AI aesthetic with:

- **Color Palette**: Deep space blues, electric accents, and AI-inspired highlights
- **Background**: Animated starfield with floating particles and geometric shapes
- **Typography**: Inter font family with Space Mono for code elements
- **Animations**: Floating elements, particle systems, and smooth hover effects
- **Glassmorphism**: Backdrop blur effects and subtle transparency

---

## 📱 Sections

1. **Hero**: Animated introduction with key highlights and call-to-action
2. **About**: Personal information, professional summary, and hobbies
3. **Experience**: Timeline of professional work history with detailed achievements
4. **Projects**: Interactive grid showcasing 16+ projects with hover previews
5. **Skills**: Categorized technology stack with animated skill badges
6. **Education**: Academic background and competitive achievements

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Zlash65/zlash.xyz.git
   cd zlash.xyz
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The site will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder ready for deployment.

---

### Environment Variables

No environment variables are required for this static portfolio site.

---

## 🎯 Performance Optimizations

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Images**: WebP format with fallbacks
- **Minimal Bundle**: Tree-shaking removes unused code
- **Fast Refresh**: Hot module replacement during development

---

## 🔧 Customization

### Changing Colors

Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  'neon': {
    blue: '#3b82f6',
    cyan: '#06b6d4',
    purple: '#8b5cf6',
    pink: '#ec4899',
    green: '#10b981',
  }
}
```

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`

### Modifying Animations

Animation variants are defined in each component using Framer Motion. Adjust timing and easing in the `transition` objects.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
