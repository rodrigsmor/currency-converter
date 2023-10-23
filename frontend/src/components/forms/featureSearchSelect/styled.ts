import styled from 'styled-components';

export const FeatureSearchSelectContainer = styled.button`
  gap: 10px;
  height: 48px;
  display: flex;
  padding: 0 12px;
  max-height: 48px;
  align-items: center;
  flex-direction: row;
  border-radius: 14px;
  transition: all .2s ease-in;
  background-color: ${(props) => props?.theme?.colors?.background};
  color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};
  border: 1px solid ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[20]};

  > p.Feature_OptionName {
    flex-grow: 1;
    text-align: start;
    font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
    font-weight: ${(props) => props?.theme?.typography?.weight?.semibold};
    color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[80]}`};
  }

  &:hover {
    background-color: ${(props) => props?.theme?.colors?.typography}0D;
  }

  &[aria-checked^="true"] {
    color: ${(props) => `${props?.theme?.colors?.primary + props?.theme?.opacities?.[60]}`};
    border: 1px solid ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[20]};
    background-color: ${(props) => props?.theme?.colors?.primary}1a;

    > p.Feature_OptionName {
      font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
      color: ${(props) => `${props?.theme?.colors?.primary + props?.theme?.opacities?.[80]}`};
    }
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`;