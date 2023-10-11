import { Metadata } from 'next';

// components
import { Header } from '@/components/layout/header';

// style
import { PageContainer } from '@/styles/common/styled';
import { HomePageContent } from '@/components/pages/home';

export const metadata: Metadata = {
  title: 'Home | Currency Converter',
}

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <HomePageContent />
    </PageContainer>
  )
}
