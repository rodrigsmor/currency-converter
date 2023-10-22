'use client'

// types
import { FeatureSearchOption } from '@/utils/@types/feature-search-option';

// styled
import { FeatureSearchSelectContainer } from './styled';

// icons
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

// i18n
import { useI18n } from '@/i18n/locales/client';

interface FeatureSearchSelectProps {
  isChecked: boolean;
  feature: FeatureSearchOption;
  onSelect: (feature: FeatureSearchOption | null) => void;
}

export function FeatureSearchSelect({ feature, isChecked, onSelect }: FeatureSearchSelectProps) {
  const t = useI18n()

  return (
    <FeatureSearchSelectContainer
      role='checkbox'
      aria-checked={isChecked}
      onClick={() => onSelect(isChecked ? null : feature)}
    >
      {feature.Icon}
      <p className='Feature_OptionName'>
        {t(feature.optionName)}
      </p>
      <ArrowRightSLineIcon size={20} />
    </FeatureSearchSelectContainer>
  )
}