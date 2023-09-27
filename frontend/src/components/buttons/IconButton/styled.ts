import styled from 'styled-components';

export const IconButtonContainer = styled.button`
  width: 44px;
  height: 44px;
  display: grid;
  cursor: pointer;
  border-radius: 8px;
  place-items: center;
  transition: all .3s ease-in;
  border: 0px solid transparent;
  color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[80]}`};
  background-color: ${(props) => props?.theme?.colors?.background};

  &.transparent {
    background-color: transparent;
    color: ${(props) => props?.theme?.colors?.background};
  }

  &:hover {
    background-color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[20]}`};

    &.transparent {
      background-color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[20]}`};
    }
  }
`;