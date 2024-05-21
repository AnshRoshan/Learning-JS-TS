describe("Cypress Elements Examples", () => {

    before(() => {
        // Visit the page before running the tests
        cy.visit('https://naveenautomationlabs.com/opencart/'); // Change to the actual path of your HTML file
    })

    it("DOM command in Cypress", () => {
        // Get the first image and click on it
        // cy.get('.image').first().click()

        // Get the last image and click on it
        // cy.get('.image').last().click()

        // Get the 3rd image and click on it
        // cy.get('.image').eq(2).click()

        cy.contains('.img-responsive', 'MacBook').click()
    })


})