'use client'

import { usePathname } from 'next/navigation';
import { Logo } from '@/components/common/logo';
import { navRoutes } from '@/utils/constants/nav-routes';
import { Searchbar } from '@/components/forms/searchbar';
import Menu4FillIcon from 'remixicon-react/Menu4FillIcon';
import { LangSelect } from '@/components/forms/langSelect';
import { IconButton } from '@/components/buttons/IconButton';
import { ThemeSwitcher } from '@/components/forms/themeSwitcher';
import { HeaderContainer, HeaderNav, HeaderNavOption } from './styled';

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
                    <HeaderNavOption className={`${isSelected && 'selected'}`} href={path}>
                      { label }
                    </HeaderNavOption>
                  </li>
                )
              })
            }
          </ul>
        </HeaderNav>
      </div>
      <div className='details-container'>
        <ThemeSwitcher isButton={true} />
        <LangSelect />
        <Searchbar color='background' />
        <IconButton color='transparent' Icon={<Menu4FillIcon size={32} />} />
      </div>
    </HeaderContainer>
  );
}