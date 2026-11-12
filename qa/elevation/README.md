# Card hierarchy correction

The owner's screenshot shows cards whose fill matches the surrounding open sheet, with a bright isolated top rim. Two portfolio overrides caused this: child background forced to --tw-case-light (now equal to glass), and a white inset shadow. The shared library also lacked a distinct opt-in nested surface level.

This correction adopts Bildpunkt's tested semantic canvas/sheet/card/raised roles, removes host styling that bypassed those roles, and declares content cards at card elevation. Optical hero/sheet glass, project content and navigation are unchanged.

Final validation: Bildpunkt dev42 package SHA256 7f3738304bf75f5ede4a3302d08afb9179f8f58ad1757f2b8f6fd71f50219c22. ESLint, TypeScript and production build pass. Chrome and WebKit pass at 390/1280px, light/dark. Card fill is lighter than sheet in all cases, full subtle edge and depth shadows present. Dark text/muted contrast 8.06/5.66; light 14.26/7.22. Section keyboard, focus, back/forward, route and no-overflow checks pass. Visual mobile screenshot reviewed. No theme, content or navigation changes.
