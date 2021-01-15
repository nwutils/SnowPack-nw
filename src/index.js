import "./index.css";
const isInNwjsEnv = !!globalThis.nw;
console.log(`🚀 | isInNwjsEnv`, isInNwjsEnv);
if (window.nw) {
  // Acces NW.js API via window.nw or global.nw
  console.log("nw", nw);
  // Access Node process through window.process, global.process, or nw.process
  console.log("Node version", window.process?.version);
  // Require Node moduels via window.require, global.require, or nw.require
  const fs = require("fs");
  console.log('nw.require("fs").readdirSync(".")', fs.readdirSync("."));

  // Window management
  const currentWindow = nw.Window.get();
  currentWindow.showDevTools();
}
document.getElementById("root").innerHTML = `
<h1>Hello Vanilla , Nwjs is ${isInNwjsEnv ? "avaible" : "not avaible"} </h1> `;
