import { MouseEvent, useContext } from 'react';
import SunLineIcon from 'remixicon-react/SunLineIcon';
import { ThemeSwitcherButton, ThemeSwitcherContainer } from './styled';
import { CurrentTheme, CurrentThemeProps } from '@/contexts/CurrentThemeProvider';

interface ThemeSwitcherProps {
  isButton?: boolean;
}

export const ThemeSwitcher = ({ isButton = false }: ThemeSwitcherProps) => {
  const { setCurrentTheme, isLightTheme } = useContext<CurrentThemeProps>(CurrentTheme);

  function switchTheme(event: MouseEvent<HTMLButtonElement>) {
    event?.preventDefault();

    setCurrentTheme(isLightTheme ? 'dark' : 'light')
  }

  if (isButton) {
    return (
      <ThemeSwitcherButton onClick={switchTheme} $colorType='background'>
        <SunLineIcon size={20} />
        { isLightTheme ? 'light' : 'dark' }
      </ThemeSwitcherButton>
    )
  }

  return (
    <ThemeSwitcherContainer>
    </ThemeSwitcherContainer>
  )
}