'use client'

import { useContext, useState } from 'react';
import { langList } from '@/utils/constants/lang-list'
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';
import { LanguageContext } from '@/contexts/LanguageContextProvider';
import { LangOption, LangOptionsList, LangSelectToggle, LangSelectWrapper } from './styled'

export function LangSelect() {
  const { lang, setLang, currentLanguage } = useContext(LanguageContext)
  const [ isSelectExpanded, setIsSelectExpanded ] = useState<boolean>(false);

  return (
    <LangSelectWrapper
      role='combobox'
      id='Lang-Select'
      aria-haspopup='listbox'
      aria-label='Choose a language'
      aria-expanded={isSelectExpanded}
    >
      <LangSelectToggle
        type='button'
        aria-haspopup={true}
        id='Lang-Select_Toggle'
        aria-expanded={isSelectExpanded}
        onClick={() => setIsSelectExpanded(!isSelectExpanded)}
      >
        <div
          aria-label={`${currentLanguage?.label} flag`} className={`fi fi-${currentLanguage?.countryCode} fis country-flag-lang`}></div>
        <span
          id='language-selected_code'
        >
          { currentLanguage?.langCode }
        </span>
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
              >
                <button disabled={isSelected} onClick={() => [setLang(langOption?.lang), setIsSelectExpanded(false)]}>
                  <div aria-label={`${langOption?.label} flag miniature`} className={`fi fi-${langOption?.countryCode} fis country-flag-lang`}></div>
                  <span
                    className='option-language_CODE'
                  >
                    { langOption?.langCode }
                  </span>
                </button>
              </LangOption>
            )
          })
        }
      </LangOptionsList>
    </LangSelectWrapper>
  )
}