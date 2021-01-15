_Read this in other languages: [English](README.md), [French](README.fr.md)._

# NW.js SnowPack Boilerplate with Pixijs

Boilerplate for start multi desktop App development using SnowPack and React + Pixijs.

## Features

- SnowPack Bundlers (crazy 25ms bundlers)!
- Builds for all majors Browsers (Chrome, Edge, FireFox...)
- Builds for all majors Desktops achhitectures (x86, x64, Windows, OSX, Linux...)
- HOT && HMR reloading of browser and desktop (Nwjs, React)
- Node.js (Native with NW.js)
- Live debug in Vscode with `--remote-debugging-port=9222`
- PixiJs as webgl renderer for gpu.

## Environment setup

1. Install [Node.js and npm](https://nodejs.org)
2. Download, clone, or fork this repo
3. Run `npm install` or `npm i` in the folder of this repo.

## Development

- **Desktop App:** Dev for desktop only (nwjs+nodejs)
  - `npm run start-nw`
- **Web App:** Dev for web only (wihout nwjs+nodejs)
  - `npm start-web`
- **Web &Desktop App:** Dev both web and desktop
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

- `npm run build-web` will build in dist
- `npm run build-nw` will `build-web` in `dist` than build destop in `build` folder.
- `src` folder is where you code your app
- Nwjs will be installed locally in `node_modules`
- Nwjs will cache download & SDK in `node_module`
- `package.json` inside `./public`, is where you setting your final build.
- `package.json` inside `root`, is where you setting nwjs for dev.
