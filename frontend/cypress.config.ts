import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    specPattern: 'tests/components/**/*.cy.{js,jsx,ts,tsx}',
    indexHtmlFile: 'cypress/support/component-index.html',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})