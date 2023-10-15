import { CurrencyCardContainer, CurrencyCardFooter, CurrencyCardHeader } from './styled'
import { Currency } from '@/utils/@types/currency'

interface CurrencyCardProps {
  currency: Currency;
  isCountry: boolean;
  baseCurrency: Currency;
}

export const CurrencyCard = ({ currency, isCountry, baseCurrency }: CurrencyCardProps) => {
  return (
    <CurrencyCardContainer>
      <div aria-label={`${currency?.country_name} flag`} className={`CurrencyCard_Flag fi fi-${currency?.flag_code} fis`}></div>
      <section>
        <CurrencyCardHeader>
          <h4>{ isCountry ? currency.country_name : currency.currency_name }</h4>
          <p>{ `${currency.monetary_symbol} ${currency.unit_value}` }</p>
        </CurrencyCardHeader>
        <CurrencyCardFooter>
          <p className='CurrencyCard_CODE'>{ currency.currency_code }</p>
          <p className='CurrencyCard_VALUE'>
            <abbr title={baseCurrency.currency_name}>{baseCurrency.monetary_symbol}</abbr> 1 = <abbr title={currency.currency_name}>{currency.monetary_symbol}</abbr> 16.24
          </p>
        </CurrencyCardFooter>
      </section>
    </CurrencyCardContainer>
  )
}