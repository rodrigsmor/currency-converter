'use client'

import { MouseEvent, useContext, useState } from 'react';
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

// contexts
import { LanguageContext } from '@/contexts/LanguageContextProvider';

// utils
import { normalizePathname } from '@/utils/functions/nomalizePathname';

// i18n
import { useI18n } from '@/i18n/locales/client';

interface HeaderProps {
  hasScrolled: boolean;
}

export const Header = ({ hasScrolled }: HeaderProps) => {
  const pathname = usePathname();

  const { lang } = useContext(LanguageContext);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  function handleShowSideBar(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowSidebar(true);
  }

  const t = useI18n()

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
                const pathnameNormalized = normalizePathname(pathname, lang)
                const isSelected = (pathnameNormalized === path);

                return (
                  <li key={index}>
                    <HeaderNavOption
                      href={`/${lang}${path}`}
                      data-variant={hasScrolled ? 'typography' : 'background'}
                      {...(isSelected && { "aria-current": "page" })}
                    >
                      { t(label) }
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
        <Searchbar placeholder={t('searchbar.placeholder')} color={hasScrolled ? 'primary' : 'background'} />
      </InteractionsWrapper>
      <IconButton
        onClick={handleShowSideBar}
        label={t('header.sidebar-open')}
        Icon={<Menu4FillIcon size={32} />}
        color={hasScrolled ? 'background' : 'transparent'}
      />
      <MenuSidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />
    </HeaderContainer>
  );
}