import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid({
  lang: 'en-US',
  title: 'Developer Documentation',
  description: 'Documentation for AI-READI developers',
  titleTemplate: 'AI-READI Developer Documentation',
  port: 3000,

  appearance: true,
  lastUpdated: true,
  ignoreDeadLinks: false,

  markdown: {
    lineNumbers: true,
  },

  mermaid: {},

  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',

        href: 'favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: 'safari-pinned-tab.svg',
        color: '#3a0839',
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3a0839' }],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: 'browserconfig.xml',
      },
    ],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    [
      'script',
      {
        async: true,
        src: 'https://cdn.jsdelivr.net/npm/svg-pan-zoom-container@0.6.1',
      },
    ],
  ],

  themeConfig: {
    editLink: {
      pattern:
        'https://github.com/AI-READI/dev.fairhub.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AI-READI' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"/><path stroke-linecap="round" stroke-linejoin="round" d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"/><path d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z" clip-rule="evenodd"/></g></svg>',
        },
        link: 'https://fairhub.io',
      },
    ],

    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Overview',
        link: '/docs/overview.md',
      },
      {
        text: 'fairhub.io',
        link: 'https://fairhub.io',
      },
      {
        text: 'Bridge2AI',
        link: 'https://commonfund.nih.gov/bridge2ai',
      },
    ],

    sidebar: {
      '/docs': sidebarGuide(),
      '/git': sidebarGuide(),
      '/general': sidebarGuide(),
      '/fairhub': sidebarGuide(),
      '/database': sidebarGuide(),
    },

    footer: {
      copyright:
        'This project is funded by the NIH under award number 1OT2OD032644. <br> The content is solely the responsibility of the authors and does not necessarily represent the official views of the NIH.',
      message: 'Copyright © 2022-present | AI-READI',
    },
  },
});

function sidebarGuide() {
  return [
    {
      text: 'README',
      collapsible: true,
      items: [
        { text: 'Overview', link: '/docs/overview.md' },
        {
          text: 'About these docs',
          link: '/docs/README.md',
        },
        {
          text: 'Best practices',
          link: '/docs/best-practices.md',
        },
      ],
    },

    {
      text: 'Git',
      collapsible: true,
      items: [
        { text: 'Commits on GitHub', link: '/git/commits.md' },
        { text: 'GitHub actions', link: '/git/workflows.md' },

        { text: 'GitLab', link: '/git/gitlab.md' },
      ],
    },

    {
      text: 'General',
      collapsible: true,
      items: [{ text: 'Commenting code', link: '/general/comments.md' }],
    },

    {
      text: 'fairhub.io',
      collapsible: true,
      items: [{ text: 'Tech stack', link: '/fairhub/techstack.md' }],
    },

    {
      text: 'Database',
      collapsible: true,
      items: [{ text: 'Class diagram', link: '/database/class-diagram.md' }],
    },
  ];
}
