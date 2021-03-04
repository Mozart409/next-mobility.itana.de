/// <reference types="Cypress" />

describe('Marco conversion test Model X', () => {
  it('Visit Homepage and check if FahrzeugKacheln are successfully loaded', () => {
    cy.visit('/')
    cy.get('.Kachel')
      .its('length')
      .should('be.gte', 1)
  })
  it('Click Kachel Tesla Model X and visit model x page', () => {
    cy.get('[data-cy=KachelModelX]').click()
    cy.url().should('contain', '/tesla/model-x-mieten/')
    /*  cy.getTestElement('KachelModel3') */
  })
  it('Find CTA for Model 3 Performance and check links', () => {
    cy.get('[data-cy=TeslaModelXMieten]')
      .should('be.visible')
      .find('a')
      .should(
        'have.attr',
        'href',
        'https://reservation.itana.de/#tabs-fzggruppe-1'
      )
  })
  it('Find Quicklinks and test is visible', () => {
    cy.get('[data-cy=QuickLinks]').should('be.visible')
  })
})
