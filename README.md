# Fordham Artificial Intelligence Club Website

A modern, interactive website for the Fordham University Artificial Intelligence Club. Built with Next.js 15, React, TypeScript, and Tailwind CSS, featuring smooth animations and a responsive design.

![Fordham GSB AI Society](public/fgsbais_logo.png)

## Features

- 🎨 Modern, dark-themed UI with maroon accents
- ✨ Smooth scroll animations using Framer Motion
- 📱 Fully responsive design
- 🚀 Built with Next.js 15 App Router
- 💎 Styled with Tailwind CSS v4
- 🎯 TypeScript for type safety
- 🎭 Interactive hover effects and transitions

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager

Check your versions:
\`\`\`bash
node --version
npm --version
\`\`\`

## Installation

### Option 1: Clone from GitHub

1. **Clone the repository:**
\`\`\`bash
git clone https://github.com/yourusername/Fordham-GSB-AI-Society/Website.git
cd fordham-ai-club
\`\`\`

2. **Install dependencies:**
\`\`\`bash
npm install
\`\`\`

3. **Install Framer Motion:**
\`\`\`bash
npm install framer-motion
\`\`\`

4. **Run the development server:**
\`\`\`bash
npm run dev
\`\`\`

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Using shadcn CLI

If you downloaded the ZIP file from v0:

1. **Extract the ZIP file**
2. **Run the included shadcn setup command** (it handles installation automatically)
3. **Start the development server:**
\`\`\`bash
npm run dev
\`\`\`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

\`\`\`
fordham-ai-club/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero-section.tsx    # Hero section with CTA
│   ├── about-section.tsx   # About the club
│   ├── projects-section.tsx # Featured projects
│   ├── events-section.tsx  # Upcoming events
│   ├── team-section.tsx    # Team members
│   └── footer.tsx          # Footer with links
├── public/                 # Static assets
└── README.md              # This file
\`\`\`

## Customization

### Changing Colors

Edit the design tokens in `app/globals.css`:

\`\`\`css
@theme inline {
  --color-primary: /* your color */;
  --color-accent: /* your color */;
  /* ... other tokens */
}
\`\`\`

### Changing Content

- **Hero Section:** Edit `components/hero-section.tsx`
- **Projects:** Update the projects array in `components/projects-section.tsx`
- **Events:** Modify the events array in `components/events-section.tsx`
- **Team Members:** Update the team array in `components/team-section.tsx`

### Changing the Favicon

Add your favicon file to the `app/` directory:
- `app/favicon.ico` - Standard favicon
- `app/icon.png` - PNG icon (optional)

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Deploy to Other Platforms

This app can also be deployed to:
- **Netlify** - Connect your GitHub repo
- **Railway** - Deploy with one click
- **AWS Amplify** - Full-stack deployment

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Dependencies Not Installing
Clear npm cache and reinstall:
\`\`\`bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Animations Not Working
Make sure Framer Motion is installed:
\`\`\`bash
npm install framer-motion
\`\`\`

### Build Errors
Ensure you're using Node.js 18 or higher:
\`\`\`bash
node --version
\`\`\`

## Contributing

We welcome contributions from club members! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).


## Acknowledgments

- Built with [v0](https://v0.dev) by Vercel
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

---

Made with 💜 by the Fordham GSB AI Society
