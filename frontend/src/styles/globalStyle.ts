import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }

  html {
    max-width: 100vw;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.gradients.primaryToSecondary};
  }
`;