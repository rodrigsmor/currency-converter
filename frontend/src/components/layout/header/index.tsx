'use client'

import { MouseEvent, useState } from 'react';
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

interface HeaderProps {
  hasScrolled: boolean;
}

export const Header = ({ hasScrolled }: HeaderProps) => {
  const pathname = usePathname();

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  function handleShowSideBar(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowSidebar(true);
  }

  return (
    <HeaderContainer
      data-scrolled={hasScrolled}
    >
      <div className='navigation-wrapper'>
        <Logo logoColor={hasScrolled ? 'dark' : 'light'} />
        <HeaderNav>
          <ul>
            {
              navRoutes.map(({ path, label }, index) => {
                const isSelected = pathname === path;

                return (
                  <li key={index}>
                    <HeaderNavOption
                      href={path}
                      data-variant={hasScrolled ? 'typography' : 'background'}
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
        <ThemeSwitcher isButton={true} color={hasScrolled ? 'typography' : 'background'} />
        <LangSelect style={hasScrolled ? 'background' : 'transparent'} />
        <Searchbar color={hasScrolled ? 'primary' : 'background'} />
      </InteractionsWrapper>
      <IconButton
        onClick={handleShowSideBar}
        label='open the sidebar menu'
        Icon={<Menu4FillIcon size={32} />}
        color={hasScrolled ? 'background' : 'transparent'}
      />
      <MenuSidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />
    </HeaderContainer>
  );
}