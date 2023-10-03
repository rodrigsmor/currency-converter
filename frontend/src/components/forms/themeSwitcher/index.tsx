import { MouseEvent, useContext } from 'react';
import SunLineIcon from 'remixicon-react/SunLineIcon';
import MoonLineIcon from 'remixicon-react/MoonLineIcon';
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

  const DarkIcon = () => <MoonLineIcon aria-label='dark theme icon' size={20} />
  const LightIcon = () => <SunLineIcon aria-label='light theme icon' size={20} />

  if (isButton) {
    return (
      <ThemeSwitcherButton
        onClick={switchTheme}
        $colorType='background'
        className='theme-switcher_Button'
      >
        {isLightTheme ? <LightIcon /> : <DarkIcon /> }
        { isLightTheme ? 'light' : 'dark' }
      </ThemeSwitcherButton>
    )
  }

  return (
    <ThemeSwitcherContainer>
    </ThemeSwitcherContainer>
  )
}