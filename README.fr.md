_Read this in other languages: [English](README.md), [French](README.fr.md)._

- Voir les `branch` de ce repo pour d'autre versions [pixijs or Vanilla]

# NW.js SnowPack Boilerplate

Boilerplate pour démarrer le développement d'applications Multi-Desktop et Web avec Snowpack , Nwjs et React comme FrontEnd.

## Features

- SnowPack Bundlers (ultra performant 25ms)!
- Builds pour toute les navigateurs (Chrome, Edge, FireFox...)
- Builds pour toute les achhitectures de bureau (x86, x64, Windows, OSX, Linux...)
- HOT && HMR (Nwjs, React)
- Node.js (Native dans Nwjs)
- Live debug avec Vscode pour nwjs `--remote-debugging-port=9222`

## PREVIEW

&nbsp;<img src="https://images2.imgbox.com/ae/f5/AelRurwL_o.png" width="200" />

## Environment setup

1. Install [Node.js and npm](https://nodejs.org) sur votre machine.
2. Download, clone, ou fork le repo
3. Executer `npm install` ou `npm i` dans le dossier de ce repo.

## Development

- **Desktop App:** Dev pour Desktop seulement (nwjs+nodejs)
  - `npm run start-nw`
- **Web App:** Dev pour le Web seulement (sans nwjs+nodejs)
  - `npm start-web`
- **Web &Desktop App:** Dev pour les 2 Desktop et Web.
  - `npm run start`

## Build for production

- **Web & Desktop App:** Build de votre App final (Web et Desktop)
  - `npm run build`
- **Desktop App:** Build final pour desktop (x64, x86, Windows, Linux, OSX)
  - `npm run build-nw`
- **Web App:** Build final pour le Web seulment.
  - `npm run build-web`

---

# Documentation

- `npm run build-web` va sortir dans le dossier `dist`
- `npm run build-nw` va sortir un `build-web` dans `dist` ensuite compiler en binaire dans le dossier `build`.
- `src` Ces ou vous coder votre app.
- Nwjs est installer en local dans `node_modules`.
- Les download de Nwjs et SDK son en cache dans `node_module`.
- `package.json` dans `./public`, ces ou vous configuerer votre build final nwjs.
- `package.json` dans `root`, ces ou vous configurer nwjs pour le debug et developpement.
