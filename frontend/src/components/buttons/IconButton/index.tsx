'use client'

import { IconButtonContainer } from './styled'

interface IconButtonProps {
  Icon: JSX.Element;
  color?: 'transparent' | 'background';
}

export const IconButton = ({ color = 'background', Icon }: IconButtonProps) => {
  return (
    <IconButtonContainer className={`icon-button ${color}`}>
      { Icon }
    </IconButtonContainer>
  )
}