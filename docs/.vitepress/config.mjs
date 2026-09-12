import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Dvader Skills',
  description: 'Docs for dvader-skills — short replies, smaller diffs, proof before Work done.',
  base: '/dvader/',
  head: [
    ['link', { rel: 'icon', href: '/dvader/assets/favicon-80.png' }],
    ['meta', { name: 'theme-color', content: '#0b0b0f' }],
  ],

  appearance: 'dark',

  themeConfig: {
    logo: '/dvader/assets/dvader-logo.png',
    nav: [
      { text: 'Docs', link: '/docs/quickstart', activeMatch: '/docs/' },
      { text: 'Skills', link: '/docs/skills', activeMatch: '/docs/skills' },
      { text: 'The Math', link: '/docs/the-math', activeMatch: '/docs/the-math' },
      { text: 'Contribute', link: '/docs/contributing', activeMatch: '/docs/contributing' },
      { text: 'npm', link: 'https://www.npmjs.com/package/dvader-skills' },
      { text: 'GitHub', link: 'https://github.com/Imtejakarthik/dvader' },
    ],

    sidebar: [
      {
        text: 'The Doctrine',
        items: [
          { text: 'Quickstart', link: '/docs/quickstart' },
          { text: 'The Core', link: '/docs/the-core' },
          { text: 'Skill Map (18 skills)', link: '/docs/skills' },
        ],
      },
      {
        text: 'Economics',
        items: [
          { text: 'The Math', link: '/docs/the-math' },
          { text: 'FAQ', link: '/docs/faq' },
          { text: 'Contributing', link: '/docs/contributing' },
        ],
      },
    ],

    outline: { level: [2, 3], label: 'On this page' },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Imtejakarthik/dvader' }],

    footer: {
      message: 'Dvader Skills. Short replies, smaller diffs, proof before Work done.',
      copyright: 'MIT · © 2026 gtknrg',
    },

    search: {
      provider: 'local',
      options: {
        translations: { button: { buttonText: 'Search', buttonAriaLabel: 'Search' } },
      },
    },
  },
});
