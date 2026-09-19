---
sidebar_position: 2
---

# Quick Settings & Reading Preferences

Reading-related options live in two places: an in-reader **quick settings panel** for things you adjust often, and **Settings → Readers** for global defaults.

## Quick Settings Panel (in the reader)

While reading, tap the center of the screen to open the menu, then tap the **slider.horizontal.3** icon in the top bar. This slides up a panel with:

### Brightness
A slider that adjusts your screen brightness directly, without leaving the reader.

### Reading Direction
Shown for comics/manga: quick **L → R** / **R → L** buttons, mirroring the top bar's direction toggle.

### Background Theme
Shown for EPUB and text: choose the reading background —
- **White** — standard reading
- **Sepia** — warm tone, easier on the eyes
- **Black** — dark mode reading

## Settings → Readers (global defaults)

### Page Transition
Applies to PDF, EPUB, and comic readers (single images and text scroll continuously, so this doesn't apply to them):

| Option | Description |
|---|---|
| **Page Curl** | A realistic page-turn animation. May affect performance on older devices. |
| **Slide** | A smooth sliding transition (uses SwiftUI's paged `TabView`, which also pre‑loads neighboring pages) |
| **No Effect** *(default)* | Instant page replacement — the lightest option, best for performance |

### All Readers
- **Page animations** — enable/disable animations in general
- **Keep display on while reading** — prevents the screen from auto-locking
- **Drag to close gesture** — enable/disable the drag-down-to-dismiss gesture
- **Show reading time** — displays elapsed/estimated reading time
- **Image Filters** — enables image-processing filters for page rendering

### Reading Modes
Configure the spacing between pages independently for:
- **Paginated Reader** (double‑page spacer type)
- **Continuous Reader** (page spacer type)

Each accepts **None**, **Thin**, or **Thick** spacing.
