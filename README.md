# Lightfolios — A simple, data-driven Next.js portfolio

Lightfolios is a compact portfolio starter built with Next.js (app router) and motion-enabled components. It’s designed so you can personalize content from a single data file and swap templates in `components/versions/`.

Why use this starter?

- Edit site content from one place: `lib/data.ts`.
- Motion-ready UI: components are prepared for Framer Motion transitions.
- Easy to add templates: each template lives under `components/versions/<name>`.

Quick start

Requirements: Node 18+ and a package manager (`npm`, `pnpm`, or `yarn`).

Install and run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

Personalize the site

- Open `lib/data.ts` and update the exported values (hero text, projects, experience, social links, etc.). Components read from this file — no need to edit individual pages to change copy or add items.
- If you prefer an example to start from, use `lib/data.example.ts` (included) — copy it to `lib/data.ts` and edit.

Templates and structure

- Templates live in `components/versions/`. The current example is `components/versions/one`.
- To add a new template: copy an existing version folder, update its main export (e.g., `PortfolioOne.tsx`), and point `app/page.tsx` or `app/layout.tsx` to your new component to preview it.

Animations

- Components use Framer Motion (`motion.div`) for transitions. Tweak animation variants and timing inside component files.

Contact handling

- Server-side contact logic is in `actions/sendContactEmail.ts`. This starter includes an example Resend setup — there is a `.example.env` showing the variables used for the contact form. Set the following environment variables (copy `.example.env` to `.env.local` and fill values, or configure them in your host):
  - `RESEND_API_KEY` — your Resend API key
  - `CONTACT_FROM_EMAIL` — the from identity used in outgoing messages
  - `CONTACT_TO_EMAIL` — the email that will receive contact submissions

- To use a different provider, edit `actions/sendContactEmail.ts` to replace the Resend-specific logic.

Deploy

- Recommended: Vercel — connect the repository and deploy; Next.js is supported out of the box.

Contributing

- Add new templates under `components/versions/` and open a PR. Keep templates self-contained and prefer reading copy from `lib/data.ts`.

License

- MIT — free to use and adapt.

## 🌟 Showcase

Built something with Lightfolios? Open a PR and add your link here!

- [Akshat Mahadeva](https://akshatmahadeva.com)
- Akshat Mahadeva
