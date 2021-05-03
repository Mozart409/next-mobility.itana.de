/// <reference types="Cypress" />

describe('Test header on mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:3000/')
    //   cy.get('[data-testid=uc-close-button]').click()
  })

  it('open mobilemenu and test if menuitems are visible', function () {
    cy.get('[data-cy=MobileMenuButton]').click()
    cy.get('a').contains('Tesla mieten')
    cy.get('a').contains('FAQ')
    cy.get('a').contains('Kontakt')
    cy.get('a').contains('+49 711 49 06 64 50')
  })

  it('Checking Blog Page', () => {
    cy.visit('http://localhost:3000/blog/')
    cy.url().should('contain', '/blog/')
    cy.contains('Blog')
    cy.get('.BlogTitle').its('length').should('be.gte', 1)
    cy.contains('Weiter lesen').its('length').should('be.gte', 1)
  })
})
