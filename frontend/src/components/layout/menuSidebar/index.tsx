'use client';

import { Dispatch } from 'react';

// components
import { Logo } from '@/components/common/logo';
import { Searchbar } from '@/components/forms/searchbar';
import { LangSelect } from '@/components/forms/langSelect';
import { IconButton } from '@/components/buttons/IconButton';
import { NavbarOption } from '@/components/buttons/navbarOption';

// constants
import { navRoutes } from '@/utils/constants/nav-routes';

// Icons
import CloseLineIcon from 'remixicon-react/CloseLineIcon';

// style
import { MenuFooter, MenuHeader, MenuSidebarBody, MenuSidebarContainer, NavigationOptionsList } from './styled';

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
          <Logo logoColor='dark' />
          <IconButton Icon={<CloseLineIcon size={32} />} color='background' />
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