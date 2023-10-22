'use client'

import Link from 'next/link';
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
import { SearchResultWrapper } from './styled';

interface SearchResultOptionProps {
  search: RecentSearches;
  isRecent: boolean;
}

function SearchDetailsContent({ search, isRecent = false }: { search: RecentSearches, isRecent?: boolean }) {
  const t = useI18n()

  return (
    <>
      <span aria-label={`${search.value} flag`} className={`fi fi-${search?.country_flag} fis country-flag-resultButton`}></span>
      <div className='SearchResultOption_Details'>
        <p className='ResultOption_DetailsValue'>{search.value}</p>
        <span className='ResultOption_TypeSelected'>
          { isRecent ? t(search.type_label) : search.currencyCode }
        </span>
      </div>
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
            <Link
              tabIndex={0}
              className='ResultOption_ContentWrapper'
              href={`/${lang}/${search.path}?target_currency=${search.currencyCode}`}
            >
              <SearchDetailsContent search={search} isRecent={true} />
            </Link>
          ) : (
            <button
              className='ResultOption_ContentWrapper'
            >
              <SearchDetailsContent search={search} />
            </button>
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