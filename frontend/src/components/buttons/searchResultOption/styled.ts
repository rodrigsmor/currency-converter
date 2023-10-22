import styled from 'styled-components';

export const SearchResultWrapper = styled.div`
  gap: 10px;
  width: 100%;
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
`

export const SearchResultButtonWrap = styled.button`
  gap: 10px;
  width: 100%;
  display: flex;
  cursor: pointer;
  max-width: 100%;
  align-items: center;
  border: 0px solid transparent;
  background-color: transparent;
  justify-content: space-between;

  > .country-flag-resultButton {
    width: 20px;
    height: 20px;
    border-radius: 6px;
  }
`;

export const SearchResultDetails = styled.div`
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
`;