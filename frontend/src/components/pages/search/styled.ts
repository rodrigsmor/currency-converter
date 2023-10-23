'use client'

import styled from 'styled-components';

export const SearchPageMainContainer = styled.main`
  gap: 28px;
  z-index: 1;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  position: relative;
  flex-direction: column;

  > .SearchPageContent {
    gap: 18px;
  }
`;

export const SearchListSectionTitle = styled.h3`
  width: 100%;
  text-align: left;
  font-size: ${(props) => props?.theme?.typography?.sizes?.h3};
  font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
  color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[80]};
`;

export const SearchCountriesList = styled.section`
  gap: 28px;
  width: 100%;
  display: flex;
  min-width: 100%;
  flex-direction: column;

  > .AlphabeticalCountry_Group {
    gap: 10px;
    width: 100%;
    display: flex;
    max-width: 100%;
    flex-direction: column;

    > h4 {
      font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
      font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
      color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[60]};
    }

    > ul.AlphabeticalCountry_GroupList {
      gap: 12px;
      display: grid;
      list-style: none;
    }
  }

  @media ${(props) => props?.theme?.breakpoints?.large} {
    > .AlphabeticalCountry_Group {
      > ul.AlphabeticalCountry_GroupList {
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      }
    }
  }
`;