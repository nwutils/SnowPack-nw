import React from "react";
export const App = () => {
  const isInNwjsEnv = !!globalThis.nw;
  console.log(`🚀 | isInNwjsEnv`, isInNwjsEnv);
  return (
    <div className='App'>
      <div className='App'>Hello World</div>
      <div className='App'>edit src/index.jsx</div>
      <div className='App'>
        Nwjs is {isInNwjsEnv ? "avaible" : "not avaible"}
      </div>
      <img src='./src/image/logo.png' />
    </div>
  );
};
