'use client'

import styled from 'styled-components';

export const HomePageMainContainer = styled.main`
  z-index: 1;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  position: relative;
  flex-direction: column;
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

export const CurrencyTodayContainer = styled.section`
  width: 100%;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  
  > .BaseCurrency_Container {
    gap: 4px;
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;

    > p {
      font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
      font-weight: ${(props) => props?.theme?.typography?.weight?.regular};
      color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[80]}`};
    }

    > .BaseCurrencySelect_Container {
      display: flex;
      align-items: center;
      min-width: min-content;
      justify-content: center;

      > #BaseCurrencySelector_Header {
        top: 32px;
      }
    }
  }

  @media (max-width: 1023px) {
    > .BaseCurrency_Container {
      > .BaseCurrencySelect_Container {
        > #BaseCurrencySelector_Header {
          left: 0;
        }
      }
    }
  }

  @media ${(props) => props?.theme?.breakpoints?.large} {
    > .BaseCurrency_Container {
      > .BaseCurrencySelect_Container {
        position: relative;
      }
    }
  }
`;

export const CurrencyPreviewBox = styled.div`
  gap: 6px;
  z-index: 1;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > p {
    gap: 4px;
    z-index: 1;
    flex-grow: 1;
    display: flex;
    font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
    font-weight: ${(props) => props?.theme?.typography?.weight?.regular};
    color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[80]}`};

    &.ValueConverted_Container {
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

  > #TargetCurrencySelector_Header {
    right: 0px;
  }
`;

export const CurrencyValueConverted = styled.span`
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

export const HomeBodyContent = styled.section`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  position: relative;
  align-items: center;
  margin: 62px 0px 0px;
  flex-direction: column;
  padding: 74px 16px 24px;
  border-radius: 24px 24px 0px 0px;
  background-color: ${(props) => props?.theme?.colors?.background};
  
  @media ${(props) => props?.theme?.breakpoints?.medium} {
    padding: 74px 48px 48px;
  }

  @media ${(props) => props?.theme?.breakpoints?.extraLarge} {
    padding: 74px 10dvw 48px;
  }
`;

export const CurrenciesGroupList = styled.ul`
  gap: 12px;
  width: 100%;
  display: grid;
  max-width: 100%;
  list-style: none;

  > li {
    max-width: 100%;
    overflow: hidden;
  }

  @media ${(props) => props?.theme?.breakpoints?.large} {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
`;