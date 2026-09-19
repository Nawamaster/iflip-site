---
sidebar_position: 6
---

# Skin Studio

Skin Studio lets you re-skin iFlip's colors, icons, and background images without changing how the app works underneath.

## Getting There

**Settings → Appearance → Skin Studio** (palette icon, labeled **"Flip to Studio"**).

## Color Palette

Skin Studio exposes **7 color slots**, each affecting a different part of the interface:

| Slot | Affects |
|---|---|
| **Text** | Text color throughout the app |
| **Container** | Panels / card backgrounds |
| **Icon** | Selection and icon tint |
| **Accent** | Accent/highlight color |
| **Button** | Button color |
| **Background (App BG)** | App background — also the fallback for the library and reader backgrounds |
| **Sidebar** | Sidebar background color (iPad) |

Tap any color chip to open the color picker for that slot.

## Background & Icon Images

Beyond flat colors, you can drop in custom images for a few slots — most notably the **App BG** image, plus custom menu icons.

- If you set an image for a slot that also has a color, the **image takes visual priority** — it's drawn on top of the color
- Changing the color for a slot that already has an image asks you to confirm removing the image first, since otherwise the color change wouldn't be visible
- Large images are automatically resized before saving (recommended max ~2K; icons ~512×512px) — you'll see a heads-up dialog if your image needs resizing, with the option to continue

## Preset Slots

Skin Studio gives you **10 preset slots** (plus the built-in **Default** look) so you can save multiple skins and switch between them instantly.

- Switch skins from **Settings → Appearance** — tap any slot in the preset row to apply it immediately
- Long‑press a filled slot for a quick **Clear Preset** shortcut
- Inside Skin Studio itself, tapping a slot loads it right away; if you have unsaved edits, you'll be asked whether to discard them first

## Export & Import

Skins can be shared as files:

- **Export** a skin from Skin Studio to save it as a **`.iflip-skin`** file (an iFlip-specific file type built on JSON)
- **Import** a `.iflip-skin` file into any of your preset slots to apply someone else's skin (or restore one of your own)

## iPad vs. iPhone Layout

- **iPad** — a fixed, non-scrolling split layout: a live preview on one side, color chips and the sharing notice in the middle, and the 10 slot buttons in a column on the right
- **iPhone** — a single scrolling column: header, slot buttons, color chips, then the background/icon image rows

Both layouts show the same live preview as you edit, so you can see your changes reflected immediately before saving.
