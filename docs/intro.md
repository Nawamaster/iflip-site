---
sidebar_position: 1
slug: /
---

# Getting Started

iFlip Reader is a personal comic, manga, novel, and document reader for iPhone and iPad. Import your own files from your device, iCloud Drive, or Google Drive and enjoy a clean, distraction-free reading experience with a reader menu that works the same way across every file type.

## Supported Formats

**Documents**
- PDF (`.pdf`)
- EPUB (`.epub`)

**Comics & Manga Archives**
- CBZ, CBR, CB7, CBT
- ZIP, 7Z, TAR (when they contain images)

CBR (RAR) archives are supported using iOS's built-in `libarchive`, so both RAR3 and RAR5 files open without any extra setup.

**Images**
- JPG/JPEG, PNG, GIF, WebP, HEIC/HEIF, TIFF, BMP

**Text**
- TXT, Markdown, CSV, log files

## Ways to Import

- **Files App** — import directly from your device, iCloud Drive, or any third‑party storage app you have installed
- **Web Drive (iCloud Drive)** — connect an iCloud Drive folder and import files from it
- **Web Drive (Google Drive)** — sign in with Google and download files straight into your library

All imports are **copies**: files are brought into iFlip's own library, not kept in sync with the original location. See [Importing Content](./importing/from-files.md) for details.

## iPhone vs iPad

iFlip adapts its layout to the device:

- **iPhone** — a bottom tab bar with Reading Now, Library ("On My iPhone"), Search, Favorites, and Settings
- **iPad** — a collapsible sidebar (Reading Now, On My iPad, Search, Favorites, Web Drive, Settings) next to the content area, using `NavigationSplitView`

The features themselves are identical on both; only the navigation chrome differs.

## Where to Go Next

- [Organizing Your Library](./library/organize.md)
- [Reader Basics](./reading/reader-basics.md)
- [Settings Overview](./settings/overview.md)
