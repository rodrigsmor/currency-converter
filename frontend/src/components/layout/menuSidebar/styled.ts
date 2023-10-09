import styled from 'styled-components';

export const MenuSidebarContainer = styled.aside`
  gap: 48px;
  top: 0;
  right: 0;
  z-index: 50;
  width: 93dvw;
  display: flex;
  height: 100dvh;
  position: fixed;
  align-items: center;
  padding: 0 24px 24px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${(props) => props?.theme?.boxShadow?.main };
  background-color: ${(props) => props?.theme?.colors?.background };

  > .menu-sidebar_topContent {
    gap: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media ${(props) => props?.theme?.breakpoints?.medium } {
    width: 91dvw;
  }

  @media ${(props) => props?.theme?.breakpoints?.large } {
    display: none;
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