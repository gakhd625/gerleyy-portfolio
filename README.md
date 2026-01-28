# Portfolio - Two-Column Sticky Layout

A modern portfolio website built with Next.js and Tailwind CSS, featuring a two-column sticky layout similar to dnachavez.dev.

## Features

- **Two-Column Sticky Layout**: Left sidebar (1/3 width) stays fixed while right content (2/3 width) scrolls
- **Active Section Highlighting**: Navigation items automatically highlight based on scroll position using Intersection Observer API
- **Responsive Design**: Mobile-friendly with stacked layout on smaller screens
- **Smooth Scrolling**: Smooth transitions between sections with proper scroll margins
- **Floating Footer**: Fixed bottom navigation bar with social media links
- **Black Background**: Pure black (#000000) design with Inter font

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-berkono/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page component
├── components/
│   ├── Sidebar.tsx           # Left sidebar with navigation
│   ├── Content.tsx           # Right scrollable content
│   ├── Footer.tsx            # Floating footer
│   └── sections/             # Individual section components
│       ├── Resume.tsx
│       ├── WorkExperience.tsx
│       ├── Education.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Hackathons.tsx
│       ├── Certifications.tsx
│       └── Contact.tsx
├── data/
│   └── portfolio.ts          # Portfolio data
├── hooks/
│   └── useActiveSection.ts   # Intersection Observer hook
└── public/                    # Static assets (add your images here)
```

## Customization

### Update Your Information

Edit `data/portfolio.ts` to update:
- Personal information
- Work experience
- Education
- Skills
- Projects
- Hackathons
- Certifications
- Contact information
- Social media links

### Add Profile Image

1. Add your profile image to the `public/` folder
2. Update the `profileImage` path in `data/portfolio.ts`

### Add Resume PDF

1. Add your resume PDF to the `public/` folder
2. Update the resume link in `components/sections/Resume.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Intersection Observer API** - Active section detection

## License

MIT

