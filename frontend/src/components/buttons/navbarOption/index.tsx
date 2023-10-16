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

interface NavbarOptionProps {
  route: NavRoutes;
}

export const NavbarOption = ({ route: { label, path, Icon } }: NavbarOptionProps) => {
  const pathname = usePathname();
  const { lang } = useContext(LanguageContext)

  const pathnameNormalized = normalizePathname(pathname, lang);
  const isSelected = (pathnameNormalized === path);

  return (
    <NavbarOptionAnchor
      href={path}
      {...(isSelected && { "aria-current": "page" })}
    >
      { Icon }
      <span>{ label }</span>
    </NavbarOptionAnchor>
  );
}