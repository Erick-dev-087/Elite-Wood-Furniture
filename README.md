This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Brand and hero assets

`public/images/Logo.jpg` is an unchanged copy of `../Media/Logo.jpg`, used by
the header, mobile menu, and footer. The existing `src/app/favicon.ico`
already contains the same logo.

The hero uses three continuous photographs from `Media`, exported as WebP:

| Hero asset | Source |
| --- | --- |
| `hero-showroom.webp` | `Elite_Wood_Furniture.jpg` |
| `hero-sofas.webp` | `Screenshot 2026-10-28 144125.png` |
| `hero-dining.webp` | `Screenshot 2026-10-28 144227.png` (bottom promotional strip cropped) |

Slides crossfade and zoom slowly, with manual navigation and a pause control.
Rotation pauses during hover, keyboard interaction, and when the tab is hidden.
Reduced-motion preferences disable rotation and image zoom.

## Cushion page transition

`PageTransition.tsx` and `TransitionLink.tsx` implement design section 13.4
using React 19.3 view transitions and a decorative SVG cushion. Header links,
footer quick links, logo links, and hero actions opt in between Home, Shop,
Our Story, Delivery, and Contact. Navigation starts immediately; the cushion
travels left to right for 580 ms when the next page commits. A manual popover
keeps it above the browser snapshots without taking focus or capturing input.

A 12-second cooldown uses a 160 ms fade for repeated major navigation. Product,
category, bag, query, hash, and same-page links use normal routing. Reduced
motion and unsupported browsers retain normal navigation. No extra animation
dependency is required. The transition is isolated from product and bag logic.

Before release, preview on desktop and mobile:

1. Navigate from Home to Our Story and confirm the cushion and page reveal align.
2. Immediately choose Shop and confirm the short fade replaces the cushion.
3. Open a product, use the bag, and navigate back; confirm normal routing.
4. Turn on reduced motion and confirm the cushion, slide rotation, and zoom stop.
5. Check all three hero slides and controls at 320 px, 390 px, and desktop widths.

Validation in the restricted workspace: ESLint and standalone TypeScript checks
passed. Turbopack compiled with temporary offline font responses, but completing
the build was blocked by `spawn EPERM`. A normal build also needs access to
Google Fonts. Chrome could not launch under the workspace permissions, so the
device and animation checks above still need a browser run.
