# Urban Brain — React Portfolio (MERN Starter)

A responsive, retro-arcade-inspired portfolio interface with reusable React components, project cards, and an Express API. The API exposes project data and accepts contact messages; MongoDB persistence is enabled when `MONGODB_URI` is configured.

## Stack
- React + Vite, React Router
- Node.js + Express
- MongoDB + Mongoose
- Git-ready folder layout and environment examples

## Project definition
**Problem:** A portfolio needs to present projects and contact information clearly across screen sizes.
**Target users:** Visitors/recruiters (view projects and submit a message); developer (maintain project data and the app).
**MVP:** Responsive portfolio, project listing, contact form, API endpoints, server-side validation, environment-based configuration.
**Acceptance criteria:** Project cards render; layout adapts to mobile; invalid contact inputs receive a 400 response; valid messages are saved when MongoDB is configured; API exposes a health endpoint.
**Current limitation:** Authentication/authorization, automated test suites, deployment, and rate limiting are not included in this starter. Configure and test the database before relying on message persistence.

## Structure
- `client/` React UI, reusable components, pages and API client
- `server/src/routes/` endpoint mapping
- `server/src/controllers/` request handling
- `server/src/models/` Mongoose schema
- `server/src/middleware/` error handling
- `.env.example` files document required variables without secrets

## Run locally
Prerequisites: Node.js and npm. A MongoDB local instance or Atlas connection is needed for contact-message persistence.

1. In one terminal:
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit MONGODB_URI and CLIENT_ORIGIN if required
   npm run dev
   ```
2. In a second terminal:
   ```bash
   cd client
   npm install
   cp .env.example .env
   npm run dev
   ```
3. Open the Vite URL shown in the terminal (normally `http://localhost:5173`).
4. Check API health at `http://localhost:5000/api/health`.

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp` if needed.

## API contract
| Method | Path | Purpose | Success | Common errors |
|---|---|---|---|---|
| GET | `/api/health` | Check API status | 200 JSON | 500 |
| GET | `/api/projects` | List project cards | 200 JSON array | 500 |
| POST | `/api/contact` | Validate and save a contact message | 201 JSON | 400 invalid input, 503 database not configured, 500 unexpected error |

## Test checklist
- [ ] Start server and client independently.
- [ ] Load the portfolio at desktop and mobile widths.
- [ ] Confirm `/api/health` returns `status: ok`.
- [ ] Confirm `/api/projects` returns project data.
- [ ] Submit empty/invalid contact form values and verify browser validation/API 400.
- [ ] Configure MongoDB and verify a valid submission is stored.
- [ ] Confirm no real `.env`, secrets, or personal data are committed.
- [ ] Run `npm run build` inside `client`.
- [ ] Verify deployed frontend, API, CORS and HTTPS before claiming deployment.

## Git quick start
```bash
git init
git add .
git commit -m "Initial portfolio project structure"
```
Create feature branches for changes and keep `.env` out of version control.

## Official references
- React: https://react.dev/
- Vite: https://vite.dev/
- Node.js: https://nodejs.org/en/docs
- Express: https://expressjs.com/
- MongoDB: https://www.mongodb.com/docs/
- Mongoose: https://mongoosejs.com/docs/
- Git: https://git-scm.com/doc
