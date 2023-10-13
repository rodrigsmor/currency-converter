'use client'

import styled from 'styled-components';

export const CurrencySelectorContainer = styled.div`
  top: 88px;
  right: 0px;
  opacity: 1;
  z-index: 10;
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
  gap: 6px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  list-style: none;
  max-height: 100%;
  padding: 14px 0px;
  overflow-y: scroll;
  overflow-x: visible;
  flex-direction: column;

  > .CurrencySelect_CurrencyOption {
    gap: 14px;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 14px;
    transition: all .3s ease;
    border: 1px solid transparent;
    background-color: ${(props) => props?.theme?.colors?.background};
    
    > figure {
      width: 32px;
      height: 24px;
      display: flex;
      max-width: 32px;
      min-width: 32px;
      overflow: hidden;
      max-height: 24px;
      border-radius: 2px;
      align-items: center;
      justify-content: center;

      > .CurrencySelect_FlagIcon {
        width: 100%;
        height: 100%;
      }
    }

    > div {
      gap: 8px;
      flex-grow: 1;
      display: flex;
      align-items: center;

      > p {
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
        font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
        color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[80]}`};
      }

      > span {
        min-width: min-content;
        font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
        font-weight: ${(props) => props?.theme?.typography?.weight?.semibold};
        color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};
      }
    }

    &[aria-selected^="false"] {
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props?.theme?.colors?.typography}1a;
      }
    }

    &[aria-selected^="true"] {
      border: 1px solid ${(props) => `${props?.theme?.colors?.primary + props?.theme?.opacities?.[20]}`};
      background-color: ${(props) => `${props?.theme?.colors?.primary + props?.theme?.opacities?.[20]}`};
    }
  }

  > .CurrencySelect_EmptyState {
    gap: 8px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > p {
      max-width: 100%;
      text-align: center;
      word-break: break-all;
      overflow-wrap: break-word;
      font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
      font-weight: ${(props) => props?.theme?.typography?.weight?.semibold};
      color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};;
    }

    > .currency-selector-empty {
      fill: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[40]}`};;
    }
  }
`;