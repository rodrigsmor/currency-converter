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
  params
}: {
  children: React.ReactNode,
  params: { locale?: string }
}) {
  return (
    <html lang={params.locale || 'en'}>
      <body>
        <StyledComponentsRegistry>
          <CurrentThemeProvider>
            <LanguageContextProvider>
              <I18nProviderClient locale={params?.locale || 'en'}>
                {children}
              </I18nProviderClient>
            </LanguageContextProvider>
          </CurrentThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
