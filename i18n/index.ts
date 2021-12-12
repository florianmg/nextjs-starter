import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import frLocales from './fr/locales.json';

const resources = {
  fr: frLocales
};

i18next.use(initReactI18next).init({
  // debug: true,
  resources,
  lng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
