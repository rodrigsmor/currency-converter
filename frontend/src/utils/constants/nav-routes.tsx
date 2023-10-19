import { ReactNode } from "react";
import Home2LineIcon from 'remixicon-react/Home2LineIcon';
import ExchangeLineIcon from 'remixicon-react/ExchangeLineIcon';
import ExchangeDollarLineIcon from 'remixicon-react/ExchangeDollarLineIcon';
import MoneyDollarCircleLineIcon from 'remixicon-react/MoneyDollarCircleLineIcon'

export interface NavRoutes {
  path: string;
  label: 'navigationBox.search' | 'navigationBox.exchange' | 'header.home' | 'header.currencies' | 'header.converter' | 'header.exchange' | 'navigationBox.currencies' | 'navigationBox.cunverter';
  Icon?: ReactNode;
}

export const navRoutes: NavRoutes[] = [
  {
    path: '/',
    label: 'header.home',
    Icon: <Home2LineIcon size={30} />
  },
  {
    path: '/currencies',
    label: 'header.currencies',
    Icon: <MoneyDollarCircleLineIcon size={30} />
  },
  {
    path: '/convert-currencies',
    label: 'header.converter',
    Icon: <ExchangeLineIcon size={30} />
  },
  {
    path: '/exchanges-rates',
    label: 'header.exchange',
    Icon: <ExchangeDollarLineIcon size={30} />
  }
]