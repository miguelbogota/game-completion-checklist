import { globalStyle } from '@vanilla-extract/css';

import { ThemeColor } from './color';
import { ThemePalette } from './palette';

const color = new ThemeColor();
const palette = new ThemePalette();

globalStyle(':root', {
  vars: {
    ...palette.vars.base,
    ...color.vars,
  },
  '@media': {
    '(prefers-color-scheme: light)': {
      vars: {
        ...palette.vars.light,
      },
    },
    '(prefers-color-scheme: dark)': {
      vars: {
        ...palette.vars.dark,
      },
    },
  },
});
