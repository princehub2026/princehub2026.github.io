# Yakubu Law — Website (First Draft)

This is the source code for the Yakubu Law website, built with Astro 5 + Tailwind CSS v4.

## How to open this on your computer

1. Install Node.js (v18 or newer) from https://nodejs.org if you don't already have it.
2. Unzip this folder anywhere on your computer.
3. Open a terminal in this folder and run:
   npm install
4. To preview the site locally:
   npm run dev
   Then open http://localhost:4321 in your browser.
5. To build the production-ready static files (what actually gets uploaded to a host):
   npm run build
   The finished site will appear in the `dist/` folder — that folder is what gets deployed.

## Bringing this back to Claude for edits

Just re-attach this whole folder (as a zip, or individual files) in a Claude conversation and ask for the changes you want. Claude can pick up editing from exactly where this left off.

## Current status / known placeholders

- Photos: all images are custom-made navy/gold branded placeholder graphics, not real stock photos (see note from Claude below).
- Contact form: built and styled, but not wired to send anywhere yet (no backend connected).
- Counties: Bucks County is fully built out (18 real MDJ court pages with judge/address/phone). Chester, Delaware, and Montgomery are "coming soon" placeholder pages. Philadelphia has a single simplified page (Municipal Court, no MDJ tree).
- About page: has a few bracketed placeholder blanks (e.g. law school, bar admission year) waiting on real bio details.
- Office address and firm email: placeholders — not yet finalized.
- Police department / jail listings on court and county pages: placeholder text, pending data.
- `<meta name="robots" content="noindex">` is set in the site header (`src/layouts/BaseLayout.astro`) so search engines won't index this draft. Remove it before the real public launch.
- Domain is not yet connected — this is currently a local project only.
