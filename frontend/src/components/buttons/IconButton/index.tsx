'use client'

import { MouseEventHandler } from 'react';
import { IconButtonContainer } from './styled'

interface IconButtonProps {
  label?: string;
  Icon: JSX.Element;
  color?: 'transparent' | 'background' | 'background-20';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({
  color = 'background',
  Icon,
  onClick,
  label = 'Icon button',
}: IconButtonProps) => {
  return (
    <IconButtonContainer
      title={label}
      onClick={onClick}
      aria-label={label}
      className={`icon-button ${color}`}
    >
      { Icon }
    </IconButtonContainer>
  )
}