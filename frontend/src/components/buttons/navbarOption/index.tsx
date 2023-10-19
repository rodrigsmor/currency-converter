'use client'

import { useContext } from 'react';
import { usePathname } from 'next/navigation';

// styles
import { NavbarOptionAnchor } from './styled';

// contexts
import { LanguageContext } from '@/contexts/LanguageContextProvider';

// constants
import { NavRoutes } from '@/utils/constants/nav-routes';

// functions
import { normalizePathname } from '@/utils/functions/nomalizePathname';

// i18n
import { useI18n } from '@/i18n/locales/client';

interface NavbarOptionProps {
  route: NavRoutes;
}

export const NavbarOption = ({ route: { label, path, Icon } }: NavbarOptionProps) => {
  const pathname = usePathname();
  const { lang } = useContext(LanguageContext)

  const pathnameNormalized = normalizePathname(pathname, lang);
  const isSelected = (pathnameNormalized === path);
  
  const t = useI18n()

  return (
    <NavbarOptionAnchor
      href={path}
      {...(isSelected && { "aria-current": "page" })}
    >
      { Icon }
      <span>{ t(label) }</span>
    </NavbarOptionAnchor>
  );
}