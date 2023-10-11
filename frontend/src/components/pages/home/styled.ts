'use client'

import styled from 'styled-components';

export const HomePageMainContainer = styled.main`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  min-height: 100%;
`;

export const TopGreetingsHeader = styled.header`
  width: 100%;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  padding: 16px 16px 0px;

  > h1 {
    color: ${(props) => props?.theme?.colors?.background};
    font-size: ${(props) => props?.theme?.typography?.sizes?.h2};
    font-weight: ${(props) => props?.theme?.typography?.weight?.extrabold};
  }

  > h2 {
    font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
    font-weight: ${(props) => props?.theme?.typography?.weight?.medium};
    color: ${(props) => props?.theme?.colors?.background + props?.theme?.opacities?.[80]};
  }

  @media ${(props) => props?.theme?.breakpoints?.medium} {
    padding: 16px 48px 0px;
  }

  @media ${(props) => props?.theme?.breakpoints?.large} {
    > h1 {
      font-size: ${(props) => props?.theme?.typography?.sizes?.h1};
    }
  }

  @media ${(props) => props?.theme?.breakpoints?.extraLarge} {
    padding: 24px 10dvw 0px;
  }
`;