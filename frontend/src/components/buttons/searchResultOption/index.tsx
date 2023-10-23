'use client'

import _ from 'lodash';
import Link from 'next/link';
import { Dispatch, MouseEvent, useContext } from 'react';

// i18n
import { useI18n } from '@/i18n/locales/client';

// Icons
import CloseLineIcon from 'remixicon-react/CloseLineIcon';

// types
import { RecentSearch } from '@/utils/@types/recent-searches';

// contexts
import { LanguageContext } from '@/contexts/LanguageContextProvider';
import { useRouter } from 'next/navigation';

interface SearchResultOptionProps {
  isRecent: boolean;
  search: RecentSearch;
  setRecentSearches?: Dispatch<RecentSearch[]>;
}

function SearchDetailsContent({ search, isRecent = false }: { search: RecentSearch, isRecent?: boolean }) {
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

export function SearchResultOption({ search, isRecent, setRecentSearches = () => {} }: SearchResultOptionProps) {
  const t = useI18n()
  const route = useRouter()
  const { lang } = useContext(LanguageContext)

  function removeRecentSearch() {
    const localValue = localStorage.getItem('recent-searches@currency-converter')

    if (!localValue) return null;

    const recent_searches = JSON.parse(localValue) as RecentSearch[]

    const new_recent_searches = recent_searches.filter((recent_search) => !_.isEqual(recent_search, search))

    localStorage.setItem(
      'recent-searches@currency-converter',
      JSON.stringify(new_recent_searches)
    )

    setRecentSearches(new_recent_searches)
  }

  function navigateToRoute(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    let recentSearches = [];
    const localValue = localStorage.getItem('recent-searches@currency-converter') || []

    if (!Array.isArray(localValue)) {
      recentSearches = JSON.parse(localValue);
    }

    const newRecentSearches = [
      ...recentSearches,
      search,
    ]

    localStorage.setItem(
      'recent-searches@currency-converter',
      JSON.stringify(newRecentSearches)
    )

    route.push(`/${lang}/${search.path}?target_currency=${search.currencyCode}`)
  }

  return (
    <div className='SearchResult_OptionItem'>
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
              onClick={navigateToRoute}
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
            onClick={() => removeRecentSearch()}
            className='RemoveRecentSearch'
          >
            <CloseLineIcon size={20} />
          </button>
        )
      }
    </div>
  )
}