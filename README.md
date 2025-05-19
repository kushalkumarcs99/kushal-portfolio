# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features smooth animations, dark mode support, and a clean, professional design.

## Features

- 🎨 Modern and clean design
- 🌙 Dark mode support
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO friendly
- 🔧 Built with TypeScript
- 🎨 Styled with TailwindCSS
- 📝 Contact form

## Tech Stack

- React
- TypeScript
- TailwindCSS
- Framer Motion
- Vite
- React Icons
- React Scroll

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Customization

1. Update your personal information in each component under `src/components/sections/`.
2. Replace project images in the `public` directory.
3. Modify colors and styling in `tailwind.config.js`.
4. Update social links and contact information in `Contact.tsx`.

## Deployment

This project can be deployed to various platforms:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
