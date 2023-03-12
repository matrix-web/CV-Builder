import { random } from "@/helpers/utils";
import hsl from "hsl-to-hex";

export default class ColorPalette {
  hue: number = 0;
  complimentaryHue1: number = 0;
  complimentaryHue2: number = 0;
  saturation: number = 0;
  lightness: number = 0;
  baseColor: string = "";
  complimentaryColor1: string = "";
  complimentaryColor2: string = "";
  colorChoices: string[] = [];

  constructor() {
    this.setColors();
    this.setCustomProperties();
  }

  setColors() {
    this.hue = ~~random(220, 360);
    this.complimentaryHue1 = this.hue + 30;
    this.complimentaryHue2 = this.hue + 60;
    this.saturation = 95;
    this.lightness = 50;
    
    this.baseColor = hsl(this.hue, this.saturation, this.lightness);
    this.complimentaryColor1 = hsl(this.complimentaryHue1, this.saturation, this.lightness);
    this.complimentaryColor2 = hsl(this.complimentaryHue2, this.saturation, this.lightness);
    this.colorChoices = [
      this.baseColor,
      this.complimentaryColor1,
      this.complimentaryColor2
    ]
  }
  randomColor(): number {
    return +this.colorChoices[~~random(0, this.colorChoices.length)].replace("#", "0x");
  }

  setCustomProperties() {
    document.documentElement.style.setProperty("--hue", `${this.hue}`);
    document.documentElement.style.setProperty(
      "--hue-complimentary1",
      `${this.complimentaryHue1}`
    );
    document.documentElement.style.setProperty(
      "--hue-complimentary2",
      `${this.complimentaryHue1}`
    );
  }
}