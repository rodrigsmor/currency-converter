export type RecentSearches = {
  value: string;
  currencyCode: string;
  country_flag: string;
  type_label: 'header.exchange' | 'header.converter';
  path: 'exchanges-rates' | 'convert-currencies';
}
