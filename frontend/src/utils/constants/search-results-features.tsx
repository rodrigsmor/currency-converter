import { FeatureSearchOption } from '../@types/feature-search-option';

import ExchangeLineIcon from 'remixicon-react/ExchangeLineIcon';
import ExchangeDollarLineIcon from 'remixicon-react/ExchangeDollarLineIcon';

export const searchResultsFeatures: FeatureSearchOption[] = [
  {
    path: 'convert-currencies',
    optionName: 'header.converter',
    Icon: <ExchangeLineIcon size={24} aria-label='Convert Currency Icon' />,
  },
  {
    path: 'exchanges-rates',
    optionName: 'header.exchange',
    Icon: <ExchangeDollarLineIcon size={24} aria-label='Exchange Rates Icon' />,
  },
]