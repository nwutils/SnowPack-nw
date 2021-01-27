_Read this in other languages: [English](README.md), [French](README.fr.md)._

# NW.js SnowPack Boilerplate

Boilerplate for creating a cross-platform desktop App using SnowPack and vanilla JS/HTML.

## Features

- SnowPack Bundlers (crazy 25ms bundler)!
- Builds for all majors Browsers (Chrome, Edge, FireFox...)
- Builds for all majors Desktops architectures (x86, x64, Windows, OSX, Linux...)
- Hot & HMR reloading of browser and desktop (NW.js)
- Node.js (Native with NW.js)
- Live debug in VSCode with `--remote-debugging-port=9222`

## PREVIEW

<img src="https://images2.imgbox.com/9f/65/7bK6BjzR_o.png" width="200" alt="Preview screenshot showing the Hello World app running in a browser and a desktop app, with a message conveying if the NW.js API is available in that environment" />

## Environment setup

1. Install [Node.js and npm](https://nodejs.org)
2. Download, clone, or fork this repo
3. Run `npm install` or `npm i` in the folder of this repo.

## Development

- **Desktop App:** Dev for desktop only (with NW.js + Node.js)
  - `npm run start-nw`
- **Web App:** Dev for web only (without NW.js + Node.js)
  - `npm run start-web`
- **Web &Desktop App:** Dev both web and desktop
  - `npm start`

## Build for production

- **Web & Desktop App:** Build final app for all browsers and desktop
  - `npm run build`
- **Desktop App:** Build final app for desktop (x64, x86, Windows, Linux, OSX)
  - `npm run build-nw`
- **Web App:** Build final app for all browsers only
  - `npm run build-web`

---

# Documentation

- `npm run build-web` will build in `dist`
- `npm run build-nw` will `build-web` in `dist` then build desktop in `build` folder.
- `src` folder is where you code your app
- NW.js will be installed locally in `node_modules`
- NW.js will cache download and SDK in `node_module`
- `package.json` inside `./public`, contains settings for your final build.
- `package.json` inside `root`, contains settings for NW.js development.
