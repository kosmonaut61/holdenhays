# Portfolio refresh — November 10, 2026

Local candidate, not published. Source: kosmonaut61/holdenhays main.

## Implemented
- Homepage provides direct paths to professional case studies, About, contact, and Play & projects.
- Mobile-visible labeled navigation replaces the homepage's hidden dot-only sidebar.
- Actual Bildpunkt dev34 tokens, buttons, cards, bundled font and treatments, vendored reproducibly. dev35 is not silently adopted.
- Games and Tonewedge have direct project links; three empty Coming Soon cards removed. Existing Flamework description/art retained. Existing career and case-study data unchanged.
- Fixed pre-existing duplicate JSX attribute and unused imports of nonexistent modules. Removed ignored TypeScript errors from build settings.
- Removed unused build-time Google font dependency and unused homepage smooth-scroll wrapper. Existing legacy-page fonts and content retained.
- Explicit npm install/build commands avoid the existing stale pnpm lock selecting the wrong package manager. Legacy peer resolution is necessary for the repository's existing Next canary and analytics combination.

## Validation
- TypeScript and production build pass.
- Existing lint script cannot run: ESLint is not installed/configured in original repository.
- npm reports 9 existing dependency vulnerabilities (1 moderate, 8 high); dependency remediation is a separate follow-up, not silently forced through breaking upgrades.
- Browser evidence recorded in qa/. Public project destinations should be individually checked before publishing. No claims of production deployment.

## Content audit follow-up
- Confirm existing case study business metrics remain current and suitable for public display. No metrics were invented or changed.
- About retains source titles and date ranges; verify current title/dates with Holden before calling the career content fully current.
- Legacy About/case-study pages retain their existing detailed presentation; shared navigation/component migration across those is next.
- New game links use confirmed user/project URLs, but descriptions deliberately make no invented gameplay claims.

## Follow-up completed
- About and case-study navigation, typography, content cards and actions now share Bildpunkt. Detailed source content preserved.
- Dead resume download (`href="#"`, no PDF present) replaced with an honest email resume request.
- Removed approximate tenure durations, retained actual source date ranges. No guesses about current role titles.
- Reduced-motion preference respected by profile/highlight effects; highlight content is visible without JS animation.
- Upgraded Next 16.1 canary to stable 16.4.6 according to audit remediation; removed unused vulnerable zod/resolver dependencies; compatible transitive updates applied.
- ESLint is installed/configured on supported current release. Lint warnings fixed without disabling the reported rules. Lint and TypeScript pass.
- Production dependency audit: ZERO vulnerabilities. Remaining moderate advisories are development lint-tool dependency chains, documented in qa/audit-all.json; no forced major transitive override.
- Domain verified: https://www.holdenhays.com returns 200, matches source metadata. The spoken spelling holdenhaze.com fails DNS; do not change the existing identity/domain automatically.
- All eight linked project URLs and existing Fretlings website returned 200 (qa/destinations.json).

## Decisions needed before claiming fully current/job-ready
1. A real current resume PDF, if a download is desired. Until then the request action works honestly.
2. Confirm source titles and current date ranges, especially Emerge's “Director of Marketing and Design” and Fullbay's “Manager of Product Department”. Do not replace with different remembered titles without evidence.
3. Confirm ProcureOS public business metrics and approval to continue publishing them: approximately $20K vs $436K account value, 22x directional uplift, and a separate 20% new-customer ticket-price change. The arithmetic ratio is internally consistent, but the repo contains no underlying invoice/board-deck evidence. Existing monthly subscription chart ends March 2026; no newer figures supplied.
4. Publication approval for this portfolio candidate. Nothing pushed or deployed.

## User-confirmed attribution
Holden explicitly confirmed on November 10, 2026: “You don't need to do more investigation on the link between the Fullbay thing. I know that that's the project. So I just wanted to make sure that that was mostly up to date”. Added Fullbay company attribution to Inventory & Part Management's homepage card and case-study heading. No dates, role claims, outcomes or metrics changed. No further attribution research needed.
