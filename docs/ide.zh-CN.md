# 开发工具支持

### 介绍

`axle` 为 `vscode` 单独提供了一个辅助插件 `axle-vscode-extension` ，可以在插件市场下载。
插件提供了代码提示、代码生成以及接口地址提取的功能。

### VSCode 辅助插件安装

在 `vscode` 插件市场搜索 `axle-vscode-extension` 安装即可。

<img style="width: 50%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/axle/ext_vsc.png" alt="vscode ext" />

### 使用指南

当以 `#` 号开头，并且跟上所需要使用的方法的英语字母时，`vscode` 将会给出提示。

<img style="width: 50%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/axle/ext_vsc_use.png" alt="vscode ext use" />

选中某条提示并按下回车，能够快速生成对应的代码模板。

<img style="width: 50%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/axle/ext_vsc_gen.png" alt="vscode ext gen" />

当我们向代码中贴入文本时，使用 `cmd`(`windows` 用户使用 `ctrl` ) + `shift` + `v` 可以提取剪切板中的地址。

### 快捷输入对照

| 简写   | 含义                 |
| ------ | -------------------- |
| `#ef`  | `export function`    |
| `#g`   | `get`                |
| `#gb`  | `getBlob`            |
| `#gd`  | `getDocument`        |
| `#gt`  | `getText`            |
| `#ga`  | `getArrayBuffer`     |
| `#gs`  | `getStream`          |
| `#h`   | `head`               |
| `#hb`  | `headBlob`           |
| `#ht`  | `headText`           |
| `#ha`  | `headArrayBuffer`    |
| `#hs`  | `headStream`         |
| `#o`   | `options`            |
| `#ob`  | `optionsBlob`        |
| `#od`  | `optionsDocument`    |
| `#ot`  | `optionsText`        |
| `#oa`  | `optionsArrayBuffer` |
| `#d`   | `delete`             |
| `#db`  | `deleteBlob`         |
| `#dd`  | `deleteDocument`     |
| `#dt`  | `deleteText`         |
| `#da`  | `deleteArrayBuffer`  |
| `#ds`  | `deleteStream`       |
| `#p`   | `post`               |
| `#pj`  | `postJSON`           |
| `#pm`  | `postMultipart`      |
| `#pu`  | `put`                |
| `#puj` | `putJSON`            |
| `#pum` | `putMultipart`       |
| `#pa`  | `patch`              |
| `#paj` | `patchJSON`          |
| `#pam` | `patchMultipart`     |
