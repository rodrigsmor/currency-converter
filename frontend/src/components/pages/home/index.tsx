'use client'

import { MouseEvent, useState } from 'react'

// icons
import More2LineIcon from 'remixicon-react/More2LineIcon';

// buttons
import { IconButton } from '@/components/buttons/IconButton'
import { CurrencySelector } from '@/components/forms/currencySelector'

// styles
import { CurrencyPreviewBox, CurrencyValudeConverted, HomePageMainContainer, TopGreetingsHeader } from './styled'

export const HomePageContent = () => {
  const [showCurrencySelector, setShowCurrencySelector] = useState<boolean>(false);

  function handleToggleCurrencySelector(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowCurrencySelector(!showCurrencySelector)
  }

  function handleSelectOption(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
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
                <small className='ValueConverted_MonetarySymbol'>€</small> 1.07
              </CurrencyValudeConverted>
              <span className='ValueConverted_CurrencyName'>Euro</span>
            </strong>
          </p>
          <IconButton
            Icon={<More2LineIcon />}
            color='background-20'
            onClick={handleToggleCurrencySelector}
            label={`${showCurrencySelector ? 'Open' : 'Close'} currency selector`}
          />
          <CurrencySelector
            showCurrencySelector={showCurrencySelector}
            onSelectOption={handleSelectOption}
          />
        </CurrencyPreviewBox>
      </TopGreetingsHeader>
    </HomePageMainContainer>
  )
}