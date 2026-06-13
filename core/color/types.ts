export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type LAB = {
  l: number;
  a: number;
  b: number;
};

export type SampledHoldColor = {
  rgb: RGB;
  lab: LAB;
  hex: string;
};

export type ColorblindMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
