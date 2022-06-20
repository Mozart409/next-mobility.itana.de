import {defineConfig} from 'cypress';

export default defineConfig({
  video: false,
  projectId: '5k6fpq',
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  trashAssetsBeforeRuns: true,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.

    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
