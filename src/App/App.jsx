import React, { useState, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
globalThis.PIXI = PIXI; // for pixijs plugins if you need

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
//document.getElementById("PixiApp").appendChild(app.view); // for instant mount
app.loader.add("nwjsLogo", "./src/image/logo.png").load(startup);

function startup() {
  const sprite = new PIXI.Sprite(app.loader.resources.nwjsLogo.texture);
  // Center the sprite's anchor point
  sprite.anchor.set(0.5);
  // Move the sprite to the center of the screen
  sprite.x = app.renderer.width / 2;
  sprite.y = app.renderer.height / 2;
  app.stage.addChild(sprite);
  // Listen for animate update
  app.ticker.add(function (delta) {
    // Rotate mr rabbit clockwise
    sprite.rotation += 0.05 * delta;
  });
}

export const App = () => {
  const isInNwjsEnv = !!globalThis.nw;
  const ref = useRef(null);
  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    app.start();

    return () => {
      // On unload stop the application
      app.stop();
    };
  }, []);
  return (
    <div className='App'>
      <div className='App'>Hello World</div>
      <div className='App'>edit src/index.jsx</div>
      <div className='App'>
        Hello World Nwjs is {isInNwjsEnv ? "avaible" : "not avaible"}
      </div>
      <div className='PixiApp' id={"PixiApp"} ref={ref}></div>
    </div>
  );
};
