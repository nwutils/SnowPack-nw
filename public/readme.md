# Publics

Entry point for nwjs stuff...

Setting your build productions for nwjs in `package.json`

In dev, nwjs will use the `package.json` in the root directory.

# Ressources

Ressources (images,assets,raws...) should be in public/src to work fine with relative for snowPack.

Hacks `snowpack.config.js` => `{mount:{}}` for change this.

## src folder?

is needed if you want use relative path for you app.

ex: ` <img src='./src/image/logo.png' />`

Snowpack dont handle relative path wihout plugins and hard config.

But strangly with this way, all work fine by kind of dark magick for production build and dev !!!
