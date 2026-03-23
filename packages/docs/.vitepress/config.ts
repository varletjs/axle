import { defineConfig } from 'vitepress'
import { guideItems, guideItemsZh, interceptorItems, interceptorItemsZh } from './items'

function withI18n(items: { link: string; text: string }[], locale: 'zh') {
  return items.map((item) => ({
    ...item,
    link: `/${locale}${item.link}`,
  }))
}

export default defineConfig({
  title: 'Axle',
  description: 'Progressive request tool based on axios',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh',
      themeConfig: {
        nav: [{ text: '首页', link: '/zh' }],

        sidebar: [
          {
            text: '简介',
            items: [{ text: '快速开始', link: '/zh/getting-started' }],
          },
          {
            text: '指南',
            items: withI18n(guideItemsZh, 'zh'),
          },
          {
            text: '内置拦截器',
            items: withI18n(interceptorItemsZh, 'zh'),
          },
        ],

        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/varletjs/axle' }],
      },
    },
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'material-theme-palenight',
    },
  },
  themeConfig: {
    logo: { src: '/logo.svg', style: { height: '28px' } },
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Getting Started', link: '/getting-started' }],
      },
      {
        text: 'Guide',
        items: guideItems,
      },
      {
        text: 'Built-in Interceptors',
        items: interceptorItems,
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/varletjs/axle' }],
  },
})
