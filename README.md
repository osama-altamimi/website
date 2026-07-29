<p align="center">
  <img alt="header" src="https://shieldcn.dev/header/gradient.svg?title=Osama+AL-Tamimi&amp;subtitle=My+personal+portfolio+website&amp;width=1000&amp;mode=dark" />
</p>

<p align="center">
  <a href="https://github.com/osama-altamimi/website"><img alt="license" src="https://shieldcn.dev/github/osama-altamimi/website/license.svg?split=true" /></a>
  <a href="https://github.com/osama-altamimi/website"><img alt="repo views" src="https://shieldcn.dev/views/repo/osama-altamimi/website.svg?split=true" /></a>
</p>

## 📙 Overview

My personal portfolio website, built with Next.js, TypeScript, and Tailwind CSS.

🌐 **Visit Website:** [ousama.dev](https://ousama.dev)

## ✨ Features

- 🌓 Light & dark mode support
- 🕐 Live clock
- 📋 One-click copy button for contact info
- 📱 PWA-ready manifest (installable as an app)
- 🔍 SEO optimized (sitemap, robots.txt, Open Graph)
- 🎨 Smooth animations powered by Framer Motion

## 🛠️ Tech Stack

- ⚡ **Next.js 16** (App Router + Turbopack)
- ⚛️ **React 19**
- 🔷 **TypeScript**
- 🎨 **Tailwind CSS 4**
- 🧩 **shadcn/ui** + **Base UI**
- 📦 **pnpm** as package manager

## 🚀 Getting Started

### Prerequisites

- Node.js 24 or later
- pnpm (auto-enabled via Corepack)

### Setup

```bash
# Clone the repository
git clone https://github.com/osama-altamimi/website.git
cd website

# Enable pnpm
corepack enable pnpm

# Install dependencies
pnpm install

# Run the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

### Other commands

```bash
pnpm build   # 🏗️ Build for production
pnpm start   # ▶️ Start the production build
pnpm lint    # 🔍 Lint the code with ESLint
```

## 🐳 Running with Docker

The project includes a multi-stage `Dockerfile` that builds an optimized production image using Next.js' `standalone` output mode.

```bash
# Build the image
docker build -t website:latest .

# Run the container
docker run -d --name website -p 3000:3000 website:latest
```

The site will be available at [http://localhost:3000](http://localhost:3000). ✅

## ⚙️ CI/CD

This project uses **GitHub Actions** with a **self-hosted runner** for automatic deployment. 🤖

On every push to `main`:

1. 🏗️ A new Docker image is built
2. ☁️ The image is pushed to **GitHub Container Registry (GHCR)**, keeping only the last 10 versions
3. 🔄 The old container is stopped and a new one is started with the updated image
4. 🧹 Old local images are automatically cleaned up

Full setup available in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## 📁 Project Structure

```
.
├── public/
│   ├── assets/               # General assets (avatar, og image)
│   └── logo/                 # Site logos
│
├── src/
│   ├── app/                   # Next.js App Router pages & routes
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── manifest.ts
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── sections/          # Page sections (intro, skills, contact, footer...)
│   │   ├── theme/             # Theme provider & dark/light toggle
│   │   ├── ui/                # Shared UI components (shadcn/ui + Base UI)
│   │   │   └── animations/    # Motion components & variants
│   │   ├── copy-button.tsx
│   │   └── live-clock.tsx
│   │
│   ├── config/                 # Static config (metadata, site, skills, socials)
│   ├── fonts/                   # Custom fonts
│   ├── hooks/                    # Custom React hooks (useCopy...)
│   └── lib/                       # Shared utilities (utils, technologies, fonts)
│
├── Dockerfile              # Production image build (multi-stage)
├── .dockerignore            # Files excluded from the Docker build context
├── next.config.ts             # Next.js config (incl. standalone output)
└── .github/workflows/          # CI/CD configuration
```

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details. ⚖️
