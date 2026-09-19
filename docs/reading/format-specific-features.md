---
sidebar_position: 3
---

# Format-Specific Features

Beyond the [shared reader basics](./reader-basics.md), each file type adds its own small extras.

## PDF

- Swipe left/right to turn pages
- **Spread Auto** shows single pages if any page is landscape, otherwise pairs portrait pages together
- Right‑to‑left mode reverses page order for manga-style PDFs
- Pinch to zoom, up to 5x
- A **thumbnail strip** along the bottom lets you tap any page to jump to it; thumbnails load lazily and are cached as you scroll
- Bookmarks work exactly as described in [Reader Basics](./reader-basics.md)

## EPUB

- The extra top-bar button (**list.bullet**) opens a **Chapters** sheet — tap any chapter to jump straight to it
- The bottom thumbnail strip renders one snapshot per chapter (a shimmer placeholder shows while a chapter thumbnail is still being generated)
- Chapter thumbnail generation runs in the background and automatically stops as soon as you close the book, so it doesn't drain the battery
- Page/position indicator reads "Chapter X of Y"
- Bookmarks are supported

## Comics & Image Archives (CBZ, CBR, CB7, CBT, ZIP, 7Z, TAR)

- Tap left/right thirds to turn pages; in right‑to‑left mode, the right side goes to the *previous* page
- The extra top-bar button switches **layout**:
  - **Standard** — normal paged view
  - **Scroll** — continuous vertical scrolling
  - **Fill Screen** — pages scaled to fill the display
- In spread mode, portrait pages are automatically paired two-at-a-time; landscape pages are always shown alone
- A thumbnail strip shows page previews, decoded directly from the archive and cached in memory
- Hidden macOS artifact files (like `._filename.jpg`) inside archives are automatically ignored and never appear as pages
- Bookmarks are supported

## Images (JPG, PNG, GIF, WebP, HEIC, TIFF, BMP)

- Single-image viewer with pinch-to-zoom and double-tap to zoom in/out (up to 5x)
- No spread controls and no thumbnail strip — there's only one "page"
- Bookmarks aren't applicable

## Text (TXT, Markdown, CSV, log files)

- Continuous scrolling reader with serif typography
- The extra top-bar buttons increase or decrease font size in 2pt steps, from 14pt up to 34pt
- Your position is remembered automatically as you scroll
- No spread controls, thumbnail strip, or bookmarks — position is tracked automatically instead
