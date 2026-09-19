---
sidebar_position: 2
---

# Import from iCloud Drive (Web Drive)

iFlip groups iCloud Drive and Google Drive under a single **Web Drive** entry point. Both let you browse a remote location and copy files into your library — neither is a live sync.

## How to Connect

1. **iPhone**: go to the **Library** tab → **Web Drive**
2. **iPad**: select **Web Drive** in the sidebar
3. Tap the **iCloud** side (the wrapper screen has an Apple/iCloud option and a Google Drive option — a "G" toggle switches between them)
4. If this is the first time, tap **Select Folder** and choose a folder inside **Files → iCloud Drive** using the standard folder picker
5. Browse the files inside that folder and tap one to import it

## Notes

- Only files **directly inside** the selected folder are shown — subfolders are not listed
- Only one folder can be selected at a time; picking a new one replaces the old bookmark
- The chosen folder is remembered (via a security-scoped bookmark) so it reconnects automatically the next time you open iFlip
- The folder is watched for changes while iFlip is open, so newly added files appear without needing to reopen the picker
- Downloading an iCloud file that hasn't been downloaded to the device yet is handled automatically before import
- Imported files always land in a collection named **"Web Drive"** in your library
- This is an import (copy), not a sync — changes made in iCloud Drive afterward won't automatically update the copy inside iFlip
- If iCloud Drive isn't enabled on your device, iFlip shows an "iCloud Unavailable" message with a shortcut to **Settings → Apple ID → iCloud**

> Older library collections named "iCloud" or "Download" are automatically renamed to "Web Drive" the first time you open an updated version of the app.
