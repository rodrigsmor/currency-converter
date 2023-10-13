import styled from 'styled-components';

export const ThemeSwitcherContainer = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ThemeSwitcherLabelIcon = styled.label`
  display: flex;
  cursor: not-allowed;
  height: max-content;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  transition: all .2s ease-in;
  color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[60]};
  
  &[aria-disabled^="false"] {
    opacity: .4;
    cursor: pointer;
    pointer-events: all;
  }
`;

export const ThemeSwitcherToggleWrapper = styled.div`
  width: 63px;
  height: 36px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 36px;
  background: ${(props) => props?.theme?.colors?.background};
  border: 1px solid ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[20]};

  > input {
    opacity: 0;
    flex-grow: 1;
    cursor: pointer;
    background-color: red;
  }

  > span {
    left: 4px;
    width: 28px;
    height: 28px;
    position: absolute;
    border-radius: 100%;
    pointer-events: none;
    transition: all .2s ease-in;
    background-color: ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[40]};

    &[data-current-theme^="dark"] {
      left: calc(63px - (6px + 28px));
    }
  }
`;

export const ThemeSwitcherButton = styled.button`
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
  color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[60]}`};
  border: 1px solid ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[20]}`};

  &:hover {
    background-color: ${(props) => props?.theme?.colors?.background}0D;
  }

  &[data-color^="typography"] {
    color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};
    border: 1px solid ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[20]}`};

    &:hover {
      background-color: ${(props) => props?.theme?.colors?.typography}0D;
    }
  }
`;