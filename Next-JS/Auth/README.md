# Auth Lab — Next.js authentication and email

The auth layer from **AnshRoshan/Learn-Auth-Next**, consolidated and extended inside Learning-JS-TS. This is an independent Next.js/TypeScript app: no Git submodule, remote source import, managed auth provider, or dependency on the former repository. Other projects in this repository are unchanged.

## What you can learn

- Signup with normalized email, server-side validation and bcrypt password hashing.
- SMTP email verification, resending links and requiring verification before login.
- Signed one-day JWT sessions in HTTP-only, SameSite=Lax cookies.
- Server-side authorization for both `/profile` and `/api/users/me`.
- Forgot/reset password using expiring, single-use email tokens stored as hashes.
- Logout and password resets invalidate existing sessions on **all devices**.
- A small UI showing the account lifecycle, form errors, pending states and safe profile data.

**Scope:** credential-based authentication and transactional email. OAuth, MFA, admin authorization, account deletion, email changes and refresh tokens are not implemented. This is a learning example, not a production identity platform.

## Run locally

Requirements: **Node.js 22.12+**, npm, MongoDB, and an SMTP server. Docker Compose is optional for the two local services.

```bash
cd Next-JS/Auth
npm ci
cp .env.example .env.local
openssl rand -hex 32
```

Paste the generated value into `JWT_SECRET` in `.env.local`. Do not commit secrets. Keep `APP_URL=http://localhost:3000` for local development.

Start MongoDB and Mailpit if you have Docker:

```bash
docker compose up -d
npm run dev
```

- Application: http://localhost:3000
- Mailpit inbox: http://localhost:8025 — catches mail locally; no real messages leave your machine.
- Sign up, open the verification email in Mailpit, click the link, and press **Verify email**. Then sign in and inspect your profile.
- Try **Forgot password**, follow the new email, reset the password, and confirm the old session stops working.
- Stop services with `docker compose down`. The MongoDB volume persists; `docker compose down -v` deliberately deletes local accounts.

Without Docker, point `MONGO_URI` at your own MongoDB instance and configure an SMTP provider. Use a **new database**: this project does not migrate existing accounts from the original example.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `MONGO_URI` | MongoDB connection URI; server-only |
| `JWT_SECRET` | High-entropy signing secret, at least 32 characters |
| `APP_URL` | Exact browser origin; used for email links and mutation origin checks |
| `SMTP_HOST`, `SMTP_PORT` | SMTP server; local Mailpit uses port 1025 |
| `SMTP_SECURE` | `true` for implicit TLS, typically port 465; `false` for STARTTLS on 587 or local Mailpit |
| `SMTP_USER`, `SMTP_PASS` | SMTP credentials, if required |
| `MAIL_FROM` | Sender address approved by your provider |

In Arena, set `APP_URL` to the actual HTTPS live-preview origin, not localhost. The dev server binds to `0.0.0.0`, allows `*.e2b.app` dev origins, and all browser API calls are relative. MongoDB/SMTP addresses remain **server-side**; do not expose a database or development inbox publicly. The app can render without services, but account actions require configuration and fail explicitly rather than simulating success.

```bash
npm run build
npm start
```

Production cookies always use `Secure`; run production behind HTTPS. For ordinary HTTP localhost testing use `npm run dev`. Preview HTTPS also gets Secure cookies during development. Restart the app after editing `.env.local`.

## Code tour

```text
src/app/                    Pages and App Router API endpoints
src/components/             Shared account forms and sign-out button
src/db/dbConfig.ts          Cached, awaited MongoDB connection
src/models/userModels.ts    Account schema; secret fields hidden by default
src/helpers/authHandlers.ts Account flow implementations
src/helpers/security.ts     Validation, token hashing, JWTs and cookie options
src/helpers/getDataFromToken.ts  Signature + database session checks
src/helpers/mailer.ts       SMTP verification and recovery mail
src/helpers/rateLimit.ts    Demonstration-only, per-process request limits
```

