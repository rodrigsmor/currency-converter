'use client'

import styled from 'styled-components'

export const SearchResultBoxWrapper = styled.div`
  z-index: 1;
  width: 100%;
  min-width: 100%;
  position: relative;
  
  > header.SearchResult_HeaderSearchbar {
    z-index: 3;
    width: 100%;
    position: relative;
    border-radius: 16px 16px 0 0;
    background-color: ${(props) => props?.theme?.colors?.background};
  }
`;

export const SearchResultsDropbox = styled.section`
  gap: 18px;
  top: 48px;
  z-index: 1;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 10px 18px 18px;
  border-radius: 0 0 16px 16px;
  box-shadow: ${(props) => props?.theme?.boxShadow.main};
  background-color: ${(props) => props?.theme?.colors?.background};
`;

export const SearchResultSection = styled.section`
  gap: 10px;
  display: flex;
  flex-direction: column;

  > .SearchResult_SectionTitle {
    font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
    font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
    color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};
  }

  > ul.SearchResult_List {
    gap: 4px;
    display: flex;
    list-style: none;
    flex-direction: column;
  }

  > div.SearchResult_Features {
    gap: 10px;
    width: 100%;
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media ${(props) => props?.theme?.breakpoints?.medium} {
    > div.SearchResult_Features {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;