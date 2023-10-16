'use client'

import { ChangeEvent, useMemo, useState } from 'react';

// components
import { Searchbar } from '../searchbar';

// icons
import SearchLineIcon from 'remixicon-react/SearchLineIcon';

// style
import { CurrencyOptionsList, CurrencySelectorContainer, CurrencySelectorHeader } from './styled';

// mocks
import { currencies_mock } from '@/utils/mocks/currencies';

// types
import { Currency } from '@/utils/@types/currency';

interface CurrencySelectorProps {
  id: string,
  otherSelected?: Currency;
  selectedCurrency: Currency,
  showCurrencySelector: boolean;
  onSelectOption: (currency: Currency) => void;
}

export const CurrencySelector = ({
  id,
  selectedCurrency,
  onSelectOption,
  showCurrencySelector,
  otherSelected,
}: CurrencySelectorProps) => {
  const [ searchValue, setSearchValue ] = useState<string>('');

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setSearchValue(event.target.value);
  }

  const currenciesResult = useMemo<Currency[]>(() => {
    let currenciesItems = [...currencies_mock];
    let searchQuery = searchValue.toLowerCase();

    return currenciesItems.filter((currency) => {
      return (
        currency.currency_code !== otherSelected?.currency_code &&
        (
          currency.flag_code.toLowerCase().includes(searchQuery) ||
          currency.currency_name.toLowerCase().includes(searchQuery) ||
          currency.currency_code.toLowerCase().includes(searchQuery) ||
          currency.country_name.toLowerCase().includes(searchQuery)
        )
      );
    });
  }, [otherSelected?.currency_code, searchValue]);
  
  return (
    <CurrencySelectorContainer
      id={id}
      role='dialog'
      aria-label='Select a currency'
      aria-hidden={!showCurrencySelector}
    >
      <CurrencySelectorHeader>
        <Searchbar
          value={searchValue}
          onChange={onChangeSearch}
          label='Search for a currency'
          placeholder='search for currency...'
        />
      </CurrencySelectorHeader>
      <CurrencyOptionsList
        role='listbox'
        aria-activedescendant={`${id}_${selectedCurrency.currency_code}`}
      >
        {
          currenciesResult.length > 0
            ? currenciesResult.map((currency, index) => {
              const isSelected = (currency.currency_code === selectedCurrency.currency_code)

              return (
                <li
                  role='option'
                  aria-selected={isSelected}
                  key={currency.currency_code}
                  id={`${id}_${currency.currency_code}`}
                  onClick={() => onSelectOption(currency)}
                  onKeyDown={event => {
                    if ([' ', 'Enter'].includes(event.key)) {
                      event.preventDefault();
                      onSelectOption(currency)
                    }
                  }}
                  className='CurrencySelect_CurrencyOption'
                  tabIndex={(isSelected || !showCurrencySelector) ? -1 : 0}
                >
                  <figure>
                    <span
                      aria-label={`${currency.country_name} flag`}
                      className={`fi fi-${currency.flag_code} CurrencySelect_FlagIcon`}
                    ></span>
                  </figure>
                  <div>
                    <p>{currency.currency_name}</p> 
                    <span>{currency.currency_code}</span>
                  </div>
                </li>
              )
            }) : (
              <li className='CurrencySelect_EmptyState'>
                <SearchLineIcon size={48} className='currency-selector-empty' />
                <p>No results for <strong>&ldquo;{searchValue}&rdquo;</strong>.</p>
              </li>
            )
        }
      </CurrencyOptionsList>
    </CurrencySelectorContainer>
  );
}