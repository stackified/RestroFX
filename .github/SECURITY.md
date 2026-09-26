# Security Policy

## Supported versions

This is the marketing website for Restro FX, built and maintained by Stackified. Only the latest
version on the `main` branch is maintained.

| Version | Supported |
|---------|:---------:|
| Latest (`main`) | Yes |
| Older commits | No |

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

Instead, use GitHub's private reporting:

1. Go to the [Security tab](https://github.com/stackified/RestroFX/security).
2. Click **Report a vulnerability**.
3. Describe the issue, steps to reproduce, and potential impact.

You can expect an acknowledgement within a few days. Thank you for helping keep the project safe.

## Notes on this project

The site is a Next.js app built as a static export (`output: 'export'`), so it runs entirely in
the browser. This repository has no server runtime, no API routes, no database and no
authentication. The contact and demo forms on the site do not send data to any server from
this codebase.

Account login, registration, deposits and trading all happen on the separate Restro FX client
portal (`portal.restrofx.com`). The `/login` and `/register` pages only redirect there, and the
portal is not part of this repository. Problems with the portal itself are outside the scope of
this repository; please raise them with Restro FX directly.

The pages load third-party scripts and embeds: Google Tag Manager, Google Analytics 4, the Meta
Pixel, and YouTube video embeds. The only environment variables are build-time base path settings,
and the deploy workflow uses the built-in `GITHUB_TOKEN`; no other secrets are stored in the
repository. The JavaScript and TypeScript code is scanned by CodeQL on every push.
