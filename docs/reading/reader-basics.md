---
sidebar_position: 1
---

# Reader Basics

Every reader in iFlip — PDF, EPUB, comic archives, images, and text — shares the exact same menu and controls, so once you learn one, you know them all.

## Opening a Book

Tap any book in your library to open it. iFlip automatically picks the right reader based on the file type, and resumes from your last page.

## Tap Zones

The screen is divided into three invisible vertical zones:

| Zone | Action |
|---|---|
| Left third | Previous page (also closes the menu if it's open) |
| Center third | Show / hide the menu |
| Right third | Next page (also closes the menu if it's open) |

For PDF and EPUB, the reader's own view (PDFKit / WKWebView) handles taps directly instead of the tap-zone overlay, but the same left/center/right behavior applies.

Pinch to zoom is available on comic pages and single images (up to 5x).

## Top Bar (when the menu is open)

| Button | Icon | Action |
|---|---|---|
| Back | chevron.left | Closes the book and returns to your library |
| Bookmark | bookmark / bookmark.fill (orange when active) | Bookmarks the current page, or shows/hides the bookmark list if the page is already bookmarked |
| Spread — Auto | wand.and.sparkles | Automatically decides single vs. double page based on page orientation *(PDF/EPUB/comics only)* |
| Spread — Single | rectangle.portrait | Forces one page at a time *(PDF/EPUB/comics only)* |
| Spread — Double | book.closed | Forces two pages side by side *(PDF/EPUB/comics only)* |
| Reading direction | arrow.left.arrow.right | Toggles right‑to‑left reading, for manga *(PDF/EPUB/comics only)* |
| *Format-specific button* | varies | See [Format-Specific Features](./format-specific-features.md) |
| Drag to close | arrow.down.circle / arrow.down.circle.fill | Turns the drag-down-to-close gesture on or off |
| Quick settings | slider.horizontal.3 | Opens the [quick settings panel](./settings.md) |

## Bottom Bar

- **Drag handle** — drag up/down to resize the thumbnail strip
- **Bookmark list** — appears when you have bookmarks and the list is open; horizontally scrolling capsules, tap to jump to that page, long‑press to delete
- **Page slider** — drag to scrub through the book (shown whenever there's more than one page)
- **Page number** — "X / Y" (or a chapter/spread variant for EPUB and double-page spreads)
- **Thumbnail strip** — per-format preview strip; see [Format-Specific Features](./format-specific-features.md)

## Closing the Reader

- Tap the back button (chevron.left) in the top bar, or
- If **Drag to close** is enabled, drag downward from the content

## Bookmarks

- Tap the bookmark icon to bookmark the current page
- Tap it again while already bookmarked to show/hide the bookmark list
- Tap a bookmark capsule to jump to that page
- Long‑press a bookmark capsule to remove it

Bookmarks aren't available for formats without a page concept (single images and plain text).
