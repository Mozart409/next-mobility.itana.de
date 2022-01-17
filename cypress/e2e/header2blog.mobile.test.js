/// <reference types="Cypress" />
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

const urls = ['http://localhost:3000']

const headerTest = cyView(devices)

headerTest(urls, () => {
  describe(`Test header on ${devices}`, () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
      cy.clearCookies()
    })

    const baseUrl = Cypress.env('HOST') || 'http://localhost:3000'

    it('open mobilemenu and test if menuitems are visible', function () {
      cy.visit(baseUrl)
      cy.get('[data-cy=MobileMenuButton]').click()
      cy.get('a').contains('Tesla mieten')
      cy.get('a').contains('FAQ')
      cy.get('a').contains('Kontakt')
      cy.get('a').contains('+49 711 49 06 64 50')
    })

    it('Checking Blog Page', () => {
      cy.visit(baseUrl + '/blog/')
      cy.url().should('contain', '/blog/')
      cy.contains('Blog')
      cy.get('.BlogTitle').its('length').should('be.gte', 1)
      cy.contains('Weiter lesen').its('length').should('be.gte', 1)
    })
  })
})
