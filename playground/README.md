# Varlet H5 Lite Starter

This template should help get you started developing with Varlet UI Library. 
As a recommendation, we use Vue3 and TypeScript and Vite on this template. 

The template uses Vue 3 `<script setup>` SFCs and `reactive transform`, 
check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) and 
[reactive transform docs](https://vuejs.org/guide/extras/reactivity-transform.html) to learn more.

## Quickstart

We recommend using `degit` to fetch template

```shell
npm i degit -g
# or
yarn global add degit
```

```shell
# fetch template
degit varletjs/varlet-h5-lite-starter your-project-name
# into folder
cd your-project-name
# install dependencies
yarn
# start dev server
yarn dev
```

## Features

### Varlet UI

[Varlet](https://varlet.gitee.io/varlet-ui/#/en-US/home) is a Material design mobile component library developed based on Vue3, 
developed and maintained by partners in the community.

### Import On Demand

The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package. 
The [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) will automatically import component logic and style files and use components.

### Mobile Responsive

We use the [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) to convert px to vw to adapt to mobile devices
