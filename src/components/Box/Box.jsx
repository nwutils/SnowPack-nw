import React, { useState } from "react";
import { view, store } from "@risingstack/react-easy-state";
import _ from "lodash";

let __PADDING = 0;

export const FLEXFIT = {
  minWidth: "0px",
  minHeight: "0px",
  width: "100%",
  height: "100%",
};

/**
 * @typedef {'#202020'|'#505050'|'#509050'|'#909090'} bgcolor - //TODO: choisis les couleur palette oficiel
 */

const bgcolor = {
  "#202020": "#202020",
  "#505050": "#505050",
  "#509050": "#509050",
  "#909090": "#909090",
};

/**

*/
let debugZindex = 999999;
export const Box = React.forwardRef(
  /**
   * @typedef {Object} FlexOption
   * @property {React.CSSProperties['display']} [FlexOption.display]
   * @property {React.CSSProperties['flexDirection']} [dir]
   * @property {React.CSSProperties['flexGrow']} [grow]
   * @property {React.CSSProperties['flexFlow']} [flow]
   * @typedef {Object} props
   * @property {boolean  | FlexOption} [Flex] - true shortcode for display:'flex
   * @property {boolean | 'reverse' } [Column] - true shortcode for display:'flex
   * @property {boolean | number } [Grow] - true shortcode for display:'flex
   * @property { React.CSSProperties['position'] } [Position] - true shortcode for display:'flex
   * @property {string} [ColorBg] - colors
   * @property {boolean|number} [Fit] - number % w,h
   * @property {boolean|React.CSSProperties['overflowX']} [OverflowX] -
   * @property {boolean|React.CSSProperties['overflowY']} [OverflowY] -
   * @property {number|{x:number,y:number}|[number,number,number,number]} [P] - padding: [ left, top, right, bottom ]
   * @property {number|'auto'|{x:number,y:number}|[number,number,number,number]} [M] - margin: [ left, top, right, bottom ]
   * @property {string} [debug] - titre a affiche pour debug
   * @typedef {props & React.HTMLAttributes<HTMLDivElement>  } Child
   * @param {Child} props Component props
   */
  function Box(
    {
      Flex,
      Column,
      Grow,
      ColorBg,
      Fit,
      Position,
      P,
      M,
      OverflowX,
      OverflowY,
      children,
      style = {},
      debug,
      ...rest
    },
    ref
  ) {
    if (Flex || Column) {
      style.display = style.display || "flex";
    }
    if (Column) {
      style.flexDirection = _.isString(Column) ? "column-reverse" : "column";
    }
    if (Grow) {
      style.flexGrow = +Grow;
    }
    if (Position) {
      style.position = Position;
    }
    if (ColorBg) {
      style.backgroundColor = ColorBg;
    }
    if (OverflowX || OverflowY) {
      style.overflowX = _.isBoolean(OverflowX) ? "scroll" : OverflowX;
      style.overflowY = _.isBoolean(OverflowY) ? "scroll" : OverflowY;
    }
    if (Fit) {
      style.minWidth = "0px";
      style.minHeight = "0px";
      style.width = "100%";
      style.height = "100%";
    }
    if (P) {
      style.padding = _.isNumber(P)
        ? `${P}px ${P}px ${P}px ${P}px`
        : _.isArray(P)
        ? `${P[0]}px ${P[1]}px ${P[2]}px ${P[3]}px`
        : `${P.y}px ${P.x}px ${P.y}px ${P.x}px`;
    }
    if (M) {
      style.margin = _.isNumber(M)
        ? `${M}px ${M}px ${M}px ${M}px`
        : _.isArray(M)
        ? `${M[0]}px ${M[1]}px ${M[2]}px ${M[3]}px`
        : `${M.y}px ${M.x}px ${M.y}px ${M.x}px`;
    }
    if (debug) {
      return (
        <div className='debug' ref={ref} {...rest} style={style}>
          <div
            onMouseEnter={() => {
              //todo: passer des args pour debuger en title ?!;
            }}
            style={{
              fontSize: 12,
              backgroundColor: ColorBg || "#202020",
              position: "relative",
              borderWidth: "0px 1px 1px 0px",
              borderColor: "black",
              borderStyle: "dashed",
              boxShadow: "4px 4px 4px 2px #00000047",
              marginTop: -14,
              zIndex: --debugZindex,
            }}>
            {debug}
          </div>
          {children}
        </div>
      );
    } else {
      return (
        <div ref={ref} {...rest} style={style}>
          {children}
        </div>
      );
    }
  }
);
