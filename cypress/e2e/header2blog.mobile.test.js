/// <reference types="Cypress" />

describe('Test header on mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
  })
  it('open homepage and check if mobile menu is visible', () => {
    cy.viewport('iphone-6')
    cy.visit('/')
  })

  it('open mobilemenu and test if menuitems are visible and visit Blog Page', () => {
    cy.get('[data-cy=MobileMenuButton]').click()
    /*  cy.get('.HeaderItem').its('length').should('be.gte', 1) */
    cy.get('a').contains('Tesla mieten')

    cy.get('a').contains('FAQ')
    cy.get('a').contains('Kontakt')
    cy.get('a').contains('+49 711 49066 450')
    cy.get('a').contains('Blog').click()
    cy.url().should('contain', '/blog/')
  })

  it('Checking Blog Page', () => {
    cy.contains('Blog')
    cy.get('.BlogTitle').its('length').should('be.gte', 1)
    cy.contains('Weiter lesen').its('length').should('be.gte', 1)
  })
})
