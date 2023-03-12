import * as PIXI from "pixi.js";
import { FC, useRef, useEffect } from "react";
import styled from "styled-components";
import ColorPalette from "./ColorPalette";
import Orb from "./Orb";
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

export const Gradient: FC = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new PIXI.Application({
        view: canvasRef.current,
        resizeTo: window,
        backgroundAlpha: 0
      });
      
      app.stage.filters = [new KawaseBlurFilter(30, 10, true)];
      
      const colorPalette = new ColorPalette();
      
      const orbs: Orb[] = [];
      
      for (let i = 0; i < 6; i++) {
        const orb = new Orb(colorPalette.randomColor());
        app.stage.addChild(orb.graphics);
        orbs.push(orb);
      }
      
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        app.ticker.add(() => {
          orbs.forEach((orb) => {
            queueMicrotask(() => {
              orb.update();
              orb.render();
            })
          });
        });
      } else {
        orbs.forEach((orb) => {
          queueMicrotask(() => {
            orb.update();
            orb.render();
          })
        });
      }
    }
  }, []);

  return (
    <StyledCanvas 
      ref={canvasRef}
    />
  )
}