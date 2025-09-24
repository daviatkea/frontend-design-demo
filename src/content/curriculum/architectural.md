---
title: Architectural foundations
slug: architectural
order: 1
---

### Another look at the cascade

Understanding the core concepts of the cascade is essential to mastering modern UI development. We’ll revisit specificity, inheritance, and source order with today’s tools in mind, so your styles remain predictable even as codebases grow.

### Cascade layers

`@layer` gives us a predictable hierarchy — base → components → utilities — so conflicts are solved structurally rather than with `!important`. We’ll place rules intentionally to keep overrides obvious and safe.

### :has()

`:has()` unlocks parent-aware styling and stateful UI patterns without extra utility classes. We’ll use it for validation states, toggle-driven layouts, and component “context” styling, while noting performance and sensible fallbacks.

### Nesting

Nesting can improve readability when used with discipline. We’ll set guardrails to avoid creeping specificity and deep DOM coupling, keeping nested rules shallow and component-focused.
