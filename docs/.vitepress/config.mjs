import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'The Vader Doctrine',
  description: 'Docs for vader-skills — build least, speak least, move now, and let the reasoning model charge you less.',
  base: '/dvader/',
  head: [
    ['link', { rel: 'icon', href: '/dvader/assets/logo.png' }],
    ['meta', { name: 'theme-color', content: '#0b0b0f' }],
  ],

  appearance: true,

  themeConfig: {
    logo: '/dvader/assets/logo.png',
    nav: [
      { text: 'Docs', link: '/docs/quickstart', activeMatch: '/docs/' },
      { text: 'Skills', link: '/docs/skills', activeMatch: '/docs/skills' },
      { text: 'The Math', link: '/docs/the-math', activeMatch: '/docs/the-math' },
      { text: 'npm', link: 'https://www.npmjs.com/package/vader-skills' },
      { text: 'GitHub', link: 'https://github.com/Imtejakarthik/dvader' },
    ],

    sidebar: [
      {
        text: 'The Doctrine',
        items: [
          { text: 'Quickstart', link: '/docs/quickstart' },
          { text: 'The Core', link: '/docs/the-core' },
          { text: 'The Family (11 skills)', link: '/docs/skills' },
        ],
      },
      {
        text: 'Economics',
        items: [
          { text: 'The Math', link: '/docs/the-math' },
          { text: 'FAQ', link: '/docs/faq' },
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
      message: 'The Vader Doctrine. Operate like the blade: build least, speak least, move now.',
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