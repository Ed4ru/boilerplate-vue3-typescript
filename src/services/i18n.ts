import { createI18n } from 'vue-i18n';
import { merge } from 'lodash';

import global from '@/assets/i18n/global.json';
import navigation from '@/assets/i18n/navigation.json';

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: merge(global, navigation)
});
