# Personal CV Website (Profile 3)

A calm, minimal personal CV website for **Queenie Jill D. Sumalinog**, a fourth-year Bachelor of Science in Information Technology student at Davao del Norte State College in Panabo City, Philippines. Built for the System Integration and Architecture course.

## Live Website

ADD AFTER DEPLOYMENT (paste the public Vercel URL here)

## GitHub Repository

ADD AFTER CREATING THE REPOSITORY (the repository will be under https://github.com/queenie307/)

## Owner

- Name: Queenie Jill D. Sumalinog
- Email: queeniejillsumalinog@gmail.com
- GitHub: https://github.com/queenie307/

## Technology Stack

- React 18 + TypeScript
- Vite 5
- Plain CSS (no UI library, no paid API, no secret keys)
- Vercel for hosting

These are the tools used to build this website, not a claim about other skills.

## Features

- Profile, about, education with academic honors, skills, two projects, achievements, experience, GitHub and contact
- Sticky navigation with active-section highlight and a mobile menu
- Card layouts with subtle hover lift and scroll-reveal animation
- Responsive from phone to desktop, with no horizontal scrolling
- Keyboard accessible: skip link, visible focus states, semantic HTML, real `mailto:` and `tel:` links
- Respects the "reduce motion" setting

## Setup (Zorin OS / VS Code)

Requires a current Node.js LTS release (20 or 22) and npm. Check with `node -v` and `npm -v`.

```bash
cd personal-cv-profile3
npm install
npm run dev        # development server, usually http://localhost:5173
npm run build      # type-checks and builds into dist/
npm run preview    # preview the production build locally
```

## Editing Content

Everything is in **`src/data/content.ts`**: text, honors, skills, projects, links and image paths. Components do not need to change. The full home address is kept in the data file but only San Vicente, Panabo City is shown on the site.

## Adding the Three Images

Only three images exist on this site: the **profile photo**, the **coral reef capstone preview** and the **Prime Venture preview**.

1. Copy your files into `public/images/` using these names:
   - `profile.jpg`
   - `coral-reef-project.jpg`
   - `prime-venture-project.jpg`
2. Open `src/data/content.ts` and change `src: null` to the matching path:
   - `profile.photo` → `src: "/images/profile.jpg"`
   - first project → `src: "/images/coral-reef-project.jpg"`
   - second project → `src: "/images/prime-venture-project.jpg"`
3. Rewrite each `alt` to describe the real picture.
4. Adjust framing with `objectFit` (`"cover"` or `"contain"`) and `objectPosition` (e.g. `"center top"`).

Tip: keep each image under 500 KB. A square photo works best for the profile.

## Links

No project, LinkedIn or Facebook URLs were supplied, so they are shown as plain, non-clickable text. When you have a real URL, add it in `content.ts` and render it as a link in the matching component.

## Deployment

See `GUIDE.md`. Vercel settings: Framework **Vite**, Root Directory `./`, Build Command `npm run build`, Output Directory `dist`.

## Project Structure

```
personal-cv-profile3/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── public/
│   ├── favicon.svg
│   └── images/README.txt
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles.css
    ├── vite-env.d.ts
    ├── data/content.ts
    ├── hooks/ (useReveal.ts, useActiveSection.ts)
    └── components/ (Header, Hero, Section, ProjectCard, ImageSlot, Reveal)
```
