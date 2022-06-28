// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />


import { mount } from 'cypress/react'


declare global {
    namespace Cypress {
      interface Chainable {
        mount: typeof mount
      }
      interface Window {
        dataLayer: Record<string, any>[];
        workbox: any;
      }
    }
  }
  