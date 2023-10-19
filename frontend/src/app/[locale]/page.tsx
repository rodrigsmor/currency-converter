import { Metadata } from 'next';

import { HomePageContent } from '@/components/pages/home';
import { setStaticParamsLocale } from 'next-international/server';

export const metadata: Metadata = {
  title: 'Home | Currency Converter',
}

interface HomeStaticParams {
  params: { locale: string };
}

export default function Home({ params }: HomeStaticParams) {
  setStaticParamsLocale(params.locale)

  return (
    <HomePageContent />
  )
}