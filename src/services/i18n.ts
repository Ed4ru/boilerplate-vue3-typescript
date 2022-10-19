import { createI18n } from 'vue-i18n';
import global from '@/assets/i18n/global.json';

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    ...global
  }
});
