import Link from 'next/link';
import styled from 'styled-components';

export const NavigationBoxContainer = styled.nav`
  height: 99px;
  padding: 14px;
  position: absolute;
  border-radius: 20px;
  top: calc(-99px / 2);
  width: calc(100dvw - 32px);
  box-shadow: ${(props) => props?.theme?.boxShadow?.main};
  background-color: ${(props) => props?.theme?.colors?.background};

  @media ${(props) => props?.theme?.breakpoints?.medium} {
    width: calc(100dvw - 96px);
  }

  @media ${(props) => props?.theme?.breakpoints?.large} {
    width: 38dvw;
  }
`;

export const NavigationBoxList = styled.ul`
  gap: 8px;
  width: 100%;
  height: 100%;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);

  > li {
    max-width: 100%;
  }
`;

export const NavigationBoxOption = styled(Link)`
  gap: 6px;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
  transition: all .3s ease;
  background-color: ${(props) => props?.theme?.colors?.background};

  > figure {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    color: ${(props) => props?.theme?.colors?.primary};
    background-color: ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[20]};
  }

  > p {
    font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
    font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
    color: ${(props) => props?.theme?.colors?.typography + props?.theme?.opacities?.[60]};
  }

  &:hover {
    opacity: .4;
  }
`;