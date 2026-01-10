# CrimsonFX Setup Instructions

## Overview

This is a monorepo structure for the CrimsonFX trading platform website built with Next.js, TypeScript, and Tailwind CSS.

## Installation

1. Install dependencies from the root:
```bash
npm install
```

This will install dependencies for all workspaces (apps/web and packages/*).

## Development

Run the development server:
```bash
npm run dev
```

This will start the Next.js development server at `http://localhost:3000`.

## Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Font Configuration

**Note:** The design calls for "General Sans" as the body font, but this font is not available on Google Fonts. The current implementation uses **Inter** as a substitute, which is visually similar.

To use General Sans (if you have a license), you can:
1. Add General Sans font files to `apps/web/public/fonts/`
2. Update `apps/web/app/globals.css` to include a `@font-face` declaration
3. Update the font-family in `tailwind.config.ts` to reference General Sans

## Project Structure

```
CrimsonFX/
├── apps/
│   └── web/              # Next.js frontend application
├── packages/
│   ├── ui/               # Shared UI components (shadcn-based)
│   ├── config/           # Shared configurations
│   ├── utils/            # Shared utilities
│   └── types/            # Shared TypeScript types
├── package.json          # Root workspace configuration
└── README.md
```

## Key Features

- ✅ Monorepo structure
- ✅ Next.js 14 (App Router)
- ✅ TypeScript (strict mode)
- ✅ Tailwind CSS with custom design system
- ✅ shadcn/ui component architecture
- ✅ Responsive design (mobile-first)
- ✅ All required pages and sections
- ✅ Broker-style navigation and footer
- ✅ Scarlet Red (#BB0000) primary color
- ✅ Typography: Archivo (headings), Inter (body), Poppins (numbers)

## Design System

- **Primary Color**: #BB0000 (Scarlet Red)
- **Background**: White
- **Text**: Black
- **Typography**: 
  - Headings: Archivo (Semibold)
  - Body: Inter (Regular/Medium) - *General Sans can be added as custom font*
  - Numbers: Poppins (Medium)

## Next Steps

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Customize content as needed
4. Add General Sans font if you have a license
5. Configure environment variables if needed
6. Set up deployment pipeline

