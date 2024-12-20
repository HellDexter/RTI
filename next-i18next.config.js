/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'de', 'zh', 'ar'],
    localeDetection: false,
  },
  defaultNS: 'common',
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : './public/locales',
}
