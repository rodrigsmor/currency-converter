'use client'

import { MouseEventHandler } from 'react';
import { IconButtonContainer } from './styled'

interface IconButtonProps {
  Icon: JSX.Element;
  color?: 'transparent' | 'background';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({ color = 'background', Icon, onClick }: IconButtonProps) => {
  return (
    <IconButtonContainer
      onClick={onClick}
      className={`icon-button ${color}`}
    >
      { Icon }
    </IconButtonContainer>
  )
}