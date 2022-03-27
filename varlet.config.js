module.exports = {
  name: 'Axle',
  title: 'Axle',
  logo: './logo.svg',
  useMobile: false,
  themes: {
    'color-body': '#fff',
    'color-bar': '#fff',
    'color-sub-bar': '#f5f5f5',
    'color-text': '#555',
    'color-sub-text': '#888',
    'color-border': 'rgba(0, 0, 0, 0.12)',
    'color-shadow': '#eee',
    'color-introduce-border': '#9900ff',
    'color-primary': '#9900ff',
    'color-link': '#9900ff',
    'color-type': '#9900ff',
    'color-progress': '#9900ff',
    'color-progress-track': '#fff',
    'color-side-bar': '#9900ff',
    'color-side-bar-active-background': '#9900ff21',
    'color-app-bar': '#9900ff',
    'color-nav-button-hover-background': 'rgba(0, 0, 0, 0.08)',
    'color-pc-language-active': '#9900ff',
    'color-pc-language-active-background': '#9900ff21',
    'color-mobile-language-active': '#9900ff',
    'color-mobile-language-active-background': '#9900ff21',
    'color-mobile-cell-hover': '#9900ff'
  },
  darkThemes: {
    'color-body': '#121212',
    'color-bar': '#1e1e1e',
    'color-sub-bar': '#272727',
    'color-text': '#fff',
    'color-sub-text': '#aaa',
    'color-border': '#333',
    'color-shadow': '#121212',
    'color-introduce-border': '#555',
    'color-primary': '#9900ff',
    'color-link': '#9900ff',
    'color-type': '#9900ff',
    'color-progress': '#9900ff',
    'color-progress-track': '#202020',
    'color-side-bar': '#9900ff',
    'color-side-bar-active-background': '#9900ff21',
    'color-app-bar': '#9900ff',
    'color-nav-button-hover-background': 'rgba(255, 255, 255, 0.08)',
    'color-pc-language-active': '#9900ff',
    'color-pc-language-active-background': '#9900ff21',
    'color-mobile-language-active': '#9900ff',
    'color-mobile-language-active-background': '#9900ff21',
    'color-mobile-cell-hover': '#9900ff',
  },
  highlight: {
    style: './highlight.css',
  },
  pc: {
    redirect: '/home',
    title: {
      'zh-CN': 'Axle',
      'en-US': 'Axle'
    },
    header: {
      playground: null,
      github: 'https://github.com/varletjs/axle',
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
          'en-US': 'Developer guide',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
          'en-US': 'Basic Introduce',
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '快速开始',
          'en-US': 'Quickstart',
        },
        doc: 'quickstart',
        type: 3,
      },
      {
        text: {
          'zh-CN': 'Axle API',
          'en-US': 'Axle API',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '函数签名',
          'en-US': 'Function Signature',
        },
        doc: 'functionSignature',
        type: 2,
      },
      {
        text: {
          'zh-CN': '用例',
          'en-US': 'Example',
        },
        doc: 'example',
        type: 2,
      },
    ],
  }
}
