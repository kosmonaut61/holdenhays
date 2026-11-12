# Portfolio dark-mode section refresh

Local candidate on top of production 9f1dce4. Not published.

- Spectral dark mode across home, case studies, About and project gallery.
- Full-viewport dither hero preserves the approved name/subtitle and uncluttered entrance.
- Actual Bildpunkt createSectionCard / createSectionStack below the hero: Work, Play, About, Contact. Existing content and project links retained.
- Shared complete dev41 package, with neutral TW Glass and all eighteen palettes. No partial token copying.
- Native keyboard activation, Close, Escape, hash deep links and browser history; no-JavaScript fallback keeps content readable.
- Production build, lint, TypeScript and diff checks pass.
- Chrome and WebKit at 390 and 1280 pixels: all four panels, close/focus, Enter/Space, Back/Forward, native hash and fresh-page links, dark detail routes, overflow and runtime errors pass.
- Normal-motion interruption, resize, hero pause and ten rapid Escape-to-next-card cycles pass.
- Independent review found no release blocker. A programmatic hash mutation within the same immediate tick as Next history updates can race; normal user click/keyboard and settled hash routes pass. No arbitrary runtime delay added.

Preview: http://127.0.0.1:3419/
QA scripts/screenshots: qa/dark-sections (local, not included in release).
