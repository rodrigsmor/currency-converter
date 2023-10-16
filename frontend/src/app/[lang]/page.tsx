import { Metadata } from 'next';

import { HomePageContent } from '@/components/pages/home';

export const metadata: Metadata = {
  title: 'Home | Currency Converter',
}

interface HomeStaticParams {
  params: { lang: string };
}

export default function Home({ params }: HomeStaticParams) {
  return (
    <HomePageContent />
  )
}