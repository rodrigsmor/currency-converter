import styled from 'styled-components';

export const CurrencySelectorContainer = styled.div`
  top: 88px;
  right: 0px;
  opacity: 1;
  height: 306px;
  display: flex;
  overflow: hidden;
  position: absolute;
  padding: 14px 14px 0;
  border-radius: 30px;
  flex-direction: column;
  width: calc(100dvw - 32px);
  transition: all .3s ease-in-out;
  box-shadow: ${(props) => props?.theme?.boxShadow?.main};
  background-color: ${(props) => props?.theme?.colors?.background};

  &[aria-hidden^="true"] {
    opacity: 0;
  }

  @media ${(props) => props?.theme?.breakpoints?.medium} {
    width: calc(100dvw - 96px);
  }

  @media ${(props) => props?.theme?.breakpoints?.large} {
    width: 25dvw;
    min-width: 362px;
  }
`;

export const CurrencySelectorHeader = styled.header`
  width: 100%;
`;

export const CurrencyOptionsList = styled.ul`

`;

export const CurrencyOption = styled.li`

`;