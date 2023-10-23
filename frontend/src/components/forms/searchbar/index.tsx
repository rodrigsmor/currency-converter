'use client'

import { ChangeEventHandler } from 'react';
import { SearchInput, SearchbarContainer } from './styled';
import SearchLineIcon from 'remixicon-react/SearchLineIcon';

interface SearchbarProps {
  id?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  color?: 'primary' | 'background' | 'background-full';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Searchbar = ({
  label,
  id = '',
  value = '',
  color = 'primary',
  onChange = () => {},
  placeholder = 'Search',
  attributes,
}: SearchbarProps) => {
  return (
    <SearchbarContainer
      data-color={color}
      className='searchbar-container'
      {...(label && { "aria-label": label })}
    >
      <SearchLineIcon size={24} />
      <SearchInput
        id={id}
        value={value}
        type='search'
        onChange={onChange}
        placeholder={placeholder}
        { ...attributes }
      />
    </SearchbarContainer>
  )
}