# Portfolia — Portfolio Generator UI

A polished React + Vite starter for a personal portfolio creation portal. The interface includes an overview dashboard, template library and previews, a functional website editor with live preview, editable profile content, project management, color palettes, standalone HTML export, AI assistant chat UI, premium page, settings, sample admin dashboard and a demo sign-in modal.

## Run the app

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (normally `http://localhost:5173`).

## Enable the live AI assistant

The chat interface connects to a small Express backend. Without it, the UI provides a clearly labeled fallback example.

1. Create a `.env` file by copying `.env.example`.
2. Add your API key to `OPENAI_API_KEY` in `.env`. Keep it on the server; never put it in React/Vite client code or commit it.
3. In one terminal run `npm run server`.
4. In another terminal run `npm run dev`.
5. Check `http://localhost:8787/api/health` to confirm the server is running and AI is configured.

The model can be changed with `OPENAI_MODEL` in `.env`. API usage may incur provider charges.

## What is demo-only right now?

This is a front-end starter, not a production SaaS platform yet.

- **Sign-in:** the current form creates a local demo session only. Use a real auth provider (e.g. Auth.js, Clerk, Supabase Auth or Firebase Auth), server-side sessions and protected routes.
- **Profile:** updates live in React state and reset on refresh. Add a database and user ownership rules.
- **Templates:** the included starter designs open in the website editor. Users can edit their name, role, headline, bio, contact email, project cards and colors, then export a standalone `.html` portfolio file. Persistent saves, image uploads and one-click public hosting still need a backend and publishing provider.
- **Premium:** price and upgrade UI are examples only. Connect a payment provider, webhook verification and subscription entitlements before accepting payments.
- **Admin dashboard:** add a role-protected admin area with server-verified permissions, audit logs, and user/template management before launch.
- **Publishing:** connect domain setup, hosting, form handling and abuse protection.

## Suggested next production milestones

1. Add database tables for users, profiles, projects, templates, published sites, subscriptions and AI usage.
2. Implement real authentication and role-based access control (including admin-only routes).
3. Build a template editor with editable sections, live preview and responsive publishing.
4. Add image uploads with validation, storage and moderation.
5. Add AI tools for bios, project case studies, site maps, SEO metadata, color palettes and content feedback.
6. Add rate limits, request validation, usage quotas, monitoring, privacy policy and terms.

## Stack

React, Vite, lucide-react, Express and the OpenAI JavaScript SDK. CSS is custom and responsive.


Latest frontend updates: longer homepage, bottom navigation for Home/Templates/AI Assistant/Premium, and clearer admin labels. Backend, authentication, AI, persistence and payments remain for later integration.
