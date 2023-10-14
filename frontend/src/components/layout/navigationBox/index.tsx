import { NavRoutes } from '@/utils/constants/nav-routes'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import { NavigationBoxContainer, NavigationBoxList, NavigationBoxOption } from './styled'
import ExchangeLineIcon from 'remixicon-react/ExchangeLineIcon'
import MoneyDollarCircleLineIcon from 'remixicon-react/MoneyDollarCircleLineIcon'
import ExchangeDollarLineIcon from 'remixicon-react/ExchangeDollarLineIcon'

export const NavigationBox = () => {
  const navRoutes: NavRoutes[] = [
    {
      path: '/currencies',
      label: 'Currencies',
      Icon: <MoneyDollarCircleLineIcon aria-label='Currencies Icon' size={24} />
    },
    {
      path: '/convert-currencies',
      label: 'Converter',
      Icon: <ExchangeLineIcon aria-label='Currency Converter Icon' size={24} />
    },
    {
      path: '/exchanges-rates',
      label: 'Exchange',
      Icon: <ExchangeDollarLineIcon aria-label='Exchange rates icon' size={24} />
    },
    {
      path: '/search',
      label: 'Search',
      Icon: <SearchLineIcon aria-label='Search Icon' size={24} />
    }
  ]

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
                  <p>{ route.label }</p>
                </NavigationBoxOption>
              </li>
            )
          })
        }
      </NavigationBoxList>
    </NavigationBoxContainer>
  )
}