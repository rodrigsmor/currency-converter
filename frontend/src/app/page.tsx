import { Metadata } from 'next';

import { getStaticParams } from '@/i18n/locales/server';
import { HomePageContent } from '@/components/pages/home';
import { setStaticParamsLocale } from 'next-international/server';

export const metadata: Metadata = {
  title: 'Home | Currency Converter',
}

export default function Home({ params: { locale = 'en' } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)

  return (
    <HomePageContent />
  )
}

export function generateStaticParams() {
  return getStaticParams()
}