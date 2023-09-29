import { Manrope } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${manrope.style.fontFamily};
  }

  html {
    height: 100dvh;
    max-width: 100vw;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.gradients.primaryToSecondary};
  }
`;