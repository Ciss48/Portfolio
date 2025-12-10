# Data Analyst Portfolio

A professional, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, minimal design with smooth transitions
- **SEO-Friendly**: Semantic HTML and proper meta tags
- **Type-Safe**: Full TypeScript support
- **Component-Based**: Reusable React components
- **Content-Driven**: Easy to update via data files

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add placeholder images:
   - Place a profile photo at `public/images/profile.jpg`
   - Add project cover images:
     - `public/images/project-churn.jpg`
     - `public/images/project-dashboard.jpg`
     - `public/images/project-abtest.jpg`
     - `public/images/project-segmentation.jpg`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /page.tsx          # Main page component
  /layout.tsx        # Root layout
  /globals.css       # Global styles

/components
  /Hero.tsx          # Hero/Intro section
  /Experience.tsx    # Experience section
  /Certifications.tsx # Certifications section
  /Projects.tsx      # Projects section with modal

/data
  /experience.ts     # Experience data
  /certifications.ts # Certifications data
  /projects.ts       # Projects data

/public
  /images           # Image assets
```

## Customization

### Update Content

1. **Personal Information**: Edit `components/Hero.tsx` to update name, title, and bio
2. **Experience**: Modify `data/experience.ts` to add/update work experience
3. **Certifications**: Update `data/certifications.ts` with your certifications
4. **Projects**: Edit `data/projects.ts` to showcase your projects

### Styling

The project uses Tailwind CSS. You can customize colors, spacing, and other design tokens in `tailwind.config.ts`.

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

The project will automatically build and deploy.

## Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## License

MIT

