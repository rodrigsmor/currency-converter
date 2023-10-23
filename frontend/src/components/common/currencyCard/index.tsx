import { Country } from '@/utils/@types/country';
import { Currency } from '@/utils/@types/currency'
import { CurrencyCardContainer, CurrencyCardFooter, CurrencyCardHeader } from './styled'

interface CurrencyCardProps {
  currency: Currency | Country;
  isCountry: boolean;
  baseCurrency?: Currency;
}

export const CurrencyCard = ({ currency, isCountry = false, baseCurrency }: CurrencyCardProps) => {
  return (
    <CurrencyCardContainer>
      <div aria-label={`${currency?.country_name} flag`} className={`CurrencyCard_Flag fi fi-${currency?.flag_code} fis`}></div>
      <section>
        <CurrencyCardHeader>
          <h4>{ isCountry ? currency?.country_name : currency?.currency_name }</h4>
          <p>{ isCountry ? currency?.monetary_symbol : `${currency?.monetary_symbol} ${currency?.unit_value}` }</p>
        </CurrencyCardHeader>
        <CurrencyCardFooter>
          <p className='CurrencyCard_CODE'>{ currency?.currency_code }</p>
          <p className='CurrencyCard_VALUE'>
            {
              isCountry ? currency?.currency_name
              : (
                <>
                  <abbr title={baseCurrency?.currency_name}>{baseCurrency?.monetary_symbol}</abbr> 1 = <abbr title={currency?.currency_name}>{currency?.monetary_symbol}</abbr> 16.24
                </>
              )
            }
          </p>
        </CurrencyCardFooter>
      </section>
    </CurrencyCardContainer>
  )
}