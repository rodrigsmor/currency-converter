import { PropsWithChildren, createContext, useEffect, useState } from 'react';

interface CurrentThemeProps {
  currentTheme: 'light' | 'dark' | string;
  setCurrentTheme: (value: 'light' | 'dark' | string) => void;
}

export const CurrentTheme = createContext<CurrentThemeProps>({
  currentTheme: 'light',
  setCurrentTheme: () => { }
});

export function CurrentThemeProvider({ children }: PropsWithChildren) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | string>(() => {
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
      }}
    >
      {children}
    </CurrentTheme.Provider>
  )
}