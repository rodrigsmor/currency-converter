'use client'

import { useMemo, useState } from 'react'

// i18n
import { useI18n } from '@/i18n/locales/client'

// utils
import { currencies_mock } from '@/utils/mocks/currencies'
import { recent_searches_mock } from '@/utils/mocks/recent-searches'

// types
import { Currency } from '@/utils/@types/currency'
import { FeatureSearchOption } from '@/utils/@types/feature-search-option'

// components
import { Searchbar } from '../searchbar'
import { FeatureSearchSelect } from '../featureSearchSelect'
import { SearchResultOption } from '@/components/buttons/searchResultOption'

// constants
import { searchResultsFeatures } from '@/utils/constants/search-results-features'

// styles
import { SearchResultBoxWrapper, SearchResultSection, SearchResultsDropbox } from './styled'

// icons
import SearchLineIcon from 'remixicon-react/SearchLineIcon'

interface SearchResultBoxProps {
  
}

export const SearchResultBox = ({  }: SearchResultBoxProps) => {
  const t = useI18n()

  const [searchValue, setSearchValue] = useState<string>('');
  const [featureSelected, setFeatureSelected] = useState<FeatureSearchOption | null>(null);

  const searchMatches = useMemo<Currency[]>(() => {
    const currenciesItems = [...currencies_mock];
    let searchQuery = searchValue.toLowerCase();

    return currenciesItems.filter((currency) => (
      currency.flag_code.toLowerCase().includes(searchQuery) ||
      currency.currency_name.toLowerCase().includes(searchQuery) ||
      currency.currency_code.toLowerCase().includes(searchQuery) ||
      currency.country_name.toLowerCase().includes(searchQuery)
    ));
  }, [ searchValue ])

  return (
    <SearchResultBoxWrapper
      className='search-result-box'
    >
      <header className='SearchResult_HeaderSearchbar'>
        <Searchbar
          id='SearchResultBox_Searchbar'
          color='background-full'
          value={searchValue}
          placeholder={t('searchbar.currency')}
          onChange={event => setSearchValue(event.target.value)}
        />
      </header>
      <SearchResultsDropbox>
        {
          (searchValue?.length > 0) ? (
            <SearchResultSection key='SearchsMatches_Results'>
              <h3 className='SearchResult_SectionTitle'>{t('search.result.recentSection')}</h3>
              <ul className='SearchResult_List'>
                {
                  searchMatches.length > 0 ? (
                    searchMatches.map((currency, index) => {
                      return (
                        <li key={index}>
                          <SearchResultOption isRecent={false} search={{
                            country_flag: currency.flag_code,
                            currencyCode: currency.currency_code,
                            path: featureSelected?.path || 'convert-currencies',
                            type_label: featureSelected?.optionName || 'header.converter',
                            value: currency.currency_name,
                          }} />
                        </li>
                      )
                    })
                  ) : (
                    <li className='SearchResult_EmptyState'>
                      <SearchLineIcon size={48} className='currency-selector-empty' />
                      <p>{t('search.result.empty')} <strong>&ldquo;{searchValue}&rdquo;</strong>.</p>
                    </li>
                  )
                }
              </ul>
            </SearchResultSection>
          ) : (
            <SearchResultSection key='RecentSearches_Results'>
              <h3 className='SearchResult_SectionTitle'>{t('search.result.results')}</h3>
              <ul className='SearchResult_List'>
                {
                  recent_searches_mock.map((search, index) => {
                    return (
                      <li key={index}>
                        <SearchResultOption isRecent={true} search={search} />
                      </li>
                    )
                  })
                }
              </ul>
            </SearchResultSection>
          )
        }
        <SearchResultSection>
          <h3 className='SearchResult_SectionTitle'>{t('search.result.feature')}</h3>
          <div className='SearchResult_Features'>
            {
              searchResultsFeatures.map((feature) => {
                return (
                  <FeatureSearchSelect
                    feature={feature}
                    key={feature.path}
                    onSelect={(feature) => setFeatureSelected(feature)}
                    isChecked={featureSelected?.path === feature?.path}
                  />
                )
              })
            }
          </div>
        </SearchResultSection>
      </SearchResultsDropbox>
    </SearchResultBoxWrapper>
  )
}