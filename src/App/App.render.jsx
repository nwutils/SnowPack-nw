import React, { useState, useEffect, useRef } from "react";
import { view } from "@risingstack/react-easy-state";
import { Box } from "../components/Box/Box";
import { App_store } from "./App.store";
import * as PIXI from "pixi.js";
const pixiApp = new PIXI.Application({ backgroundColor: 0x1099bb });
window.PIXI = PIXI; // allow plugin devTool and pixijs plugins

export const App = view(() => {
  // document.getElementById("pixiApp").appendChild(pixiApp.view); // for instant mount
  const { _buzy, P } = App_store;
  const ref = useRef(null);
  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(pixiApp.view);
    // Start the PixiJS app
    pixiApp.start();
  }, []);
  return (
    <Box className='App' Flex Column Fit>
      App - global stores
      <Box P={P} Flex className='header' ColorBg='#509050'>
        <Box P={P} className='menueOs' ColorBg='#402020'>
          MenueOs
        </Box>
        <Box P={P} Grow className='title' ColorBg='#306050'>
          Title project
        </Box>
        <Box P={P} className='buttonOs' ColorBg='#111190'>
          ButtonOs
        </Box>
      </Box>
      <Box P={P} className='body2' Flex Fit Grow ColorBg='#202020'>
        <Box P={P} className='left-panel' Flex ColorBg='#509050'>
          <Box P={P} className='Activity' Flex ColorBg='#f95452'></Box>
          <Box
            P={P}
            Flex
            className='Render'
            OverflowY='scroll'
            ColorBg='#909090'>
            Render
          </Box>
        </Box>
        <Box P={P} className='center' Flex Grow Fit Column ColorBg='#902020'>
          <Box P={P} className='Navigation' ColorBg='#902090'>
            Navigation
          </Box>
          <Box P={P} className='render' Flex Grow Fit ColorBg='#556688'>
            <Box
              P={P}
              className='render'
              OverflowX
              OverflowY
              Grow
              ColorBg='#909090'
              ref={ref}>
              render
            </Box>
            <Box P={P} className='rigth' Column ColorBg='#509050'>
              <Box P={P} className='Activity' Flex ColorBg='#902090'>
                Auto Activity
              </Box>
              <Box
                P={P}
                className='Render'
                Flex
                Grow
                OverflowY
                ColorBg='#909090'>
                Render
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box P={P} className='Footer' Flex ColorBg='#206080'>
        Footer
      </Box>
    </Box>
  );
});
