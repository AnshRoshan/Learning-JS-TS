describe("Test Suite for Drop Down menu", () => {
    before(() => {
        cy.visit("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")

    })
    it("Single select", () => {
        cy.get("#select-demo").select("Tuesday")
        cy.get("#select-demo").select(2)
        cy.get('#select-demo option:selected').should('have.length', 1)
        cy.get('#select-demo option:selected').should('have.text', 'Wednesday')
        cy.get('#select-demo option:selected').should('have.text', 'Wednesday')
    })

    it("Multi select", () => {
        cy.get('#multi-select').select(["Ohio", "Texas"])
        cy.get('#multi-select').select([4, 5])
        cy.get('#multi-select option:selected').should('have.length', 2)
        cy.get('#multi-select option:selected').should('have.text', 'Texas')
        cy.get('#multi-select option:selected').should('have.text', 'Ohio')
    })

    it("Select All", () => {
        cy.get('#multi-select').select(["All"])
        cy.get('#multi-select option:selected').should('have.length', 1)
        cy.get('#multi-select option:selected').should('have.text', 'All')
    })

    it("Select with text without option/select tag", () => {
        cy.visit("https://www.amazon.in/")
        cy.get('#twotabsearchtextbox').type("Macbook Air m3")
        cy.get('#left-pane-results-container').contains("Macbook Air m3").click()
    })
})