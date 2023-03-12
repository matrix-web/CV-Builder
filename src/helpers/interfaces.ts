export interface ISize {
  [key: string]: number;
}

export interface IColor {
  [key: string]: string;
}

export interface IMedia {
  [key: string]: string;
}

export interface IThemes {
  [key: number | string]: { [key: string]: { [key: string]: string } };
}

export type Weight = 400 | 500 | 600 | 700;

export enum AvatarVariants {
  XSMALL = "xsmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XLARGE = "xlarge",
  XXLARGE = "xxlarge",
  HUGE = "huge",
  XHUGE = "xhuge"
}

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger"
}

