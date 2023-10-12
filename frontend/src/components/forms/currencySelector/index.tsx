'use client'

import { MouseEvent } from 'react';

// components
import { Searchbar } from '../searchbar';

// style
import { CurrencyOption, CurrencyOptionsList, CurrencySelectorContainer, CurrencySelectorHeader } from './styled';

// mocks
import { currencies_mock } from '@/utils/mocks/currencies';

// types
import { Currency } from '@/utils/@types/currency';

interface CurrencySelectorProps {
  id: string,
  selectedCurrency: Currency,
  showCurrencySelector: boolean;
  onSelectOption: (currency: Currency) => void;
}

export const CurrencySelector = ({
  id,
  selectedCurrency,
  onSelectOption,
  showCurrencySelector,
}: CurrencySelectorProps) => {
  return (
    <CurrencySelectorContainer
      id={id}
      role='dialog'
      aria-label='Select a currency'
      aria-hidden={!showCurrencySelector}
    >
      <CurrencySelectorHeader>
        <Searchbar
          placeholder='search for currency...'
          label='Search for a currency'
        />
      </CurrencySelectorHeader>
      <CurrencyOptionsList
        role='listbox'
        aria-activedescendant={`${id}_${selectedCurrency.currency_code}`}
      >
        {
          currencies_mock.map((currency, index) => {
            const isSelected = (currency.currency_code === selectedCurrency.currency_code)

            return (
              <CurrencyOption
                role='option'
                tabIndex={0}
                aria-selected={isSelected}
                id={`${id}_${currency.currency_code}`}
                key={`${currency.currency_code}_${index}`}
                onClick={() => onSelectOption(currency)}
                onKeyDown={event => {
                  if (['Escape', 'Enter'].includes(event.key))
                    event.preventDefault();
                    onSelectOption(currency)
                }}
              >
                { currency.currency_code }
              </CurrencyOption>
            )
          })
        }
      </CurrencyOptionsList>
    </CurrencySelectorContainer>
  );
}