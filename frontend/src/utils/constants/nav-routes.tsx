import { ReactNode } from "react";
import Home2LineIcon from 'remixicon-react/Home2LineIcon';
import ExchangeLineIcon from 'remixicon-react/ExchangeLineIcon';
import ExchangeDollarLineIcon from 'remixicon-react/ExchangeDollarLineIcon';
import MoneyDollarCircleLineIcon from 'remixicon-react/MoneyDollarCircleLineIcon'

export interface NavRoutes {
  path: string;
  label: string;
  Icon?: ReactNode;
}

export const navRoutes: NavRoutes[] = [
  {
    path: '/',
    label: 'Home',
    Icon: <Home2LineIcon />
  },
  {
    path: '/currencies',
    label: 'List of currencies',
    Icon: <MoneyDollarCircleLineIcon />
  },
  {
    path: '/convert-currencies',
    label: 'Convert currencies',
    Icon: <ExchangeLineIcon />
  },
  {
    path: '/exchanges-rates',
    label: 'Exchange rates',
    Icon: <ExchangeDollarLineIcon />
  }
]