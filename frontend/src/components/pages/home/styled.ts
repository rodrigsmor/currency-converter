'use client'

import styled from 'styled-components';

export const HomePageMainContainer = styled.main`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  min-height: 100%;
`;

export const TopGreetingsHeader = styled.header`
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

export const CurrencyPreviewBox = styled.section`
  gap: 6px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > p {
    gap: 4px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
    font-weight: ${(props) => props?.theme?.typography?.weight?.regular};
    color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[80]}`};

    > .ValueConverted_Container {
      gap: 4px;
      display: flex;
      align-items: flex-end;

      > .ValueConverted_CurrencyName {
        padding: 0 0 14px 0;
        font-weight: ${(props) => props?.theme?.typography?.weight?.regular};
      }
    }
  }

  > .icon-button {
    width: 42px;
    height: 56px;
  }
`;

export const CurrencyValudeConverted = styled.span`
  gap: 4px;
  display: flex;
  font-size: 58px;
  flex-direction: row;
  padding-bottom: 0px;
  align-items: flex-start;
  color: ${(props) => props?.theme?.colors?.background};
  font-weight: ${(props) => props?.theme?.typography?.weight?.extrabold};

  > .ValueConverted_MonetarySymbol {
    padding-top: 14px;
    line-height: 18px;
    font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
    font-weight: ${(props) => props?.theme?.typography?.weight?.medium};
    color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[80]}`};
  }
`;