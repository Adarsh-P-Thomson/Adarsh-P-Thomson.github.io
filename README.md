# Adarsh P Thomson - Portfolio

A stunning, highly interactive portfolio website with cyberpunk aesthetics, built with modern web technologies.

![Portfolio Screenshot](https://github.com/user-attachments/assets/4fe4fef3-9a53-4f95-a10b-27c40a1fb935)

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** React Router v7
- **Icons:** React Icons
- **Particles:** tsparticles
- **Deployment:** GitHub Pages

## 🎨 Features

- **Cyberpunk Theme:** Dark background with neon blue, purple, and cyan accents
- **Particle Background:** Animated constellation with interconnected particles
- **Smooth Animations:** Page transitions, scroll animations, and hover effects
- **Glitch Effects:** Animated text glitches on hero section
- **Glass Morphism:** Blurred-background transparency for UI elements
- **Fully Responsive:** Optimized for all screen sizes
- **Interactive Components:** Dynamic navigation, animated cards, and more

## 📦 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── AnimatedSection.jsx
│   │   ├── Footer.jsx
│   │   ├── GlitchText.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBackground.jsx
│   │   └── ProjectCard.jsx
│   ├── home/            # Home page sections
│   │   ├── CertificatesSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── FunSection.jsx
│   │   ├── HomeAchievements.jsx
│   │   ├── HomeProjects.jsx
│   │   ├── LandingSection.jsx
│   │   └── SkillsSection.jsx
│   └── layout/          # Layout components
│       └── MainLayout.jsx
├── pages/               # Page components
│   └── HomePage.jsx
├── assets/              # Static assets
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🛠️ Development

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Adarsh-P-Thomson/Adarsh-P-Thomson.github.io.git

# Navigate to the project directory
cd Adarsh-P-Thomson.github.io

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🚢 Deployment

The project is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Deploy the contents to your hosting service
```

## 🎨 Customization

### Colors

The cyberpunk color scheme is defined in `src/index.css` using the `@theme` directive:

```css
@theme {
  --color-cyber-dark: #0a0a1a;
  --color-cyber-blue: #00d9ff;
  --color-cyber-purple: #a855f7;
  --color-cyber-cyan: #06b6d4;
  --color-cyber-red: #dc2626;
}
```

### Content

- **Personal Info:** Update `src/components/home/LandingSection.jsx`
- **Projects:** Edit `src/components/home/HomeProjects.jsx`
- **Experience:** Modify `src/components/home/ExperienceSection.jsx`
- **Skills:** Update `src/components/home/SkillsSection.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- Website: [adarshpthomson.me](https://adarshpthomson.me)
- Email: contact@adarshpthomson.me
- GitHub: [@Adarsh-P-Thomson](https://github.com/Adarsh-P-Thomson)

---

Made with ❤️ by Adarsh P Thomson
