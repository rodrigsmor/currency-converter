import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;