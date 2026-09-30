# Collins Kipruto · Developer Portfolio

A GitHub-powered portfolio for [@Collo006](https://github.com/Collo006). It reads the public GitHub profile and repository list, highlights selected projects, and provides searchable repository cards.

## Featured projects

- **[Chachas-Bakery](https://github.com/Collo006/Chachas-Bakery)** — Go repository for a bakery management and online ordering system. Its README describes inventory, products, orders, payments, and business reporting.
- **[Pre-Inspected-Used-Cars](https://github.com/Collo006/Pre-Inspected-Used-Cars)** — responsive used-car and motorbike browsing application; its README lists React, Next.js, TypeScript, and Tailwind CSS.
- **[Parking-Lot-System](https://github.com/Collo006/Parking-Lot-System)** — collaborative parking discovery and management project.
- **[raytracer](https://github.com/Collo006/raytracer)** — Go ray-tracing project that writes a PPM image.

Profile details, repository metadata, and any public email or location are taken from GitHub. Details that are not published there are intentionally not guessed.

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

The development server runs the Vite-powered application through `server.ts`. To create a production build:

```sh
npm run build
```

## GitHub API

The app uses the unauthenticated GitHub REST API by default. A personal access token can be provided in the GitHub sync dialog to increase API rate limits. The token is saved in browser local storage.

## Tech stack

- React, TypeScript, and Vite
- Tailwind CSS
- GitHub REST API
- Express server
