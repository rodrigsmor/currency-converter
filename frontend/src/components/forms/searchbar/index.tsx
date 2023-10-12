'use client'

import { SearchInput, SearchbarContainer } from './styled';
import SearchLineIcon from 'remixicon-react/SearchLineIcon';

interface SearchbarProps {
  color?: 'primary' | 'background';
  placeholder?: string;
  label?: string;
}

export const Searchbar = ({
  color = 'primary',
  placeholder = 'Search',
  label,
}: SearchbarProps) => {
  return (
    <SearchbarContainer
      className={`searchbar-container ${color}`}
      {...(label && { "aria-label": label })}
    >
      <SearchLineIcon size={24} />
      <SearchInput
        placeholder={placeholder}
      />
    </SearchbarContainer>
  )
}