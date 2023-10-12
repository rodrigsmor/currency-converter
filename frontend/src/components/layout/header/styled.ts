import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  z-index: 40;
  height: 68px;
  width: 100vw;
  display: flex;
  padding: 0 16px;
  position: sticky;
  min-width: 100vw;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }

  > .navigation-wrapper {
    gap: 34px;
  }
  
  @media ${(props) => props?.theme?.breakpoints?.medium } {
    height: 74px;
    padding: 0 48px;
  }

  @media ${(props) => props?.theme?.breakpoints?.large } {
    > .icon-button {
      display: none;
    }
  }

  @media ${(props) => props?.theme?.breakpoints?.extraLarge } {
    padding: 0 10dvw;
  }
`;

export const InteractionsWrapper = styled.section`
  gap: 10px;
  display: none;
  align-items: center;
  min-width: 368px;
  max-width: 24%;

  > .searchbar-ui {
    min-width: 120%;
  }

  @media ${(props) => props?.theme?.breakpoints?.large } {
    display: flex;
  }
`;

export const HeaderNav = styled.nav`
  display: none;

  > ul {
    gap: 14px;
    display: flex;
    list-style: none;
    align-items: center;
  }

  @media ${(props) => props?.theme?.breakpoints?.large } {
    display: flex;
  }
`;

export const HeaderNavOption = styled(Link)`
  height: 48px;
  display: flex;
  position: relative;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  color: ${(props) => props?.theme?.colors?.background };
  font-size: ${(props) => props?.theme?.typography?.sizes?.h5 };
  font-weight: ${(props) => props?.theme?.typography?.weight?.regular };

  &::after {
    bottom: 0;
    opacity: 0;
    width: 0px;
    height: 1px;
    content: '';
    display: block;
    position: absolute;
    transition: all .3s ease-in;
    background-color: ${(props) => props?.theme?.colors?.background };
  }

  &:hover {
    &::after {
      width: 100%;
      opacity: 1;
    }
  }

  &[aria-current^="page"] {
    font-weight: ${(props) => props?.theme?.typography?.weight?.bold };

    &::after {
      width: 100%;
      opacity: 1;
    }
  }
`;