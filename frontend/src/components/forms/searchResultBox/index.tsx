'use client'

import { useState } from 'react'

// i18n
import { useI18n } from '@/i18n/locales/client'

// utils
import { recent_searches_mock } from '@/utils/mocks/recent-searches'

// components
import { Searchbar } from '../searchbar'
import { FeatureSearchSelect } from '../featureSearchSelect'
import { SearchResultOption } from '@/components/buttons/searchResultOption'

// styles
import { SearchResultBoxWrapper, SearchResultSection, SearchResultsDropbox } from './styled'

// constants
import { searchResultsFeatures } from '@/utils/constants/search-results-features'

// types
import { FeatureSearchOption } from '@/utils/@types/feature-search-option'

interface SearchResultBoxProps {
  
}

export const SearchResultBox = ({  }: SearchResultBoxProps) => {
  const t = useI18n()

  const [searchValue, setSearchValue] = useState<string>('');
  const [featureSelected, setFeatureSelected] = useState<FeatureSearchOption | null>(null);

  return (
    <SearchResultBoxWrapper
      className='search-result-box'
    >
      <header className='SearchResult_HeaderSearchbar'>
        <Searchbar
          id='SearchResultBox_Searchbar'
          color='background-full'
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
      </header>
      <SearchResultsDropbox>
        <SearchResultSection>
          <h3 className='SearchResult_SectionTitle'>{t('search.result.recentSection')}</h3>
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