Read the signup handler → user model → mailer → verify handler → login handler → session helper → profile page, then follow password recovery and logout.

### Endpoints

All writes use JSON and require an `Origin` header equal to `APP_URL`. Browser fetch adds this header automatically. For curl, set it explicitly. There is no GET endpoint that signs out, verifies an email, or resets a password; opening an email link alone does not consume it.

| Method | `/api/users/…` | Body / result |
| --- | --- | --- |
| POST | `signup` | `{ username, email, password }`; sends verification mail |
| POST | `resend-verification` | `{ email }`; replaces the previous verification link |
| POST | `verify-email` | `{ token }`; atomically consumes a valid link |
| POST | `login` | `{ email, password }`; sets cookie, does not return JWT in JSON |
| GET | `me` | Safe current-user fields, or 401 |
| POST | `forgot-password` | `{ email }`; sends recovery mail for verified accounts |
| POST | `reset-password` | `{ token, password }`; resets password and revokes old sessions |
| POST | `logout` | `{}`; invalidates sessions and clears the cookie |

Verification links expire after 60 minutes; reset links after 15 minutes. New links replace old links of the same kind. Passwords require at least 12 characters and at most 72 UTF-8 bytes (bcrypt's limit). Names are display labels, not unique identifiers; email is the account identifier. The original `/profile/[id]` URL redirects to the authenticated user's `/profile`, never to another user's data.

Signup/recovery responses do not return user documents. Recovery and resend normally give the same message for known and unknown accounts, though timing and service errors are not fully enumeration-resistant. If SMTP fails after signup, the unverified account remains: fix SMTP and use **Resend verification**. Sending a new link invalidates the old one even if mail delivery fails.

## Checks

```bash
npm test                  # Database-independent security, HTTP guards and real local SMTP tests
npm run typecheck
npm run build
npm run test:integration   # Full handler lifecycle against ephemeral MongoDB + local SMTP
```

The integration suite downloads a MongoDB binary with `mongodb-memory-server` on its first run. It requires network access to `fastdl.mongodb.org` and a platform supported by MongoDB. In an offline/restricted environment, install a compatible `mongod` and set:

```bash
MONGOMS_SYSTEM_BINARY=/absolute/path/to/mongod npm run test:integration
```

Tests never use your application database or a real email recipient. The integration suite covers signup, duplicate handling, verification/resend, forged sessions, profile field filtering, password reset expiry/replay, revocation, logout and login throttling. SMTP tests capture messages in a temporary local server. These are handler-level tests, not browser E2E tests.

## Security decisions and limits

- No plaintext passwords, JWTs, email links or full user documents are logged by the app. Auth responses use `Cache-Control: no-store`.
- Email token hashes are stored separately from passwords, and conditional database updates consume tokens once. Secret fields are excluded by default; profile queries explicitly allowlist fields.
- JWT verification fixes the signing algorithm, issuer and audience, checks expiry, and compares the database session version. Protection does **not** depend on middleware checking for a cookie's existence.
- Exact-origin checks and SameSite cookies protect browser mutations. Token pages remove the query string after reading it and send `Referrer-Policy: no-referrer`.
- Rate limits are deliberately simple: 10 attempts per action/email or token per 15 minutes (100 for logout), plus a global 500-request process limit. These reset on restart, are not shared across instances, and can be abused to deny service. Replace them with a shared, carefully designed per-IP/account limiter before public deployment. Do not blindly trust proxy headers.
- Before production: add reliable email delivery/retries, sanitized operational logging, abuse monitoring, a shared rate limiter, TLS enforcement for your SMTP provider, appropriate CSP, database index management/backups, and security review. Test account enumeration/timing, concurrency and browser flows. No claim of production readiness is made.

## Consolidation notes

See [MIGRATION.md](./MIGRATION.md) for the source revision, what was retained/reworked, and the deletion checklist. Deleting the old GitHub repository is a separate, manual action; this migration does not delete it.
