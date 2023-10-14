'use client'

import { MouseEvent, useRef, useState } from 'react'

// icons
import More2LineIcon from 'remixicon-react/More2LineIcon';

// buttons
import { Header } from '@/components/layout/header';
import { IconButton } from '@/components/buttons/IconButton'
import { CurrencySelector } from '@/components/forms/currencySelector'

// styles
import { PageContainer } from '@/styles/common/styled';
import { CurrenciesGroupList, CurrencyPreviewBox, CurrencyValueConverted, HomeBodyContent, HomePageMainContainer, TopGreetingsHeader } from './styled'

// types
import { Currency } from '@/utils/@types/currency';

// mock
import { currencies_mock } from '@/utils/mocks/currencies';
import { NavigationBox } from '@/components/layout/navigationBox';
import { CurrencyCard } from '@/components/common/currencyCard';

export const HomePageContent = () => {
  const pageRef = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

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
    <PageContainer
      ref={pageRef}
      onScroll = { e => {
        setHasScrolled((e.currentTarget.scrollTop > 60))
      }}
    >
      <Header hasScrolled={hasScrolled} />
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
                <CurrencyValueConverted>
                  <small className='ValueConverted_MonetarySymbol'>{ targetCurrency.monetary_symbol }</small> 1.07
                </CurrencyValueConverted>
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
        <HomeBodyContent>
          <NavigationBox />
          <CurrenciesGroupList>
            {
              currencies_mock.map((currency, index) => {
                return (
                  <li key={currency.currency_code}>
                    <CurrencyCard currency={currency} />
                  </li>
                )
              })
            }
          </CurrenciesGroupList>
        </HomeBodyContent>
      </HomePageMainContainer>
    </PageContainer >

  )
}

