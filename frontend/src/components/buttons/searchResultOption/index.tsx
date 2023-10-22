'use client'

import { useContext } from 'react';

// i18n
import { useI18n } from '@/i18n/locales/client';

// Icons
import CloseLineIcon from 'remixicon-react/CloseLineIcon';

// types
import { RecentSearches } from '@/utils/@types/recent-searches';

// contexts
import { LanguageContext } from '@/contexts/LanguageContextProvider';

// components
import { SearchResultButtonWrap, SearchResultDetails, SearchResultLinkWrap, SearchResultWrapper } from './styled';

interface SearchResultOptionProps {
  search: RecentSearches;
  isRecent: boolean;
}

function SearchDetailsContent({ search }: { search: RecentSearches }) {
  const t = useI18n()

  return (
    <>
      <span aria-label={`${search.value} flag`} className={`fi fi-${search?.country_flag} fis country-flag-resultButton`}></span>
      <SearchResultDetails>
        <p className='ResultOption_DetailsValue'>{search.value}</p>
        <span className='ResultOption_TypeSelected'>{t(search.type_label)}</span>
      </SearchResultDetails>
    </>
  );
}

export function SearchResultOption({ search, isRecent }: SearchResultOptionProps) {
  const t = useI18n()
  const { lang } = useContext(LanguageContext)

  function removeRecentSearches() {
    // remove 
  }

  return (
    <SearchResultWrapper>
      {
        isRecent
          ? (
            <SearchResultLinkWrap
              tabIndex={0}
              href={`/${lang}/${search.path}?target_currency=${search.currencyCode}`}
            >
              <SearchDetailsContent search={search} />
            </SearchResultLinkWrap>
          ) : (
            <SearchResultButtonWrap>
              <SearchDetailsContent search={search} />
            </SearchResultButtonWrap>
          )
      }
      {
        isRecent && (
          <button
            aria-label={t('search.result.remove')}
            title={t('search.result.remove')}
            onClick={() => removeRecentSearches()}
            className='RemoveRecentSearch'
          >
            <CloseLineIcon size={20} />
          </button>
        )
      }
    </SearchResultWrapper>
  )
}