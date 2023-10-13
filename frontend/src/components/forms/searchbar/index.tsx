'use client'

import { ChangeEventHandler } from 'react';
import { SearchInput, SearchbarContainer } from './styled';
import SearchLineIcon from 'remixicon-react/SearchLineIcon';

interface SearchbarProps {
  id?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  color?: 'primary' | 'background';
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Searchbar = ({
  label,
  id = '',
  value = '',
  color = 'primary',
  onChange = () => {},
  placeholder = 'Search',
}: SearchbarProps) => {
  return (
    <SearchbarContainer
      className={`searchbar-container ${color}`}
      {...(label && { "aria-label": label })}
    >
      <SearchLineIcon size={24} />
      <SearchInput
        id={id}
        value={value}
        type='search'
        onChange={onChange}
        placeholder={placeholder}
      />
    </SearchbarContainer>
  )
}