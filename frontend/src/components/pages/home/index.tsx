'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react'

// icons
import More2LineIcon from 'remixicon-react/More2LineIcon';

// components
import { Header } from '@/components/layout/header';
import { IconButton } from '@/components/buttons/IconButton'
import { CurrencyCard } from '@/components/common/currencyCard';
import { NavigationBox } from '@/components/layout/navigationBox';
import { CurrencySelector } from '@/components/forms/currencySelector'

// styles
import { PageContainer } from '@/styles/common/styled';
import { CurrenciesGroupList, CurrencyPreviewBox, CurrencyTodayContainer, CurrencyValueConverted, HomeBodyContent, HomePageMainContainer, TopGreetingsHeader } from './styled'

// types
import { Currency } from '@/utils/@types/currency';

// utils and mock
import { currencies_mock } from '@/utils/mocks/currencies';
import { USDCurrency } from '@/utils/constants/usd-currency';

export const HomePageContent = () => {
  const pageRef = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState<boolean>(
    pageRef && pageRef.current ? pageRef.current.scrollTop > 10 : false
  );

  useEffect(() => {
    if (pageRef.current) {
      setHasScrolled(pageRef.current.scrollTop > 10);
    }
  }, [ pageRef ])

  const [baseCurrency, setBaseCurrency] = useState<Currency>(USDCurrency)
  const [showBaseSelector, setShowBaseSelector] = useState<boolean>(false);
  const [showTargetSelector, setShowTargetSelector] = useState<boolean>(false);
  const [targetCurrency, setTargetCurrency] = useState<Currency>(currencies_mock[0])

  function handleToggleCurrencySelector(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowTargetSelector(!showTargetSelector)
  }

  async function handleTargetCurrency(currency: Currency, isBaseCurrency?: true) {
    if (isBaseCurrency) {
      setBaseCurrency(currency)
    } else {
      setTargetCurrency(currency);
    }
    // makes request and start loading
  }

  return (
    <PageContainer
      ref={pageRef}
      onScroll={(e) => {
        setHasScrolled((e.currentTarget.scrollTop > 10))
      }}
    >
      <Header hasScrolled={hasScrolled} />
      <HomePageMainContainer>
        <TopGreetingsHeader>
          <hgroup>
            <h1>Welcome back!</h1>
            <h2>Check the {targetCurrency.currency_name} today</h2>
          </hgroup>
          <CurrencyTodayContainer>
            <div className='BaseCurrency_Container'>
              <p>
                1 {baseCurrency.currency_name} equals
              </p>
              <div className='BaseCurrencySelect_Container'>
                <button
                  onClick={() => setShowBaseSelector(!showBaseSelector)}
                  aria-haspopup='listbox'
                  aria-expanded={showBaseSelector}
                  aria-controls='BaseCurrencySelector_Header'
                >
                  select base currency
                </button>
                <CurrencySelector
                  id='BaseCurrencySelector_Header'
                  selectedCurrency={baseCurrency}
                  onSelectOption={currency => handleTargetCurrency(currency, true)}
                  showCurrencySelector={showBaseSelector}
                />
              </div>
            </div>
            <CurrencyPreviewBox>
              <p aria-live='polite' className='ValueConverted_Container'>
                <CurrencyValueConverted>
                  <small className='ValueConverted_MonetarySymbol'>{ targetCurrency.monetary_symbol }</small> 1.07
                </CurrencyValueConverted>
                <span className='ValueConverted_CurrencyName'>{ targetCurrency.currency_name }</span>
              </p>
              <IconButton
                Icon={<More2LineIcon />}
                color='background-20'
                onClick={handleToggleCurrencySelector}
                label={`${showTargetSelector ? 'Close' : 'Show'} currency selector`}
                attributes={{
                  'aria-haspopup': 'listbox',
                  'aria-expanded': showTargetSelector,
                  'aria-controls': 'TargetCurrencySelector_Header',
                }}
              />
              <CurrencySelector
                id='TargetCurrencySelector_Header'
                selectedCurrency={targetCurrency}
                onSelectOption={handleTargetCurrency}
                showCurrencySelector={showTargetSelector}
              />
            </CurrencyPreviewBox>
          </CurrencyTodayContainer>
        </TopGreetingsHeader>
        <HomeBodyContent>
          <NavigationBox />
          <CurrenciesGroupList>
            {
              currencies_mock.map((currency) => {
                return (
                  <li key={currency.currency_code}>
                    <CurrencyCard
                      isCountry={false}
                      currency={currency}
                      baseCurrency={baseCurrency}
                    />
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

