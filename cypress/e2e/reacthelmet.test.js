/// <reference types="Cypress" />

describe('React Helmet', () => {
  it('Visit Home Page', () => {
    cy.visit('/')
  })
  it('Find react helmet and validate its there', () => {
    cy.get('[data-react-helmet]')
      .its('length')
      .should('be.gte', 1)
  })
})
