# Consolidation from Learn-Auth-Next

Source: `AnshRoshan/Learn-Auth-Next`, main revision `88aae594ec041b2a7be19e9a95bd715e56e4c8a1`, inspected on 2026-09-28.

Destination: `Learning-JS-TS/Next-JS/Auth`.

This is an auth-focused adaptation, not a Git-history archive. All source required to run the new auth example is committed here; it does not fetch or import anything from the old repository at runtime or install time.

## Retained and reworked

- Next.js App Router / TypeScript structure, MongoDB/Mongoose storage, bcrypt password hashing, JWT cookie sessions, and Nodemailer SMTP delivery.
- The `/api/users/signup`, `login`, `logout`, and `me` endpoint concepts, plus signup/login/profile pages.
- The user model, database connection and token helper have been rewritten to await connections, hide secrets, validate sessions and support revocation.
- `/profile/[id]` is retained as a redirect to the current authenticated profile. Client-provided IDs do not authorize access.

## Completed or corrected

The source's verification-email call was a placeholder; it had no mailer or recovery/verification endpoints. This project adds those flows and their UI, setup instructions, SMTP tests and MongoDB integration tests.

Other corrections include removing credential/user logging, removing password hashes and JWTs from JSON responses, correcting cookie lifetime units (seconds), adding secure/SameSite cookie options, checking session signatures server-side, normalizing/validating input and changing logout from GET to POST.

The original generic starter README, placeholder Intro page, random external profile image, starter SVGs, duplicated profile UI, middleware that only checked cookie presence, Tailwind/DaisyUI setup and old pnpm lockfile were not retained. The new auth-only UI uses plain CSS and the app has its own npm lockfile. Unused dependencies and self-assigned role concepts were removed; no admin authorization is claimed.

## Before deleting the old repository

1. Review this folder and test the account lifecycle with your MongoDB and SMTP settings.
2. Save/push this Learning-JS-TS branch so the code is on GitHub, not just in this checkout.
3. If you need the old Git history, issues, releases or deployment settings, archive them separately. This consolidation does not preserve them or migrate existing databases/accounts/secrets.
4. Update any deployments/bookmarks to point at `Learning-JS-TS/Next-JS/Auth`.
5. Delete the old repository yourself only after you are satisfied. No GitHub repository has been deleted by this change.
