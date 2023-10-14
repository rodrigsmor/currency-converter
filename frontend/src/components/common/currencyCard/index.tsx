import { CurrencyCardContainer, CurrencyCardFooter, CurrencyCardHeader } from './styled'
import { Currency } from '@/utils/@types/currency'

interface CurrencyCardProps {
  currency: Currency;
}

export const CurrencyCard = ({ currency }: CurrencyCardProps) => {
  return (
    <CurrencyCardContainer>
      <div aria-label={`${currency?.country_name} flag`} className={`CurrencyCard_Flag fi fi-${currency?.flag_code} fis`}></div>
      <section>
        <CurrencyCardHeader>
          <h4>{ currency.currency_name }</h4>
          <p>{ `${currency.monetary_symbol} ${currency.unit_value}` }</p>
        </CurrencyCardHeader>
        <CurrencyCardFooter>
          <p className='CurrencyCard_CODE'>{ currency.currency_code }</p>
          <p className='CurrencyCard_VALUE'>
            EUR€ 1 = R 18.93
          </p>
        </CurrencyCardFooter>
      </section>
    </CurrencyCardContainer>
  )
}