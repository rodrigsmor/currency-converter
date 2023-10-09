'use client';

import { Dispatch } from 'react';

// components
import { Searchbar } from '@/components/forms/searchbar';
import { LangSelect } from '@/components/forms/langSelect';

// constants
import { navRoutes } from '@/utils/constants/nav-routes';

// style
import { MenuFooter, MenuHeader, MenuSidebarBody, MenuSidebarContainer, NavigationOptionsList } from './styled';
import { NavbarOption } from '@/components/buttons/navbarOption';

interface MenuSidebarProps {
  showSidebar: boolean;
  toggleSidebar: Dispatch<boolean>;
}

export const MenuSidebar = ({ showSidebar, toggleSidebar }: MenuSidebarProps) => {
  return (
    <MenuSidebarContainer
      aria-hidden={showSidebar}
    >
      <div className='menu-sidebar_topContent'>
        <MenuHeader>
          header
        </MenuHeader>
        <MenuSidebarBody>
          <section className='menu-sidebar_BodyForms'>
            <Searchbar />
            <LangSelect style='background' showCountryLabel={true} />
          </section>
          <NavigationOptionsList>
            { navRoutes.map((route, index) => <NavbarOption key={index} route={route} />) }
          </NavigationOptionsList>
        </MenuSidebarBody>
      </div>
      <MenuFooter>
        footer
      </MenuFooter>
    </MenuSidebarContainer>
  )
}