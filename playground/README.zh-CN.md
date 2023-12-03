# Varlet H5 Lite Starter

此模板应该可以帮助您开始使用Varlet UI库进行开发。

作为建议，我们在此模板上使用Vue3、TypeScript和Vite。

该模板使用Vue 3`<脚本设置>`SFC和`反应转换`，
查看[脚本设置文档]（https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup）和[反应转换文档]（https://vuejs.org/guide/extras/reactivity-transform.html）了解更多信息。




## 快速启动

我们建议使用`degit`来获取模板

```shell
npm i degit -g
# 或
yarn global add degit
```

```shell
# 获取模板
degit varletjs/varlet-h5-lite-starter your-project-name
# 进入文件夹
cd your-project-name
# 安装依赖项
yarn
# 启动开发服务器
yarn dev

```

## 功能

<span>中文</span> |
<a href="https://github.com/varletjs/axle/blob/main/playground/README.md">English</a>

### Varlet UI

[Varlet]（https://varlet.gitee.io/varlet-ui/#/en-US/home）是一个基于Vue3开发和设计的移动组件库，由社区合作伙伴开发和维护。

### 按需加载

按需导入避免了组件的全面导入，可以有效地缩小分发包的大小。

[Unplugin-vue-components]（https://github.com/antfu/unplugin-vue-components）将自动导入组件逻辑和样式文件，并使用组件。

### 移动响应

我们使用[postcss-px-to-viewport]（https://github.com/evrone/postcss-px-to-viewport）将px转换为vw以适应移动设备