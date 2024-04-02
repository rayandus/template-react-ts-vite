// You can extend theme from a UI Framework such as MUI
// This will make the theme properties of MUI to be accessible
// in styled component declarations. For example: breakpoints, fonts, colors
/* import '@emotion/react';
import { Theme as MUITheme } from '@mui/material/styles';

declare module '@emotion/react' {
  export interface Theme extends MUITheme {}
} */

import { Breakpoints } from '../app/theme';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: Breakpoints;
  }
}
