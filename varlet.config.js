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
    'color-link': '#7175d3',
    'color-type': '#353775',
    'color-progress': '#844dab',
    'color-progress-track': '#fff',
    'color-side-bar': '#ad40f6',
    'color-side-bar-active-background': '#ad40f61a',
    'color-app-bar': '#ad40f6',
    'color-nav-button-hover-background': 'rgba(0, 0, 0, 0.08)',
    'color-mobile-cell-hover': '#ad40f6',
    'color-pc-language-active': '#ad40f6',
    'color-pc-language-active-background': '#edf5ff',
    'color-mobile-language-active': '#ad40f6',
    'color-mobile-language-active-background': '#edf5ff',
    'color-hl-background': '#fafafa',
    'color-hl-code': '#58727e',
    'color-hl-border': '#f3f3f3',
    'color-hl-group-a': '#7c7c7c',
    'color-hl-group-b': '#9900ff',
    'color-hl-group-c': '#ff9422',
    'color-hl-group-d': '#58c193',
    'color-hl-group-e': '#ff9422',
    'color-hl-group-f': '#ff9422',
    'color-hl-group-g': '#ff9422',
    'color-hl-group-h': '#06a6e9',
    'color-hl-group-i': '#f23733',
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
    'color-primary': '#d293fc',
    'color-link': '#7175d3',
    'color-type': '#9900ff',
    'color-progress': '#844dab',
    'color-progress-track': '#202020',
    'color-side-bar': '#b349fa',
    'color-side-bar-active-background': '#b349fa1a',
    'color-app-bar': '#272727',
    'color-nav-button-hover-background': 'rgba(255, 255, 255, 0.08)',
    'color-mobile-cell-hover': '#b349fa',
    'color-pc-language-active': '#b349fa',
    'color-pc-language-active-background': '#b349fa20',
    'color-mobile-language-active': '#b349fa',
    'color-mobile-language-active-background': '#b349fa20',
    'color-hl-background': '#272727',
    'color-hl-code': '#fff',
    'color-hl-border': '#272727',
    'color-hl-group-a': '#7c7c7c',
    'color-hl-group-b': '#d293fc',
    'color-hl-group-c': '#ff7b1e',
    'color-hl-group-d': '#A8FFC4',
    'color-hl-group-e': '#ff7b1e',
    'color-hl-group-f': '#ff7b1e',
    'color-hl-group-g': '#ff7b1e',
    'color-hl-group-h': '#14a6e9',
    'color-hl-group-i': '#ed4648',
  },
  highlight: {
    style: null,
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
          'zh-CN': '加强',
          'en-US': 'Enhancements',
        },
        doc: 'enhance',
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
          'zh-CN': '请求数据',
          'en-US': 'Fetch',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '请求 Json',
          'en-US': 'Json',
        },
        doc: 'json',
        type: 3,
      },
      {
        text: {
          'zh-CN': '请求 Blob',
          'en-US': 'Blob',
        },
        doc: 'blob',
        type: 3,
      },
      {
        text: {
          'zh-CN': '请求 Document',
          'en-US': 'Document',
        },
        doc: 'document',
        type: 3,
      },
      {
        text: {
          'zh-CN': '请求 Arraybuffer',
          'en-US': 'Arraybuffer',
        },
        doc: 'arraybuffer',
        type: 3,
      },
      {
        text: {
          'zh-CN': '请求 Text',
          'en-US': 'Text',
        },
        doc: 'text',
        type: 3,
      },
      {
        text: {
          'zh-CN': '请求 Stream',
          'en-US': 'Stream',
        },
        doc: 'stream',
        type: 3,
      },
      {
        text: {
          'zh-CN': '提交数据',
          'en-US': 'Modify',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '提交 Urlencoded',
          'en-US': 'Urlencoded',
        },
        doc: 'urlencoded',
        type: 3,
      },
      {
        text: {
          'zh-CN': '提交 Json',
          'en-US': 'Json',
        },
        doc: 'modifyJson',
        type: 3,
      },
      {
        text: {
          'zh-CN': '提交 FormData',
          'en-US': 'FormData',
        },
        doc: 'formData',
        type: 3,
      },
      {
        text: {
          'zh-CN': '用例',
          'en-US': 'Example',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Fetch',
          'en-US': 'Fetch',
        },
        doc: 'fetchExample',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Modify',
          'en-US': 'Modify',
        },
        doc: 'modifyExample',
        type: 2,
      },
    ],
  }
}
