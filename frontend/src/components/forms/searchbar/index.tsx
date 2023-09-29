'use client'

import { SearchInput, SearchbarContainer } from './styled';
import SearchLineIcon from 'remixicon-react/SearchLineIcon';

interface SearchbarProps {
  color?: 'primary' | 'background';
  placeholder?: string;
}

export const Searchbar = ({
  color = 'primary',
  placeholder = 'Search'
}: SearchbarProps) => {
  return (
    <SearchbarContainer className={`searchbar-container ${color}`}>
      <SearchLineIcon size={24} />
      <SearchInput
        placeholder={placeholder}
      />
    </SearchbarContainer>
  )
}