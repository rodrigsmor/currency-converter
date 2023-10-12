'use client'

import { MouseEventHandler } from "react";

// components
import { Searchbar } from "../searchbar";

// style
import { CurrencyOption, CurrencyOptionsList, CurrencySelectorContainer, CurrencySelectorHeader } from "./styled";

interface CurrencySelectorProps {
  id: string,
  showCurrencySelector: boolean;
  onSelectOption: MouseEventHandler<HTMLButtonElement>;
}

export const CurrencySelector = ({
  id,
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
        aria-activedescendant="selectedOption" // alterar isso pelo correto
      >
        <CurrencyOption
          role='option'
          aria-selected="true"
        >

        </CurrencyOption>
      </CurrencyOptionsList>
    </CurrencySelectorContainer>
  );
}