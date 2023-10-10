import { MouseEvent, useContext } from 'react';
import SunLineIcon from 'remixicon-react/SunLineIcon';
import MoonLineIcon from 'remixicon-react/MoonLineIcon';
import { ThemeSwitcherButton, ThemeSwitcherContainer, ThemeSwitcherLabelIcon, ThemeSwitcherToggleWrapper } from './styled';
import { CurrentTheme, CurrentThemeProps } from '@/contexts/CurrentThemeProvider';

interface ThemeSwitcherProps {
  isButton?: boolean;
}

const DarkIcon = () => <MoonLineIcon aria-label='dark theme' size={20} />
const LightIcon = () => <SunLineIcon aria-label='light theme' size={20} />

export const ThemeSwitcher = ({ isButton = false }: ThemeSwitcherProps) => {
  const { setCurrentTheme, currentTheme, isLightTheme } = useContext<CurrentThemeProps>(CurrentTheme);

  function switchTheme(event: MouseEvent<HTMLButtonElement>) {
    event?.preventDefault();

    setCurrentTheme(isLightTheme ? 'dark' : 'light')
  }

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
    <ThemeSwitcherContainer className='theme-switcher_Toggle' role='switch' aria-checked={false} tabIndex={0}>
      <ThemeSwitcherLabelIcon aria-disabled={isLightTheme} aria-label='Light theme' htmlFor="themeSwitcher_LightTheme">
        <LightIcon />
      </ThemeSwitcherLabelIcon>
      <ThemeSwitcherToggleWrapper>
        <input type="radio" name="theme" id="themeSwitcher_LightTheme" checked={isLightTheme} onChange={() => setCurrentTheme('light')} />
        <input type="radio" name="theme" id="themeSwitcher_DarkTheme" checked={!isLightTheme} onChange={() => setCurrentTheme('dark')} />
        <span aria-hidden="true" data-current-theme={currentTheme}></span>
      </ThemeSwitcherToggleWrapper>
      <ThemeSwitcherLabelIcon aria-disabled={!isLightTheme} aria-label='Dark theme' htmlFor="themeSwitcher_DarkTheme">
        <DarkIcon />
      </ThemeSwitcherLabelIcon>
    </ThemeSwitcherContainer>
  )
}