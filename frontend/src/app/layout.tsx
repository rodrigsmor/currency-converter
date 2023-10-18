import type { Metadata } from 'next'
import Icon from '@/assets/images/icon.svg';
import { I18nProviderClient } from '@/i18n/locales/client';
import { CurrentThemeProvider } from '@/contexts/CurrentThemeProvider';
import { LanguageContextProvider } from '@/contexts/LanguageContextProvider';
import StyledComponentsRegistry from '@/configs/libs/StyledComponentsRegistry';

import '/node_modules/flag-icons/css/flag-icons.min.css';

export const metadata: Metadata = {
  icons: [{ rel: 'icon', url: Icon.src }]
}

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
              <I18nProviderClient locale={'en'}>
                {children}
              </I18nProviderClient>
            </LanguageContextProvider>
          </CurrentThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
