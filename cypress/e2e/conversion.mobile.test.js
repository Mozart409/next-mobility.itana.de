/// <reference types="Cypress" />

describe('Test conversion on mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.clearCookies()
  })

  it('visit homepage and click on kachel', function () {
    cy.visit('http://localhost:3000/')
    cy.get('.Kachel').its('length').should('be.gte', 1)

    /* cy.get('[data-cy="KachelModel3SR"]')
    cy.get('a').contains('Tesla mieten') */
  })
  it('Click Kachel Tesla Model 3SR and visit model 3 page', () => {
    cy.get('[data-cy="KachelModel3SR"]').click()
    cy.url().should('contain', '/tesla/model-3srmieten/')
    cy.get('[data-cy="TeslaModel3StandardRangePlusMieten"]')
  })
})
