describe('sample test' , () => {
    it('do nothing' , () => {
        expect(true).to.equal(true)
    })

    it('Visit' , () => {
        cy.visit('https://example.cypress.io')
        cy.contains('Kitchen Sink')
    })
})