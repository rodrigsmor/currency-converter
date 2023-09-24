import { DefaultTheme } from 'styled-components';

export const dark: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: '#742DD2',
    secondary: '#481380',
    typography: '#0A0312',
    background: '#F7F5FA',
    gradients: {
      primaryToSecondary: 'linear-gradient(128deg, #481380 0%, #742DD2 100%)',
    },
  },
  boxShadow: {
    main: '0px 0px 6px 0px rgba(10, 3, 18, 0.20)',
  },
  opacities: {
    '100': 'FF',
    '80': 'CC',
    '60': '99',
    '40': '66',
    '20': '33',
  },
  breakpoints: {
    small: '(min-width: 320px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 1024px)',
    extraLarge: '(min-width: 1280px)'
  },
  typography: {
    weight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    },
    sizes: {
      h1: '48px',
      h2: '36px',
      h3: '24px',
      h4: '20px',
      h5: '16px',
      h6: '14px'
    }
  }
}