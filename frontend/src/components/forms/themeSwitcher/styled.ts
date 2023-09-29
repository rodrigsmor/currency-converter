import styled from 'styled-components';

interface IThemeSwitcherButton {
  $colorType: 'typography' | 'background';
}

export const ThemeSwitcherContainer = styled.div`

`;

export const ThemeSwitcherButton = styled.button<IThemeSwitcherButton>`
  gap: 8px;
  height: 36px;
  display: flex;
  cursor: pointer;
  padding: 0 12px;
  min-width: 86px;
  align-items: center;
  border-radius: 14px;
  transition: all .3s ease-out;
  background-color: transparent;
  outline: 0px solid transparent;
  font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
  font-weight: ${(props) => props?.theme?.typography?.weight?.semibold};
  color: ${(props) => `${props?.theme?.colors?.[props?.$colorType] + props?.theme?.opacities?.[60]}`};
  border: 1px solid ${(props) => `${props?.theme?.colors?.[props?.$colorType] + props?.theme?.opacities?.[20]}`};

  &:hover {
    background-color: ${(props) => props?.theme?.colors?.[props?.$colorType]}0D;
  }
`;