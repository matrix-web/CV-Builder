import * as PIXI from "pixi.js";
import { createNoise2D } from "simplex-noise";
import debounce from "debounce";
import { random, map } from "@/helpers/utils";
const noise2D = createNoise2D();

export interface IBound {
  x: {
    min: number;
    max: number;
  },
  y: {
    min: number;
    max: number;
  }
}

export default class Orb {
  bounds: IBound = {x: {min: 0, max: 0}, y: {min: 0, max: 0}};
  x: number = 0;
  y: number = 0;
  scale: number = 1;
  fill: number = 0
  radius: number = 0;
  xOff: number = 0;
  yOff: number = 0;
  inc: number = 0;
  graphics: PIXI.Graphics;

  constructor(fill: number = 0x000000) {
    this.bounds = this.setBounds();
    this.x = random(this.bounds["x"].min, this.bounds["x"].max);
    this.y = random(this.bounds["y"].min, this.bounds["y"].max);
    this.scale = 1;
    this.fill = fill;
    this.radius = random(window.innerHeight / 6, window.innerHeight / 3);
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    this.inc = 0.002;
    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;

    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    const maxDist =
      window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 2;
    const originX = window.innerWidth / 1.55;
    const originY =
      window.innerWidth < 1000
        ? window.innerHeight
        : window.innerHeight / 1.375;
    
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist
      }
    };
  }

  update() {
    const xNoise = noise2D(this.xOff, this.xOff);
    const yNoise = noise2D(this.yOff, this.yOff);
    const scaleNoise = noise2D(this.xOff, this.yOff);

    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);

    this.scale = map(scaleNoise, -1, 1, 0.5, 1);

    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    this.graphics.clear();

    this.graphics.beginFill(this.fill);

    this.graphics.drawCircle(0, 0, this.radius);

    this.graphics.endFill();
  }
}