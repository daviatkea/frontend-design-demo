---
title: The new responsive
slug: new-responsive
order: 2
---

### Container queries

Design components that respond to their container, not the viewport. Container queries let cards, navs, and media blocks adapt intelligently wherever they’re placed.

### :has()

`:has()` doubles as a “responsive to content” tool: adapt a component when it contains images, long text, or a certain control. That means fewer special-case classes and more self-aware UI.

### Dynamic viewport units

Dynamic units (`dvh`) track the usable viewport amid browser UI changes, especially on mobile. They stabilize full-height sections and avoid content jumps.

### Wide-gamut color spaces

Modern displays support richer color — CSS can too. Using wide-gamut spaces lifts brand vibrancy while remaining backward compatible through sensible fallbacks.

### color-mix()

`color-mix()` lets you derive tints, shades, and semantic states from a single brand base, keeping palettes consistent. It’s powerful for theming and on-the-fly contrast adjustments.

### System variables (accent-color)

`accent-color` ties native controls into your theme with minimal code. It improves cohesion quickly, especially for forms, while preserving platform accessibility defaults.

### User preference queries

Preferences like `prefers-reduced-motion` and `prefers-color-scheme` let users’ needs drive presentation. Respecting them builds trust and keeps experiences inclusive by default.

### Theming with light-dark()

The `light-dark()` function makes it easy to define a single color that adapts automatically to light or dark mode. Instead of duplicating CSS or writing long preference queries, you provide two values — one for light, one for dark — and let the browser pick the right one. Combined with custom properties, this keeps themes compact and consistent.
