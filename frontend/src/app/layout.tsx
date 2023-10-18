import type { Metadata } from 'next'
import Icon from '@/assets/images/icon.svg';
import { CurrentThemeProvider } from '@/contexts/CurrentThemeProvider'
import { LanguageContextProvider } from '@/contexts/LanguageContextProvider'
import StyledComponentsRegistry from '@/configs/libs/StyledComponentsRegistry'

export const metadata: Metadata = {
  icons: [{ rel: 'icon', url: Icon.src }]
}

import '/node_modules/flag-icons/css/flag-icons.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <CurrentThemeProvider>
            <LanguageContextProvider>
              {children}
            </LanguageContextProvider>
          </CurrentThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
