'use client';

import { Dispatch } from 'react';

// components
import { Logo } from '@/components/common/logo';
import { Searchbar } from '@/components/forms/searchbar';
import { LangSelect } from '@/components/forms/langSelect';
import { IconButton } from '@/components/buttons/IconButton';
import { NavbarOption } from '@/components/buttons/navbarOption';
import { ThemeSwitcher } from '@/components/forms/themeSwitcher';

// constants
import { navRoutes } from '@/utils/constants/nav-routes';

// Icons
import CloseLineIcon from 'remixicon-react/CloseLineIcon';

// style
import { FooterCredits, MenuFooter, MenuHeader, MenuSidebarBody, MenuSidebarContainer, NavigationOptionsList } from './styled';

// i18n
import { useI18n } from '@/i18n/locales/client';
import { SearchResultBox } from '@/components/forms/searchResultBox';

interface MenuSidebarProps {
  showSidebar: boolean;
  toggleSidebar: Dispatch<boolean>;
}

export const MenuSidebar = ({ showSidebar, toggleSidebar }: MenuSidebarProps) => {
  const t = useI18n()

  return (
    <MenuSidebarContainer
      aria-hidden={!showSidebar}
    >
      <div className='menu-sidebar_topContent'>
        <MenuHeader>
          <Logo logoColor='dark' />
          <IconButton label={t('header.sidebar-close')} onClick={() => toggleSidebar(!showSidebar)} Icon={<CloseLineIcon size={32} />} color='background' />
        </MenuHeader>
        <MenuSidebarBody>
          <section className='menu-sidebar_BodyForms'>
            <SearchResultBox
              style='separated'
              searchBarStyle='primary'
              placeholder='searchbar.placeholder'
            />
            <LangSelect style='background' showCountryLabel={true} />
          </section>
          <NavigationOptionsList>
            { navRoutes.map((route, index) => <NavbarOption key={index} route={route} />) }
          </NavigationOptionsList>
        </MenuSidebarBody>
      </div>
      <MenuFooter>
        <ThemeSwitcher/>
        <FooterCredits>
          <p>App Version - v0.0.0</p>
          <span>{t('header.credits')}</span>
        </FooterCredits>
      </MenuFooter>
    </MenuSidebarContainer>
  )
}