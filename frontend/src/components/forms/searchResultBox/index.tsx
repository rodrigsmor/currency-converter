'use client'

import { useState } from "react"
import { Searchbar } from "../searchbar"
import { SearchResultBoxWrapper, SearchResultSection, SearchResultsDropbox } from "./styled"

interface SearchResultBoxProps {
  
}

enum ValueTypeEnum {
  'country_name', 'currency_name', 'currency_code'
}

type SearchResult = {
  value: string;
  path: 'exchanges-rates' | 'convert-currencies';
  typeLabel: 'header.exchange' | 'header.converter';
  currencyCode: string;
}

export const SearchResultBox = ({  }: SearchResultBoxProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

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
          <h3 className="SearchResult_SectionTitle">Recent searches</h3>
        </SearchResultSection>
      </SearchResultsDropbox>
    </SearchResultBoxWrapper>
  )
}