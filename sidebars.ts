import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Importing Content',
      items: [
        'importing/from-files',
        'importing/from-icloud',
        'importing/from-google-drive',
        'importing/choosing-a-collection',
      ],
    },
    {
      type: 'category',
      label: 'Library',
      items: [
        'library/organize',
        'library/collections',
        'library/selecting-and-batch-actions',
        'library/search',
        'library/reading-now',
      ],
    },
    {
      type: 'category',
      label: 'Reading',
      items: [
        'reading/reader-basics',
        'reading/settings',
        'reading/format-specific-features',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/overview',
        'settings/accounts',
        'settings/google-drive',
        'settings/manage-space',
        'settings/appearance-and-skins',
        'settings/skin-studio',
        'settings/privacy-and-locked-content',
        'settings/languages',
      ],
    },
  ],
};

export default sidebars;
