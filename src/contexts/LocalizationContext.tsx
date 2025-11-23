import React, { createContext, useState } from 'react';
import { I18nManager } from 'react-native';
import { Lang } from '../utils/types';
import { stringsMap } from '../utils/strings';

export const LocalizationContext = createContext<any>(null);

export const LocalizationProvider: React.FC<any> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');

  const onChangeLanguage = (newLang: Lang) => {
    setLang(newLang);

    const isRTL = newLang === 'ar';

    try {
      I18nManager.allowRTL(isRTL);
      I18nManager.forceRTL(isRTL);
    } catch (e) {
      console.warn('I18n error:', e);
    }
  };

  return (
    <LocalizationContext.Provider
      value={{ lang, setLang: onChangeLanguage, strings: stringsMap[lang] }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
