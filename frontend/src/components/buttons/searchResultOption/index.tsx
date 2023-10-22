'use client'

import { useI18n } from '@/i18n/locales/client';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import { RecentSearches } from '@/utils/@types/recent-searches';
import { SearchResultButtonWrap, SearchResultDetails, SearchResultWrapper } from './styled';

interface SearchResultOptionProps {
  search: RecentSearches;
}

export function SearchResultOption({ search }: SearchResultOptionProps) {
  const t = useI18n()

  function removeRecentSearches() {
    // remove 
  }

  return (
    <SearchResultWrapper>
      <SearchResultButtonWrap>
        <span aria-label={`${search.value} flag`} className={`fi fi-${search?.country_flag} fis country-flag-resultButton`}></span>
        <SearchResultDetails>
          <p className='ResultOption_DetailsValue'>{search.value}</p>
          <span className='ResultOption_TypeSelected'>{t(search.type_label)}</span>
        </SearchResultDetails>
      </SearchResultButtonWrap>
      <button
        aria-label={t('search.result.remove')}
        title={t('search.result.remove')}
        onClick={() => removeRecentSearches()}
        className='RemoveRecentSearch'
      >
        <CloseLineIcon size={20} />
      </button>
    </SearchResultWrapper>
  )
}