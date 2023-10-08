import styled from 'styled-components';

export const LangSelectWrapper = styled.div`
  height: 36px;
  display: flex;
  min-width: 100px;
  position: relative;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
`;

export const LangSelectToggle = styled.button`
  gap: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-out;
  background-color: transparent;
  border: 0px solid transparent;
  outline: 0px solid transparent;
  font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
  font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
  color: ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[60]}`};
  border: 1px solid ${(props) => `${props?.theme?.colors?.background + props?.theme?.opacities?.[20]}`};

  > .country-flag-lang {
    width: 20px;
    height: 20px;
    min-width: 20px;
    border-radius: 14px;
  }

  > #language-selected_code {
    width: 100%;
    text-align: start;
  }

  > .icon-arrow-down_select {
    min-width: 20px;
  }

  &:hover {
    background-color: ${(props) => props?.theme?.colors?.background}0D;
  }
`;

export const LangOptionsList = styled.ul`
  gap: 2px;
  top: 42px;
  opacity: 0;
  width: 100%;
  padding: 4px;
  display: flex;
  list-style: none;
  position: absolute;
  border-radius: 6px;
  flex-direction: column;
  transition: all .2s ease-in;
  background-color: ${(props) => props?.theme?.colors?.background + props?.theme?.opacities?.[80]};
  border: 2px solid ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[20]}`};

  &[aria-hidden^="false"] {
    opacity: 1;
  }
`;

export const LangOption = styled.li`
  width: 100%;

  > button {
    gap: 6px;
    width: 100%;
    padding: 4px;
    display: flex;
    border-radius: 8px;
    align-items: center;
    transition: all .3s ease-out;
    border: 0px solid transparent;
    background-color: transparent;

    > .country-flag-lang {
      width: 16px;
      height: 16px;
      min-width: 16px;
      border-radius: 14px;
    }

    > .option-language_CODE {
      font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
      font-weight: ${(props) => props?.theme?.typography?.weight?.medium};
      color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};
    }
  }

  &:not([aria-selected^="true"]):hover {
    > button {
      background-color: ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[20]};

      &:not(:disabled) {
        cursor: pointer;
      }
    }
  }

  &[aria-selected^="true"] {
    > button {
      background-color: ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[60]};

      > .option-language_CODE {
        font-weight: ${(props) => props?.theme?.typography?.weight?.semibold};
        color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[80]}`};
      }
    }
  }
`;