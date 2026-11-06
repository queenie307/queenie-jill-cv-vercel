# Guide: Run, Commit and Deploy (Profile 3)

You can delete this file before submission; the site does not use it.

## 1. Put the project in place (Zorin OS, VS Code)

1. Unzip `personal-cv-profile3.zip`. You get a folder named `personal-cv-profile3`.
2. Open VS Code, choose **File → Open Folder**, and select that folder.
3. Open the terminal with Ctrl + `. Check you are in the right place:

```bash
pwd          # should end with /personal-cv-profile3
ls -a        # should show package.json, src, public, .gitignore
```

If you are creating files by hand instead, make the folders first:

```bash
mkdir -p personal-cv-profile3/src/components personal-cv-profile3/src/hooks personal-cv-profile3/src/data personal-cv-profile3/public/images
```

## 2. Install and run

Requires Node.js LTS (20 or 22). Check with `node -v`.

```bash
npm install
npm run dev       # open the address shown, usually http://localhost:5173
npm run build     # must finish without errors
npm run preview   # optional: preview the built site
```

## 3. Add your three images

Follow "Adding the Three Images" in `README.md`. Files go in `public/images/`; paths in `src/data/content.ts` change from `null` to `"/images/filename.jpg"`.

## 4. Create the dedicated GitHub repository

1. Sign in to GitHub as **queenie307**.
2. Go to https://github.com/new. Name it, for example, `personal-cv`. Choose **Public**. Do not add a README or .gitignore (the project has them).
3. Check you are in the project folder and that `.gitignore` exists:

```bash
pwd
cat .gitignore     # should list node_modules, dist, *.tsbuildinfo, .env*, .vercel
```

## 5. Git identity vs GitHub login

These are two different things.
- **Git author identity** (name and email) is written into each commit. Set it for this repository only, not globally:

```bash
git init
git config --local user.name "Queenie Jill D. Sumalinog"
git config --local user.email "your-github-email@example.com"
git config --local --list | grep user     # confirm it is saved locally
```

Use the email on your GitHub account (or your GitHub no-reply address) so commits link to your profile.
- **GitHub authentication** decides whether you are allowed to push. It uses your GitHub login via a personal access token or a credential helper. Setting `user.name` does not log you in.

## 6. Commit genuine stages

Commit each stage when it really works and you have run `npm run build`. Do not invent history or make empty commits.

| # | Stage | Files | Sample message |
|---|-------|-------|----------------|
| 1 | Project setup | package.json, tsconfig.json, vite.config.ts, index.html, .gitignore, public/favicon.svg, src/vite-env.d.ts | `chore: set up Vite React TypeScript project` |
| 2 | Content and structure | src/data/content.ts, src/main.tsx, src/App.tsx, src/components/Section.tsx | `feat: add CV content data and page sections` |
| 3 | Navigation and hero | Header.tsx, Hero.tsx, useActiveSection.ts | `feat: add sticky navigation and hero` |
| 4 | Projects and image slots | ProjectCard.tsx, ImageSlot.tsx | `feat: add project cards and image placeholders` |
| 5 | Styling and motion | src/styles.css, Reveal.tsx, useReveal.ts | `style: add purple theme, responsive layout and reveal` |
| 6 | Documentation | README.md, GUIDE.md | `docs: add README and setup instructions` |
| 7 | Real photos | public/images/*, src/data/content.ts | `feat: add profile and project images` |
| 8 | Live link | README.md | `docs: add live Vercel URL` |

For each stage:

```bash
git add <the files for that stage>
git status                  # review what is staged
git diff --staged --stat    # no node_modules, dist or .env files should appear
git commit -m "your message"
```

## 7. Push

After the first commit:

```bash
git branch -M main
git remote add origin https://github.com/queenie307/personal-cv.git
git push -u origin main
```

Use your repository's real name in the URL. Later pushes are just `git push`. Never push secrets, `.env` files or `node_modules`.

## 8. Deploy on Vercel

Publishing needs you to sign in to Vercel yourself.

1. In Vercel choose **Add New → Project** and import `queenie307/personal-cv`.
2. Framework Preset **Vite**, Root Directory `./`, Build Command `npm run build`, Output Directory `dist`.
3. Click **Deploy**.
4. Copy the live URL (ends in `.vercel.app`), put it in `README.md`, commit and push.

Verify the public site by opening the URL in an **incognito/private window** (not signed in to Vercel) and checking that all sections, images and links work.

Submit two links: the live Vercel website and the GitHub repository.

## 9. Final checks

- [ ] `npm run build` passes
- [ ] Every nav link scrolls to its section; mobile menu opens, closes, and Escape works
- [ ] Tab through the page: skip link first, focus outlines visible
- [ ] No horizontal scrollbar at about 375px, 768px and 1280px widths
- [ ] Reduce-motion on: content still appears, no animation
- [ ] GitHub link opens; email and phone links work on a phone
- [ ] Only three image slots exist; all three replaced with real photos and new alt text
- [ ] README has the real live URL and repository link
