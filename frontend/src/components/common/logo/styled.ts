import styled from 'styled-components';

export const SvgContainer = styled.svg.attrs(props => ({ className: props.className }))`
  width: 40px;
  height: 40px;

  > path {
    fill: ${(props) => props?.theme?.colors?.background };
  }

  &.dark {
    > path {
      fill: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[80]}` };
    }
  }

  @media ${(props) => props?.theme?.breakpoints?.large } {
    width: 46px;
    height: 46px;
  }
`;