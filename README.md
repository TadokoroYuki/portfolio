# Portfolio

My personal portfolio website built with Next.js and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Features

- ✨ Responsive design (mobile, tablet, desktop)
- 🌙 Dark mode support
- ♿ Accessibility optimized
- 🚀 Performance optimized
- 📱 Mobile-first approach
- 🎨 Modern UI with Tailwind CSS

## Project Structure

```
portfolio/
├── app/                  # Next.js App Router
│   ├── components/      # React components
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── docs/                # Documentation
│   ├── ACCESSIBILITY_CHECKLIST.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── PERFORMANCE_SEO_GUIDE.md
└── public/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TadokoroYuki/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## Documentation

### For Users

- **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)** - How to deploy your portfolio (Vercel, Netlify, GitHub Pages)
- **[Accessibility Checklist](./docs/ACCESSIBILITY_CHECKLIST.md)** - Accessibility testing and improvements
- **[Performance & SEO Guide](./docs/PERFORMANCE_SEO_GUIDE.md)** - Optimize performance and SEO

### Key Documentation Sections

1. **Deployment Options**
   - Vercel (recommended for Next.js)
   - Netlify
   - GitHub Pages
   - Custom domain setup

2. **Accessibility**
   - Keyboard navigation
   - Screen reader support
   - Color contrast
   - ARIA labels

3. **Performance Optimization**
   - Image optimization
   - Lazy loading
   - Code splitting
   - Bundle size optimization

4. **SEO**
   - Meta tags
   - Open Graph
   - Sitemap
   - robots.txt

## Customization

### Update Personal Information

1. **Hero, About, Projects, and Contact**: Edit both locale dictionaries, `app/i18n/dictionaries/ja.ts` and `app/i18n/dictionaries/en.ts`.
2. **Skill Map**: Keep evidence URLs and assessment states in `app/data/skill-map.ts`. Edit topic labels and explanations in both locale dictionaries. Only use `publicWork` for attributable public evidence and update the date when the map changes.
3. **Roadmap**: The map links to the original roadmap.sh API Design track. It does not mirror account progress, republish roadmap content, or certify proficiency. Leave internal tasks, links, and time estimates out of the public map.

### Add Images

1. Place images in `public/images/`
2. Update components to use Next.js Image component
3. Follow the [Performance & SEO Guide](./docs/PERFORMANCE_SEO_GUIDE.md) for optimization

### Customize Styling

- **Colors**: Edit `app/globals.css` CSS variables
- **Typography**: Update Tailwind classes in components
- **Dark Mode**: Modify dark mode classes (prefixed with `dark:`)

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy automatically

For detailed instructions, see the [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md).

## Future Plans

- 🔧 Add Go backend for contact form
- 📝 Add blog functionality with Go API
- 📊 Add analytics integration

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@TadokoroYuki](https://github.com/TadokoroYuki)
- Email: your.email@example.com

---

Built with ❤️ using Next.js and TypeScript
