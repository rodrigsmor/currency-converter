'use client'

import { MouseEvent, useState } from 'react'

// icons
import More2LineIcon from 'remixicon-react/More2LineIcon';

// buttons
import { IconButton } from '@/components/buttons/IconButton'
import { CurrencySelector } from '@/components/forms/currencySelector'

// styles
import { CurrencyPreviewBox, CurrencyValudeConverted, HomePageMainContainer, TopGreetingsHeader } from './styled'

// types
import { Currency } from '@/utils/@types/currency';

// mock
import { currencies_mock } from '@/utils/mocks/currencies';

export const HomePageContent = () => {
  const [targetCurrency, setTargetCurrency] = useState<Currency>(currencies_mock[0])
  const [showCurrencySelector, setShowCurrencySelector] = useState<boolean>(false);

  function handleToggleCurrencySelector(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowCurrencySelector(!showCurrencySelector)
  }

  async function handleTargetCurrency(currency: Currency) {
    // makes request and start loading
    setTargetCurrency(currency);
  }

  return (
    <HomePageMainContainer>
      <TopGreetingsHeader>
        <hgroup>
          <h1>Welcome back!</h1>
          <h2>Check the euro today</h2>
        </hgroup>
        <CurrencyPreviewBox>
          <p>
            1 United States Dollar equals
            <strong className='ValueConverted_Container'>
              <CurrencyValudeConverted>
                <small className='ValueConverted_MonetarySymbol'>{ targetCurrency.monetary_symbol }</small> 1.07
              </CurrencyValudeConverted>
              <span className='ValueConverted_CurrencyName'>{ targetCurrency.currency_name }</span>
            </strong>
          </p>
          <IconButton
            Icon={<More2LineIcon />}
            color='background-20'
            onClick={handleToggleCurrencySelector}
            label={`${showCurrencySelector ? 'Close' : 'Open'} currency selector`}
            attributes={{
              'aria-haspopup': 'listbox',
              'aria-expanded': showCurrencySelector,
              'aria-controls': 'CurrencySelector_Header',
            }}
          />
          <CurrencySelector
            id='CurrencySelector_Header'
            selectedCurrency={targetCurrency}
            onSelectOption={handleTargetCurrency}
            showCurrencySelector={showCurrencySelector}
          />
        </CurrencyPreviewBox>
      </TopGreetingsHeader>
    </HomePageMainContainer>
  )
}