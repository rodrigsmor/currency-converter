'use client'

// i18n
import { useI18n } from '@/i18n/locales/client'

// constants
import { NavRoutes } from '@/utils/constants/nav-routes'

// Icon
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import ExchangeLineIcon from 'remixicon-react/ExchangeLineIcon'
import ExchangeDollarLineIcon from 'remixicon-react/ExchangeDollarLineIcon'
import MoneyDollarCircleLineIcon from 'remixicon-react/MoneyDollarCircleLineIcon'

// style
import { NavigationBoxContainer, NavigationBoxList, NavigationBoxOption } from './styled'

export const NavigationBox = () => {
  const navRoutes: NavRoutes[] = [
    {
      path: '/currencies',
      label: 'navigationBox.currencies',
      Icon: <MoneyDollarCircleLineIcon aria-label='Currencies Icon' size={24} />
    },
    {
      path: '/convert-currencies',
      label: 'navigationBox.cunverter',
      Icon: <ExchangeLineIcon aria-label='Currency Cunverter Icon' size={24} />
    },
    {
      path: '/exchanges-rates',
      label: 'navigationBox.exchange',
      Icon: <ExchangeDollarLineIcon aria-label='Exchange rates icon' size={24} />
    },
    {
      path: '/search',
      label: 'navigationBox.search',
      Icon: <SearchLineIcon aria-label='Search Icon' size={24} />
    }
  ]

  const t = useI18n()

  return (
    <NavigationBoxContainer>
      <NavigationBoxList>
        {
          navRoutes.map((route, index) => {
            return (
              <li key={index}>
                <NavigationBoxOption
                  href={route.path}
                >
                  <figure>
                    { route.Icon }
                  </figure>
                  <p>{ t(route.label) }</p>
                </NavigationBoxOption>
              </li>
            )
          })
        }
      </NavigationBoxList>
    </NavigationBoxContainer>
  )
}