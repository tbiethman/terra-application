const siteConfig = {
  sideEffectImports: [
    '../mock/**/*.mock.js',
  ],
  appConfig: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de', 'en-GB', 'es', 'fr', 'pt'],
  },
};

module.exports = siteConfig;
