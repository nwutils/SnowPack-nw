_Read this in other languages: [English](README.md), [French](README.fr.md)._

Take a look in `Branch` of this repo for see others version [PixiJS or Vanilla]

# NW.js SnowPack Boilerplate

Boilerplate for cross-platform desktop App development using SnowPack and React.
FullStack with store and serverless using proxies.

## Features

- SnowPack Bundler (crazy 25ms bundler)!
- Builds for all major Browsers (Chrome, Edge, FireFox...).
- Builds for all major Desktops architectures (x86, x64, Windows, OSX, Linux...).
- HMR & Hot reloading of browser and desktop (NW.js, React).
- Node.js (Native with NW.js).
- Live debug in VSCode with `--remote-debugging-port=9222`.
- Proxy store RES.
- PixiJS for rendering engine.
- DevTool plugins for React and Pixi.

## PREVIEW

<img src="https://images2.imgbox.com/c1/a0/4cc6xJlO_o.png" width="200" alt="Screenshot of app running in NW.js with dev tools open and proxy logged" />

## Environment setup

1. Install [Node.js and npm](https://nodejs.org)
2. Download, clone, or fork this repo
3. Run `npm install` in the root of this repo.

## Development

- **Desktop App:** Dev for desktop only (NW.js + Node.js)
  - `npm run start-nw`
- **Web App:** Dev for web only (without NW.js + Node.js)
  - `npm start-web`
- **Web & Desktop App:** Dev both web and desktop
  - `npm run start`

## Build for production

- **Web & Desktop App:** Build final app for all browsers and desktop
  - `npm run build`
- **Desktop App:** Build final app for desktop (x64, x86, Windows, Linux, OSX)
  - `npm run build-nw`
- **Web App:** Build final app for all browsers only
  - `npm run build-web`

---

# Documentation

- `npm run build-web` will build in `dist`.
- `npm run build-nw` will `build-web` in `dist` then build desktop in `build` folder.
- `src` folder is where you code your app.
- NW.js will be installed locally in `node_modules`.
- NW.js will cache download & SDK in `node_modules`.
- `package.json` inside `./public` is for your final build settings.
- `package.json` inside `root` is for your NW.js for dev settings.
