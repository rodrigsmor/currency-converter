'use client'

import { usePathname } from 'next/navigation';
import { Logo } from '@/components/common/logo';
import { navRoutes } from '@/utils/constants/nav-routes';
import { Searchbar } from '@/components/forms/searchbar';
import Menu4FillIcon from 'remixicon-react/Menu4FillIcon';
import { LangSelect } from '@/components/forms/langSelect';
import { IconButton } from '@/components/buttons/IconButton';
import { ThemeSwitcher } from '@/components/forms/themeSwitcher';
import { HeaderContainer, HeaderNav, HeaderNavOption, InteractionsWrapper } from './styled';

export const Header = () => {
  const pathname = usePathname();

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
      <IconButton color='transparent' Icon={<Menu4FillIcon size={32} />} />
    </HeaderContainer>
  );
}