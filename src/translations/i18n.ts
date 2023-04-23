import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//EN Translations
import commonTranslations from './en/common/common.json';
import dashboardTranslations from './en/dashboard/dashboard.json';
import noAuthTranslations from './en/noAuth/noAuth.json';
import moduleOneTranslations from './en/moduleOne/moduleOne.json';

//PL Translations
import commonTranslationsPL from './pl/common/common.json';
import dashboardTranslationsPL from './pl/dashboard/dashboard.json';
import moduleOneTranslationsPL from './pl/moduleOne/moduleOne.json';
import noAuthTranslationsPL from './pl/noAuth/noAuth.json';

const resources = {
    en: {
        translation: {
            ...commonTranslations,
            ...dashboardTranslations,
            ...noAuthTranslations,
            ...moduleOneTranslations,
        },
    },
    pl: {
        translation: {
            ...commonTranslationsPL,
            ...dashboardTranslationsPL,
            ...noAuthTranslationsPL,
            ...moduleOneTranslationsPL,
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
