import { Metadata } from 'next';
import { SearchPageContent } from '@/components/pages/search';
import { setStaticParamsLocale } from 'next-international/server';

interface SearchStaticParams {
  params: { locale: string };
}

export const metadata: Metadata = {
  title: 'Search | Currency Converter',
}

export default function Search({ params }: SearchStaticParams) {
  setStaticParamsLocale(params.locale)

  return (
    <SearchPageContent />
  )
}