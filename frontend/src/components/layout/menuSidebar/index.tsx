'use client';

import { Dispatch } from 'react';
import { MenuFooter, MenuHeader, MenuSidebarBody, MenuSidebarContainer } from './styled';

interface MenuSidebarProps {
  showSidebar: boolean;
  toggleSidebar: Dispatch<boolean>;
}

export const MenuSidebar = ({ showSidebar, toggleSidebar }: MenuSidebarProps) => {
  return (
    <MenuSidebarContainer
      aria-hidden={showSidebar}
    >
      <div className='menuside_topContent'>
        <MenuHeader>
          header
        </MenuHeader>
        <MenuSidebarBody>
          
        </MenuSidebarBody>
      </div>

      <MenuFooter>
        footer
      </MenuFooter>
    </MenuSidebarContainer>
  )
}