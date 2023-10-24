'use client'

import styled from 'styled-components'

export const SearchResultBoxWrapper = styled.div`
  z-index: 1;
  width: 100%;
  position: relative;
  
  > header.SearchResult_HeaderSearchbar {
    z-index: 3;
    width: 100%;
    position: relative;
    border-radius: 16px 16px 0 0;
    background-color: ${(props) => props?.theme?.colors?.background};
  }

  &[data-expanded="false"] {
    > header.SearchResult_HeaderSearchbar {
      border-radius: 16px;
    }
  }

  &[data-style="separated"] {
    z-index: 10;

    > header {
      background-color: transparent;
    }
  }
`;

export const SearchResultsDropbox = styled.section`
  gap: 18px;
  top: 48px;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 10px 18px 18px;
  border-radius: 0 0 16px 16px;
  box-shadow: ${(props) => props?.theme?.boxShadow.main};
  background-color: ${(props) => props?.theme?.colors?.background};

  &[aria-hidden="true"] {
    display: none;
  }

  [data-style="separated"] & {
    top: 56px;
    z-index: 10;
    padding: 18px;
    border-radius: 16px;
  }

  @media ${(props) => props?.theme?.breakpoints?.large} {
    [data-style="separated"] & {
      right: 0;
      min-width: 46vw;
    }
  }
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

    > li {
      > div.SearchResult_OptionItem {
        gap: 10px;
        width: 100%;
        height: 32px;
        display: flex;
        max-width: 100%;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 8px;
        align-items: center;
        flex-direction: row;
        align-items: center;
        transition: all .5s ease-out;
        background: ${(props) => props?.theme?.colors?.background};

        &:hover {
          opacity: .6;
          background: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[20]};
        }

        > .RemoveRecentSearch {
          width: 24px;
          height: 24px;
          display: grid;
          cursor: pointer;
          place-items: center;
          border: 0px solid transparent;
          background-color: transparent;
          color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[60]};
        }

        > .ResultOption_ContentWrapper {
          gap: 10px;
          width: 100%;
          display: flex;
          cursor: pointer;
          max-width: 100%;
          align-items: center;
          text-decoration: none;
          border: 0px solid transparent;
          background-color: transparent;
          justify-content: space-between;

          > .country-flag-resultButton {
            width: 20px;
            height: 20px;
            border-radius: 6px;
          }

          > .SearchResultOption_Details {
            gap: 4px;
            flex-grow: 1;
            display: flex;
            align-items: center;

            > p.ResultOption_DetailsValue {
              font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
              font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
              color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[80]};
            }

            > span.ResultOption_TypeSelected {
              font-size: 12px;
              font-weight: ${(props) => props?.theme?.typography?.weight?.regular};
              color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[40]};
            }
          }
        }
      }

      &.SearchResult_EmptyState {
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
      flex-direction: row;

      > button {
        flex: 1;
        min-width: 238px;
      }
    }
  }
`;