import { getStaticParams } from '@/i18n/locales/server'
import { I18nProviderClient } from '@/i18n/locales/client'
import { CurrentThemeProvider } from '@/contexts/CurrentThemeProvider'
import { LanguageContextProvider } from '@/contexts/LanguageContextProvider'
import StyledComponentsRegistry from '@/configs/libs/StyledComponentsRegistry'

import '/node_modules/flag-icons/css/flag-icons.min.css';

interface RootProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function SearchLayout({
  children,
  params
}: RootProps) {
  return (
    <StyledComponentsRegistry>
      <CurrentThemeProvider>
        <LanguageContextProvider>
          <I18nProviderClient locale={params.locale}>
            {children}
          </I18nProviderClient>
        </LanguageContextProvider>
      </CurrentThemeProvider>
    </StyledComponentsRegistry>
  )
}

export function generateStaticParams() {
  return getStaticParams()
}