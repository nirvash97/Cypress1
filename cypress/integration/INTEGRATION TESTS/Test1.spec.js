describe("cypress Started" , () => {
    it('First Visit', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
        cy.get('.action-email')
        .type("fake@gmail.com")
        .should('have.value','fake@gmail.com')
        cy.get('.action-form').find('.form-control').type('axa')
        cy.get('.action-form').submit()
    })
})