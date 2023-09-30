import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    specPattern: 'tests/components/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})