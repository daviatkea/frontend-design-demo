---
title: Bleeding edge
slug: future
order: 4
---

### Using the newest features responsibly

It’s tempting to ship the shiniest APIs the moment they land. That’s why understanding browser compatibility and progressive enhancement is essential — so early adopters get the upgrade and everyone else still gets a great experience.

### Progressive enhancement as a strategy

Start with a solid baseline that works everywhere, then layer enhancements with `@supports`, capability checks, and sensible fallbacks. Document decisions in code so future contributors know what can be safely removed once support improves.

### Feature detection & fallbacks

Prefer feature detection over UA sniffing and keep fallbacks simple and maintainable. When in doubt, optimize for readability and remove custom code the moment native support is good enough.

### Performance & accessibility first

New doesn’t automatically mean better; test impact on motion sensitivity, color contrast, and input methods. Measure runtime cost and layout stability before and after—ship what helps users, not just what’s possible.
