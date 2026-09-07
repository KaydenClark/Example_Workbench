# Visual Design Reference

**Last reviewed:** 2026-09-06  
**Status:** active, adapted for terminal output  
**Use when:** starting a new UI, dashboard, site, game menu, or visual project unless the project has a stronger brand guide. In this room the only visual surface is the console output of `tour.mjs`; see "This Room's Adaptation" below.

This is a reusable default color palette for dark-mode interfaces. Treat it as a starting point, then adapt it to the product's brand, audience, and domain.

## Authority

Use this order when design guidance conflicts:

1. Current user request.
2. Project-specific design docs, screenshots, or brand requirements.
3. This default visual design reference.
4. Generic framework defaults.

## This Room's Adaptation

The product prints plain text to a terminal. No colors are required and none are emitted: the palette below is kept as the inherited default for any future UI surface, and is unused today.

Typography of console output, as implemented in `tour.mjs`:

- One heading line, then one block per file.
- File paths are indented two spaces. Field labels (`owns`, `why`) are indented four spaces and padded to six characters so values start in the same column.
- Values wrap at 78 columns with a hanging indent, so continuation lines sit under the text rather than under the label.
- Blank lines separate blocks; no rules, boxes, or ANSI escape codes.
- Output must read correctly when piped to a file or a pager, so nothing depends on terminal width, color support, or a Unicode-capable font beyond ASCII.

## Palette

### Neutrals

| Name | Hex | Role |
|---|---:|---|
| Onyx | `#0A0A0A` | Page background, deepest surfaces |
| Carbon Black | `#191919` | Main app surfaces, panels, cards |
| Iron Grey | `#474747` | Borders, dividers, muted fills |
| Bright Snow | `#F7F7F7` | Primary text and high-contrast foreground |

### Accents

| Name | Hex | Role |
|---|---:|---|
| Scarlet Rush | `#DE2B31` | Errors, urgent status, destructive actions |
| Vintage Lavender | `#885A89` | Secondary accent, creative/system identity |
| Medium Jungle | `#4DAA57` | Success, healthy status, positive movement |
| Cerulean | `#3A7CA5` | Primary action, links, selected state |
| Old Gold | `#E0BD3E` | Warnings, highlights, attention without danger |
| Rose Punch | `#CF4F84` | Community, social, media, or creative accents |
| Blaze Orange | `#FF6201` | High-energy CTA, active automation, hot status |
| Vibrant Turquoise | `#1ABCBD` | Fresh data, live state, sync/connection status |

## Default Dark-Mode Usage

- Use `#0A0A0A` for the app/page background.
- Use `#191919` for primary panels and tool surfaces.
- Use `#474747` for borders, muted strokes, separators, and disabled fills.
- Use `#F7F7F7` for primary text.
- Pick one primary accent per project or screen, then reserve the rest for semantic status.
- Avoid using all accents at equal weight on the same screen; the result should feel controlled, not noisy.
- Keep red, yellow, and green tied to state unless the user asks for a more expressive palette.

## Iconography

- Do not use emoji as icons in apps, dashboards, sites, tools, or game UI. In this room that rule extends to console output: labels are words, never symbols.
- Use a real icon set when an interface needs icons. Prefer established free icon libraries already present in the project, such as Lucide, Heroicons, Material Symbols, Font Awesome, or framework-native icons.
- Icons should be visually identifiable before reading the label. Use recognizable shapes, clear contrast, and the palette accents above to make important actions and states stand out.
- Use color intentionally: status icons should match their state, primary actions should use the chosen project accent, and inactive icons should stay muted.
- If no icon library exists yet, add the smallest reasonable free icon dependency for the stack instead of substituting emoji.

## CSS Token Starter

Kept for a future UI surface; nothing in this room loads it.

```css
:root {
  --color-onyx: #0a0a0a;
  --color-carbon-black: #191919;
  --color-iron-grey: #474747;
  --color-bright-snow: #f7f7f7;

  --color-scarlet-rush: #de2b31;
  --color-vintage-lavender: #885a89;
  --color-medium-jungle: #4daa57;
  --color-cerulean: #3a7ca5;
  --color-old-gold: #e0bd3e;
  --color-rose-punch: #cf4f84;
  --color-blaze-orange: #ff6201;
  --color-vibrant-turquoise: #1abcbd;
}
```
