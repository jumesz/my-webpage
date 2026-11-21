# 一份神秘的礼物

一个纯静态的 H5 小礼物页，单文件、无依赖、不需要后端。

## 怎么发布到 GitHub Pages

1. 打开 https://github.com/jumesz/my-webpage
2. 点 **Add file → Upload files**，把本目录下的 `index.html` 拖进去（**必须叫 index.html，放在仓库根目录**）
3. 底下点 **Commit changes**
4. 进入仓库 **Settings → Pages**
   - Source 选 **Deploy from a branch**
   - Branch 选 **main**，目录选 **/ (root)**，Save
5. 等 1～2 分钟，访问：

   **https://jumesz.github.io/my-webpage/**

## 说明

- 整个页面就是一个 index.html，双击也能在本地浏览器直接打开。
- 手机访问同一份文件同样可用，不需要服务器。
- 如果以后想换文案，直接改 index.html 里的文字再上传覆盖即可。
- 可选：把一张图片命名为 `bg.jpg` 放在 index.html 同级目录，页面会用它做背景（会做模糊+压暗处理）。
