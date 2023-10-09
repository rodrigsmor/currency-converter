import Link from 'next/link';
import styled from 'styled-components';

export const NavbarOptionAnchor = styled(Link)`
  gap: 16px;
  height: 48px;
  display: flex;
  padding: 0 14px;
  position: relative;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  > svg {
    z-index: 2;
    min-width: 30px;
    position: relative;
    color: ${(props) => props?.theme?.colors?.primary};
  }

  > span {
    z-index: 2;
    position: relative;
    text-decoration: none;
    font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
    font-weight: ${(props) => props?.theme?.typography?.weight?.medium};
    color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[80]};
  }

  &::after {
    right: 0;
    z-index: 1;
    content: '';
    opacity: .6;
    height: 100%;
    position: absolute;
    border-radius: 12px;
    width: calc(100% - 29px);
    transition: all .3s ease-out;
    background-color: transparent;
  }
  
  &[aria-current^="page"] {
    pointer-events: none;
    
    > span {
      font-weight: ${(props) => props?.theme?.typography?.weight?.semibold};
      color: ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[80]};
    }

    &::after {
      background-color: ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[20]};
    }
  }

  &:not([aria-current^="page"]):hover {
    &::after {
      background-color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[20]};
    }
  }
`;