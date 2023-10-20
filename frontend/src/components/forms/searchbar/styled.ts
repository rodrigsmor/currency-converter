import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  gap: 12px;
  height: 48px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-radius: 16px;
  transition: all .3s ease;
  border: 0px solid transparent;
  color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};
  background-color: ${(props) => `${props?.theme?.colors?.primary + props?.theme?.opacities?.[20]}`};

  &[data-color^="background"] {
    background-color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[20]}`};
  }

  &[data-color^="background-full"] {
    background-color: ${(props) => props?.theme?.colors?.background};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  align-items: center;
  border: 0px solid transparent;
  background-color: transparent;
  outline: 0px solid transparent;
  font-size: ${(props) => props?.theme?.typography?.sizes?.h5 };
  font-weight: ${(props) => props?.theme?.typography?.weight?.medium };
  color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};

  &::placeholder {
    opacity: 1;
    font-weight: ${(props) => props?.theme?.typography?.weight?.medium };
    color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[40]}`};
  }
`;