import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        // Set document language attribute
        document.documentElement.lang = i18n.language;

        // Set document direction (for RTL languages if needed in the future)
        document.documentElement.dir = 'ltr';
    }, [i18n.language]);

    const changeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode);
    };

    return {
        currentLanguage: i18n.language,
        changeLanguage,
        isReady: i18n.isInitialized,
    };
};