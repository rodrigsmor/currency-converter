'use client'

import styled from 'styled-components';

export const PageContainer = styled.div`
  z-index: 1;
  display: flex;
  width: 100dvw;
  max-width: 100dvw;
  overflow-x: hidden;
  position: relative;
  min-height: 100dvh;
  max-height: 100dvh;
  overflow-y: scroll;
  flex-direction: column;
`;

export const TopPageHeader = styled.header`
  gap: 20px;
  width: 100%;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  padding: 16px 16px 0px;
  
  > hgroup {
    width: 100%;
    display: flex;
    max-width: 100%;
    flex-direction: column;

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
  }

  @media ${(props) => props?.theme?.breakpoints?.medium} {
    padding: 16px 48px 0px;
  }

  @media ${(props) => props?.theme?.breakpoints?.large} {
    > hgroup {
      > h1 {
        font-size: ${(props) => props?.theme?.typography?.sizes?.h1};
      }
    }
  }

  @media ${(props) => props?.theme?.breakpoints?.extraLarge} {
    padding: 24px 10dvw 0px;
  }
`;

export const PageBodyContent = styled.section`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  position: relative;
  padding: 24px 16px;
  align-items: center;
  flex-direction: column;
  border-radius: 24px 24px 0px 0px;
  background-color: ${(props) => props?.theme?.colors?.background};
  
  @media ${(props) => props?.theme?.breakpoints?.medium} {
    padding: 48px 48px;
  }

  @media ${(props) => props?.theme?.breakpoints?.extraLarge} {
    padding: 48px 10dvw;
  }
`;