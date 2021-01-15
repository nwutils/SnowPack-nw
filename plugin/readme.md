## Plugins for Chromium

Add All your build plugins here.

Edit => `public/package.json`
and add line:

```json
"chromium-args": "--load-extension= './plugins/myPluginName','./plugins/ReactDevTool'",
```
