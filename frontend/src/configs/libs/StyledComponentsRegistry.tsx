'use client'

import { theme } from '@/styles/theme';
import React, { useState } from 'react';
import { GlobalStyle } from '@/styles/globalStyle';
import { useServerInsertedHTML } from 'next/navigation';
import { CurrentThemeProvider } from '@/contexts/CurrentThemeProvider';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import { LanguageContextProvider } from '@/contexts/LanguageContextProvider';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <LanguageContextProvider>
        <CurrentThemeProvider>
          <ThemeProvider theme={theme.light}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </CurrentThemeProvider>
      </LanguageContextProvider>
    </StyleSheetManager>
  )
}