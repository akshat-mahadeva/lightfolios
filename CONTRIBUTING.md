# Contributing

Thanks for wanting to contribute — this repo is structured to make adding templates and content straightforward.

Quick guide

- Templates: add a new folder under `components/versions/<your-name>`.
  - Include a main export (e.g. `PortfolioMyTemplate.tsx`) and a `pages/` folder for section components.
  - Keep the template self-contained: sections should read data from `lib/data.ts` and render UI only.
- Wiring: to preview your template locally, open `app/page.tsx` or `app/layout.tsx` and replace the imported template component with your new template's main export.
- Data: site text and content live in `lib/data.ts`. Provide defaults there; users will edit this file to personalize the site.
- Animations: motion code uses `motion` (look for `motion.div` in components). Keep variants and transitions inside components for clarity.

PR checklist

- [ ] New template added under `components/versions/<name>` and builds without errors.
- [ ] Uses `lib/data.ts` for text/content (no hard-coded strings where possible).
- [ ] Keep CSS/ styles scoped to the template or use existing utility classes.
- [ ] Add short README or notes inside your template folder if it requires special setup.

Testing locally

1. Install deps: `npm install`
2. Start dev server: `npm run dev`
3. Visit `http://localhost:3000` and confirm your template renders and sections look correct.

Thanks — maintainers will review and give feedback on PRs.
