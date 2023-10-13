import { Metadata } from 'next';

import { HomePageContent } from '@/components/pages/home';

export const metadata: Metadata = {
  title: 'Home | Currency Converter',
}

export default function Home() {
  return (
    <HomePageContent />
  )
}
