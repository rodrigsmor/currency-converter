'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';

// components
import { MenuSidebar } from '../menuSidebar';
import { Logo } from '@/components/common/logo';
import { navRoutes } from '@/utils/constants/nav-routes';
import { Searchbar } from '@/components/forms/searchbar';
import { LangSelect } from '@/components/forms/langSelect';
import { IconButton } from '@/components/buttons/IconButton';
import { ThemeSwitcher } from '@/components/forms/themeSwitcher';

// icons
import Menu4FillIcon from 'remixicon-react/Menu4FillIcon';

// styles
import { HeaderContainer, HeaderNav, HeaderNavOption, InteractionsWrapper } from './styled';

export const Header = () => {
  const pathname = usePathname();

  const [showSidebar, setSidebar] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <div className='navigation-wrapper'>
        <Logo logoColor='light' />
        <HeaderNav>
          <ul>
            {
              navRoutes.map(({ path, label }, index) => {
                const isSelected = pathname === path;

                return (
                  <li key={index}>
                    <HeaderNavOption
                      href={path}
                      {...(isSelected && { "aria-current": "page" })}
                    >
                      { label }
                    </HeaderNavOption>
                  </li>
                )
              })
            }
          </ul>
        </HeaderNav>
      </div>
      <InteractionsWrapper>
        <ThemeSwitcher isButton={true} />
        <LangSelect />
        <Searchbar color='background' />
      </InteractionsWrapper>
      <IconButton label='open the sidebar menu' color='transparent' Icon={<Menu4FillIcon size={32} />} />
      <MenuSidebar showSidebar={showSidebar} toggleSidebar={setSidebar} />
    </HeaderContainer>
  );
}