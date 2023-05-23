import { defineConfig } from '@varlet/cli'

export default defineConfig({
  name: 'Axle',
  title: 'Axle',
  logo: './logo.svg',
  useMobile: false,
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
          'zh-CN': '开发工具支持',
          'en-US': 'Ide Code Support',
        },
        doc: 'ide',
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
          'zh-CN': '请求 ArrayBuffer',
          'en-US': 'ArrayBuffer',
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
})
