/// <reference types="Cypress" />

describe('Marco conversion test Model 3 Performance', () => {
  it('Visit Homepage and check if FahrzeugKacheln are successfully loaded', () => {
    cy.visit('/')
    cy.get('.Kachel')
      .its('length')
      .should('be.gte', 1)
  })
  it('Click Kachel Tesla Model 3 and visit model 3 page', () => {
    cy.get('[data-cy=KachelModel3Performance]').click()
    cy.url().should('contain', '/tesla/model-3-mieten/')
    /*  cy.getTestElement('KachelModel3') */
  })
  it('Find CTA for Model 3 Performance and check links', () => {
    cy.get('[data-cy=TeslaModel3PerformanceMieten]')
      .should('be.visible')
      .find('a')
      .should(
        'have.attr',
        'href',
        'https://reservation.itana.de/#tabs-fzggruppe-4'
      )
  })
  it('Find Quicklinks and test is visible', () => {
    cy.get('[data-cy=QuickLinks]').should('be.visible')
  })
})
