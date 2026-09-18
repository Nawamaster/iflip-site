import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'iFlip Reader',
  tagline: 'Your personal comic, manga & book reader',
  favicon: 'img/favicon.ico',
  url: 'https://iflip.app',
  baseUrl: '/',
  organizationName: 'Nawamaster',
  projectName: 'iflip-site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'iFlip Reader',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {label: 'Privacy Policy', href: 'https://n00klab.com/privacy'},
            {label: 'Terms of Service', href: 'https://n00klab.com/terms'},
          ],
        },
        {
          title: 'Contact',
          items: [
            {label: 'Email', href: 'mailto:hello@n00klab.com'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} N00Klab.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
