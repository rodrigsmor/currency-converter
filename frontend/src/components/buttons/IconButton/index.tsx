'use client'

import { MouseEventHandler } from 'react';

// style
import { IconButtonContainer } from './styled'

interface IconButtonProps {
  label?: string;
  Icon: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: 'transparent' | 'background' | 'background-20';
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const IconButton = ({
  color = 'background',
  Icon,
  onClick,
  label = 'Icon button',
  attributes
}: IconButtonProps) => {
  return (
    <IconButtonContainer
      title={label}
      onClick={onClick}
      aria-label={label}
      className='icon-button'
      data-color-variant={color}
      {...attributes}
    >
      { Icon }
    </IconButtonContainer>
  )
}