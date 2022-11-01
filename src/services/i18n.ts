import { createI18n } from 'vue-i18n';
import { merge } from 'lodash';

import global from '@/assets/i18n/global.json';
import validation from '@/assets/i18n/validation.json';

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: merge(
    global,
    validation
    // other imported i18n json files
  )
});
