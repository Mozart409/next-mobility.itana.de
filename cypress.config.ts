import {defineConfig} from 'cypress';

export default defineConfig({
  projectId: '5k6fpq',
  video: false,
  screenshotOnRunFailure: false,
  trashAssetsBeforeRuns: true,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  component: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
