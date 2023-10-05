import { ThemeBreakpoint } from './breakpoint';
import { ThemePalette } from './palette';

export { type ThemeBreakpoint, type ThemeBreakpointOption } from './breakpoint';
export { type GetColorConfig, type ThemeColor, type ThemeColorOption } from './color';
export { type ThemeFullColorOption, type ThemePalette, type ThemePaletteOption } from './palette';
export * from '@vanilla-extract/css';

/** Theme object with all the values to use in the project styling. */
const theme = Object.freeze({
  get breakpoints() {
    return new ThemeBreakpoint();
  },
  get palette() {
    return new ThemePalette().get;
  },
});

/** Type of the theme. */
export type Theme = typeof theme;

export default theme;
