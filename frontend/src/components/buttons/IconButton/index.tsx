'use client'

import { MouseEventHandler } from 'react';
import { IconButtonContainer } from './styled'

interface IconButtonProps {
  label: string;
  Icon: JSX.Element;
  color?: 'transparent' | 'background';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({
  color = 'background',
  Icon,
  onClick,
  label,
}: IconButtonProps) => {
  return (
    <IconButtonContainer
      onClick={onClick}
      aria-label={label}
      className={`icon-button ${color}`}
    >
      { Icon }
    </IconButtonContainer>
  )
}