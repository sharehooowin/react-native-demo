import I18n from 'react-native-i18n';
import en from './locales/en.js';
import fr from './locales/fr.js';
import zh from './locales/zh.js';
import enUS from './locales/en-US.js';

//// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;
I18n.translations = {
    zh,
    en,
    fr,
    'en-US':enUS,
}
export default I18n;