'use client'

import { useRef, useState } from 'react';

// style
import { PageBodyContent, PageContainer, TopPageHeader } from '@/styles/common/styled';
import { SearchCountriesList, SearchListSectionTitle, SearchPageMainContainer } from './styled';

// components
import { Header } from '@/components/layout/header';

// i18n
import { useI18n } from '@/i18n/locales/client';
import { alphabetical_countries_mock } from '@/utils/mocks/alphabetical-countries';
import { CurrencyCard } from '@/components/common/currencyCard';

export function SearchPageContent() {
  const pageRef = useRef<HTMLDivElement>(null)

  const [hasScrolled, setHasScrolled] = useState<boolean>(
    pageRef && pageRef.current ? pageRef.current.scrollTop > 10 : false
  );

  const t = useI18n()

  return (
    <PageContainer
      ref={pageRef}
      onScroll={(e) => {
        setHasScrolled((e.currentTarget.scrollTop > 10))
      }}
    >
      <Header hasScrolled={hasScrolled} />
      <SearchPageMainContainer>
        <TopPageHeader>
          <hgroup>
            <h1>{t('searchPage.top.h1')}</h1>
            <h2>{t('searchPage.top.h2')}</h2>
          </hgroup>
        </TopPageHeader>
        <PageBodyContent className='SearchPageContent'>
          <SearchListSectionTitle>
            {t('app.countries.section')}
          </SearchListSectionTitle>
          <SearchCountriesList>
            {
              alphabetical_countries_mock.map((countryGroup, index) => {
                return (
                  <section key={index} className='AlphabeticalCountry_Group'>
                    <h4>{ countryGroup.group_name }</h4>
                    <ul className="AlphabeticalCountry_GroupList">
                      {
                        countryGroup.countries.map((country) => {
                          return (
                            <li key={country.currency_code}>
                              <CurrencyCard
                                isCountry={true}
                                currency={country}
                              />
                            </li>
                          )
                        })
                      }
                    </ul>
                  </section>
                )
              })
            }
          </SearchCountriesList>
        </PageBodyContent>
      </SearchPageMainContainer>
    </PageContainer>
  )
}