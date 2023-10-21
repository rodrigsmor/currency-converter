'use client'

import { useState } from "react"
import { Searchbar } from "../searchbar"
import { SearchResultBoxWrapper, SearchResultSection, SearchResultsDropbox } from "./styled"
import { recent_searches_mock } from "@/utils/mocks/recent-searches"
import { SearchResultOption } from "@/components/buttons/searchResultOption"

interface SearchResultBoxProps {
  
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
          <h3 className='SearchResult_SectionTitle'>Recent searches</h3>
          <ul className='SearchResult_List'>
            {
              recent_searches_mock.map((search, index) => {
                return (
                  <li key={index}>
                    <SearchResultOption search={search} />
                  </li>
                )
              })
            }
          </ul>
        </SearchResultSection>
      </SearchResultsDropbox>
    </SearchResultBoxWrapper>
  )
}