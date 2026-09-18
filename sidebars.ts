import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Importing Content',
      items: ['importing/from-files', 'importing/from-icloud', 'importing/from-google-drive'],
    },
    {
      type: 'category',
      label: 'Library',
      items: ['library/organize'],
    },
    {
      type: 'category',
      label: 'Reading',
      items: ['reading/reader-basics', 'reading/settings'],
    },
    {
      type: 'category',
      label: 'Settings',
      items: ['settings/google-drive'],
    },
  ],
};

export default sidebars;
