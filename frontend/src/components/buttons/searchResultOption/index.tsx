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

  }

  return (
    <SearchResultWrapper>
      <SearchResultButtonWrap>
        <span aria-label={`${search.value} flag`} className={`fi fi-${search?.country_flag} fis country-flag-resultButton`}></span>
        <SearchResultDetails>
          <p>{search.value}</p>
          <span>{t(search.type_label)}</span>
        </SearchResultDetails>
      </SearchResultButtonWrap>
      <button onClick={() => removeRecentSearches()} className='RemoveRecentSearch'>
        <CloseLineIcon size={20} />
      </button>
    </SearchResultWrapper>
  )
}