import { dark } from './dark';
import { light } from './light';
import { DefaultTheme } from 'styled-components';

type ThemeModes = {
  light: DefaultTheme;
  dark: DefaultTheme;
}

export const theme: ThemeModes = {
  light,
  dark,
}