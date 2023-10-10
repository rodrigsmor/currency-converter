import styled from 'styled-components';

export const LangSelectWrapper = styled.div`
  height: 36px;
  display: flex;
  min-width: 100px;
  position: relative;
  align-items: center;
  border-radius: 12px;
  justify-content: center;

  &.Lang-Select_Complete {
    height: 48px;

    > #Lang-Select_List {
      top: 52px;
    }
  }
`;

interface LangSelectToggleProps {
  colorVariant: 'background' | 'typography';
}

export const LangSelectToggle = styled.button<LangSelectToggleProps>`
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
  color: ${(props) => `${props?.theme?.colors?.[props?.colorVariant] + props?.theme?.opacities?.[80]}`};
  border: 1px solid ${(props) => `${props?.theme?.colors?.[props?.colorVariant] + props?.theme?.opacities?.[20]}`};

  > .country-flag-lang {
    width: 20px;
    height: 20px;
    min-width: 20px;
    border-radius: 14px;
  }

  > .language-selected_data {
    gap: 4px;
    width: 100%;
    flex-grow: 1;
    display: flex;
    max-width: 100%;
    overflow: hidden;
    align-items: center;

    > #language-selected_code {
      max-width: 100%;
      text-align: start;
      min-width: max-content;
    }

    > #language-selected_label {
      max-width: 100%;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis; 
      font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
      font-weight: ${(props) => props?.theme?.typography?.weight?.medium};
      color: ${(props) => `${props?.theme?.colors?.[props?.colorVariant] + props?.theme?.opacities?.[60]}`};
    }
  }

  > .icon-arrow-down_select {
    min-width: 20px;
  }

  &:hover {
    background-color: ${(props) => props?.theme?.colors?.[props?.colorVariant]}0D;
  }
`;

export const LangOptionsList = styled.ul`
  gap: 2px;
  top: 42px;
  opacity: 0;
  width: 100%;
  z-index: 10;
  padding: 4px;
  display: flex;
  list-style: none;
  position: absolute;
  border-radius: 6px;
  pointer-events: none;
  flex-direction: column;
  transition: all .2s ease-in;
  background-color: ${(props) => props?.theme?.colors?.background + props?.theme?.opacities?.[80]};
  border: 1px solid ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[20]}`};

  &[aria-hidden^="false"] {
    opacity: 1;
    pointer-events: all;
  }

  .Lang-Select_Complete & {
    gap: 4px;
    padding: 8px;
    border-radius: 12px;
    background-color: ${(props) => props?.theme?.colors?.background};
  }
`;

export const LangOption = styled.li`
  width: 100%;

  > button {
    gap: 6px;
    width: 100%;
    height: 100%;
    padding: 4px;
    display: flex;
    max-height: 100%;
    border-radius: 6px;
    align-items: center;
    border: 1px solid transparent;
    transition: all .3s ease-out;
    border: 0px solid transparent;
    background-color: transparent;

    > .country-flag-lang {
      width: 16px;
      height: 16px;
      min-width: 16px;
      border-radius: 14px;
    }

    > .option-language_DATA {
      gap: 4px;
      display: flex;
      flex-grow: 100%;
      max-width: 100%;
      overflow: hidden;
      align-items: center;
      flex-direction: row;

      > .option-language_CODE {
        font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
        font-weight: ${(props) => props?.theme?.typography?.weight?.semibold};
        color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[80]}`};
      }
  
      > .option-language_LABEL {
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis; 
        font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
        font-weight: ${(props) => props?.theme?.typography?.weight?.medium};
        color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};
      }
    }
  }

  &:not([aria-selected^="true"]):hover {
    > button {
      background-color: ${(props) => props?.theme?.colors?.typography + (props && '1A')};

      &:not(:disabled) {
        cursor: pointer;
      }
    }
  }

  &[aria-selected^="true"] {
    > button {
      border: 1px solid ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[20]};
      background-color: ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[20]};

      > .option-language_DATA {
        > .option-language_CODE {
          font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
          color: ${(props) => `${props?.theme?.colors?.primary + props?.theme?.opacities?.[80]}`};
        }

        > .option-language_LABEL {
          color: ${(props) => `${props?.theme?.colors?.primary + props?.theme?.opacities?.[60]}`};
        }
      }
    }
  }

  &.Lang-Select_Complete {
    height: 40px;

    > button {
      padding: 0 8px;
      border-radius: 10px;
    }
  }
`;