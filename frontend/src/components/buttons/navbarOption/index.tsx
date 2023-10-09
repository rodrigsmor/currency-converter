'use client'

import { usePathname } from 'next/navigation';

// styles
import { NavbarOptionAnchor } from './styled';

// constants
import { NavRoutes } from '@/utils/constants/nav-routes';

interface NavbarOptionProps {
  route: NavRoutes;
}

export const NavbarOption = ({ route: { label, path, Icon } }: NavbarOptionProps) => {
  const pathname = usePathname();
  const isSelected = pathname === path;

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