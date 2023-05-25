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
    ],
  }
})
