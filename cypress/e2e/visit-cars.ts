/// <reference types="Cypress" />
// deepcode ignore ExtractPortToVariable/test: <please specify a reason of ignoring this>

const cyView = require('cy-view')

const devices = [
  {
    model: 'macbook-15',
    width: 1440,
    height: 900,
  },
  {
    model: 'ipad-2',
    width: 768,
    height: 1024,
  },
  {
    model: 'iphone-6+',
    width: 414,
    height: 736,
  },
]

const baseUrl = Cypress.env('HOST') || 'http://localhost:3000'

const urls = ['http://localhost:3000']

const rentWareTest = cyView(devices)

rentWareTest(urls, () => {
  describe('Test conversion on multiple devices', () => {
    /*  beforeEach(() => {
      sizes.forEach((size) => {
        // an array of different viewports

        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1])
        } else {
          cy.viewport(size)
        }
      })
    }) */

    it('visit homepage and click on kachel', function () {
      cy.visit(baseUrl)
      cy.get('.Kachel').its('length').should('be.gte', 1)

      /* cy.get('[data-cy="KachelModel3"]')
    cy.get('a').contains('Tesla mieten') */
    })
    it('Click Kachel Tesla Model 3 and visit model 3 page', () => {
      cy.get('[data-cy="KachelModel3"]').click()
      cy.url().should('contain', '/tesla/model-3srmieten/')
      const selector = '[data-cy="TeslaModel3StandardRangePlusMieten"]'
      cy.get(selector).should('be.visible')
      cy.get(selector)
        .children('.anfrage')
        .should('have.attr', 'href')
        .and('deep.equal', '/buchungs-anfrage/')
      cy.go('back')
    })

    it('Click Kachel Tesla Model X and visit model X page', () => {
      cy.get('[data-cy="KachelModelX"]').click()
      cy.url().should('contain', '/tesla/model-x-mieten/')
      const selector = '[data-cy="TeslaModelXMieten"]'
      cy.get(selector).should('be.visible')
      cy.get(selector)
        .children('.anfrage')
        .should('have.attr', 'href')
        .and('deep.equal', '/buchungs-anfrage/')
      cy.go('back')
    })

    it('Click Kachel Tesla Model 3LR and visit model LR page', () => {
      cy.get('[data-cy="KachelModel3LR"]').click()
      cy.url().should('contain', '/tesla/model-3-long-range-mieten/')
      const selector = '[data-cy="TeslaModel3LongRangeMieten"]'
      cy.get(selector).should('be.visible')
      cy.get(selector)
        .children('.anfrage')
        .should('have.attr', 'href')
        .and('deep.equal', '/buchungs-anfrage/')
      cy.go('back')
    })

    it('Click Kachel Tesla Model 3 Performance and visit Model 3 Performance page', () => {
      cy.get('[data-cy="KachelModel3Performance"]').click()
      cy.url().should('contain', '/tesla/model-3-mieten/')
      const selector = '[data-cy="TeslaModel3PerformanceMieten"]'
      cy.get(selector).should('be.visible')
      cy.get(selector)
        .children('.anfrage')
        .should('have.attr', 'href')
        .and('deep.equal', '/buchungs-anfrage/')
      cy.go('back')
    })
  })
})
