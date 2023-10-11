'use client'

import { CurrencyPreviewBox, CurrencyValudeConverted, HomePageMainContainer, TopGreetingsHeader } from './styled'

export const HomePageContent = () => {
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
        </CurrencyPreviewBox>
      </TopGreetingsHeader>
    </HomePageMainContainer>
  )
}