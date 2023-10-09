'use client'

import { useContext, useState } from 'react';

// constants
import { langList } from '@/utils/constants/lang-list'

// Icons
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

// contexts
import { LanguageContext } from '@/contexts/LanguageContextProvider';

// style
import { LangOption, LangOptionsList, LangSelectToggle, LangSelectWrapper } from './styled'

interface LangSelectProps {
  style?: 'transparent' | 'background';
  showCountryLabel?: boolean;
}

export function LangSelect({ style = 'transparent', showCountryLabel = false }: LangSelectProps) {
  const { lang, setLang, currentLanguage } = useContext(LanguageContext)
  const [ isSelectExpanded, setIsSelectExpanded ] = useState<boolean>(false);

  return (
    <LangSelectWrapper
      role='combobox'
      id='Lang-Select'
      aria-haspopup='listbox'
      aria-label='Choose a language'
      aria-expanded={isSelectExpanded}
      className={`${showCountryLabel && 'Lang-Select_Complete'}`}
    >
      <LangSelectToggle
        type='button'
        aria-haspopup={true}
        id='Lang-Select_Toggle'
        aria-expanded={isSelectExpanded}
        onClick={() => setIsSelectExpanded(!isSelectExpanded)}
        colorVariant={style === 'transparent' ? 'background' : 'typography'}
      >
        <div
          aria-label={`${currentLanguage?.label} flag`} className={`fi fi-${currentLanguage?.countryCode} fis country-flag-lang`}></div>
        <div className='language-selected_data'>
          <span
            id='language-selected_code'
          >
            { currentLanguage?.langCode }
          </span>
          { showCountryLabel && <span id='language-selected_label'>({ currentLanguage?.label })</span> }
        </div>
        <ArrowDownSLineIcon size={20} className='icon-arrow-down_select' />
      </LangSelectToggle>
      <LangOptionsList
        role='listbox'
        aria-hidden={!isSelectExpanded}
        aria-labelledby='language-selected_code'
        id='Lang-Select_List'
      >
        {
          langList.map((langOption) => {
            const isSelected = (langOption.lang === lang);

            return (
              <LangOption
                role='option'
                id={`option-${langOption.langCode}`}
                key={langOption?.langCode}
                aria-selected={isSelected}
                className={`${showCountryLabel && 'Lang-Select_Complete'}`}
              >
                <button disabled={isSelected || !isSelectExpanded} onClick={() => [setLang(langOption?.lang), setIsSelectExpanded(false)]}>
                  <div aria-label={`${langOption?.label} flag miniature`} className={`fi fi-${langOption?.countryCode} fis country-flag-lang`}></div>
                  <div className='option-language_DATA'>
                    <span
                      className='option-language_CODE'
                    >
                      { langOption?.langCode }
                    </span>
                    { showCountryLabel && <span className='option-language_LABEL'>({ langOption?.label })</span> }
                  </div>
                </button>
              </LangOption>
            )
          })
        }
      </LangOptionsList>
    </LangSelectWrapper>
  )
}