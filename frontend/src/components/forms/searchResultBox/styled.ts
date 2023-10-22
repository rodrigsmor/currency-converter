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
    min-height: 104px;
    max-height: 104px;
    overflow-y: auto;
    flex-direction: column;

    > li.SearchResult_EmptyState {
      gap: 4px;
      width: 100%;
      display: grid;
      max-width: 100%;
      overflow: hidden;
      min-height: 104px;
      place-items: center;
      color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[80]}`};

      > p {
        width: 100%;
        text-align: center;
        word-break: break-all;
        overflow-wrap: break-word;
        max-height: 100%;
        font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
        font-weight: ${(props) => props?.theme?.typography?.weight?.medium};
        color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};

        > strong {
          font-weight: ${(props) => props?.theme?.typography?.weight?.semibold};
          color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[80]}`};
        }
      }
    }
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