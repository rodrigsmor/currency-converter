import { light } from '../../styles/theme/light';
enum ColorOpacitiesEnum {
  '100' = '100',
  '80' = '80',
  '60' = '60',
  '40' = '40',
  '20' = '20',
}

type ColorsOpacities = {
  [key in ColorOpacitiesEnum]: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    colors: {
      primary: string;
      secondary: string;
      typography: string;
      background: string;
      gradients: {
        primaryToSecondary: string;
      }
    },
    boxShadow: {
      main: string;
    };
    opacities: ColorsOpacities;
    typography: {
      weight: {
        regular: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
      };
      sizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
    };
    breakpoints: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    }
  }
}