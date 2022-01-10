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
    cy.get('rentware-article-booking[article-id="9QD87M"]').should('be.visible')
  })

  it('Click Kachel Tesla Model X and visit model X page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="KachelModelX"]').click()
    cy.url().should('contain', '/tesla/model-x-mieten/')
    cy.get('rentware-article-booking[article-id="11JUVM"]').should('be.visible')
  })

  it('Click Kachel Tesla Model 3LR and visit model LR page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="KachelModel3LR"]').click()
    cy.url().should('contain', '/tesla/model-3-long-range-mieten/')
    cy.get('rentware-article-booking[article-id="6WVT9M"]').should('be.visible')
  })

  it('Click Kachel Tesla Model 3 Performance and visit model 3Performance page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="KachelModel3Performance"]').click()
    cy.url().should('contain', '/tesla/model-3-mieten/')
    cy.get('rentware-article-booking[article-id="9YTCVE"]').should('be.visible')
  })
})
