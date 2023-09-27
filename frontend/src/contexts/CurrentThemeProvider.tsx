'use client'

import { Dispatch, PropsWithChildren, createContext, useEffect, useState } from 'react';

export interface CurrentThemeProps {
  isLightTheme: boolean;
  currentTheme: 'light' | 'dark' ;
  setCurrentTheme: Dispatch<'light' | 'dark'>;
}

export const CurrentTheme = createContext<CurrentThemeProps>({
  currentTheme: 'light',
  setCurrentTheme: () => {},
  isLightTheme: true,
});

export function CurrentThemeProvider({ children }: PropsWithChildren) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(() => {
    let storageValue = null;

    if (typeof window !== 'undefined') {
      storageValue = localStorage.getItem('theme@currency-converter');
    }

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    else {
      return 'light';
    }
  });

  useEffect(() => {
    localStorage.setItem('theme@currency-converter', JSON.stringify(currentTheme));
  }, [currentTheme])

  return (
    <CurrentTheme.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        isLightTheme: currentTheme === 'light',
      }}
    >
      {children}
    </CurrentTheme.Provider>
  )
}