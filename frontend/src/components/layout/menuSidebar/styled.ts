import styled from 'styled-components';

export const MenuSidebarContainer = styled.aside`
  top: 0;
  right: 0;
  gap: 48px;
  z-index: 50;
  width: 93dvw;
  display: flex;
  height: 100dvh;
  position: fixed;
  align-items: center;
  padding: 0 16px 24px;
  pointer-events: none;
  flex-direction: column;
  transform: translateX(100dvw);
  justify-content: space-between;
  transition: all .3s ease-in-out;
  box-shadow: ${(props) => props?.theme?.boxShadow?.main };
  background-color: ${(props) => props?.theme?.colors?.background };

  > .menu-sidebar_topContent {
    gap: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &[aria-hidden^="false"] {
    pointer-events: all;
    transform: translateX(0dvw);
  }

  @media ${(props) => props?.theme?.breakpoints?.medium } {
    width: 96dvw;
    padding: 0 48px 24px;
  }

  @media ${(props) => props?.theme?.breakpoints?.large } {
    display: none;

    &[aria-hidden^="false"] {
      display: none;
    }
  }
`;

export const MenuHeader = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 74px;
  display: flex;
  position: sticky;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props?.theme?.colors?.background };
`;

export const MenuSidebarBody = styled.nav`
  gap: 38px;
  display: flex;
  flex-direction: column;

  > .menu-sidebar_BodyForms {
    gap: 12px;
    display: flex;
    flex-direction: column;
  }
`;

export const NavigationOptionsList = styled.ul`
  gap: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuFooter = styled.footer`

`;