// Demonstrating the use of skip and only in Cypress tests

// Global hooks - these apply to all test suites and test cases
before(() => {
    cy.log("Global Before - Runs once before all tests")
})

beforeEach(() => {
    cy.log("Global BeforeEach - Runs before each test globally")
})

after(() => {
    cy.log("Global After - Runs once after all tests")
})

afterEach(() => {
    cy.log("Global AfterEach - Runs after each test globally")
})

// Test Suite 1 with skip
describe.skip("Test Suite 1", () => {
    before(() => {
        cy.log("Before in Test Suite 1 - This will not run due to skip")
    })

    beforeEach(() => {
        cy.log("BeforeEach in Test Suite 1 - This will not run due to skip")
    })

    after(() => {
        cy.log("After in Test Suite 1 - This will not run due to skip")
    })

    afterEach(() => {
        cy.log("AfterEach in Test Suite 1 - This will not run due to skip")
    })

    it("Test 1 in Test Suite 1", () => {
        cy.log("Executing Test 1 in Test Suite 1 - This will not run due to skip")
    })

    it("Test 2 in Test Suite 1", () => {
        cy.log("Executing Test 2 in Test Suite 1 - This will not run due to skip")
    })
})

// Test Suite 2 with only
describe.only("Test Suite 2", () => {
    before(() => {
        cy.log("Before in Test Suite 2 - Runs once before all tests in this suite")
    })

    beforeEach(() => {
        cy.log("BeforeEach in Test Suite 2 - Runs before each test in this suite")
    })

    after(() => {
        cy.log("After in Test Suite 2 - Runs once after all tests in this suite")
    })

    afterEach(() => {
        cy.log("AfterEach in Test Suite 2 - Runs after each test in this suite")
    })

    it("Test 1 in Test Suite 2", () => {
        cy.log("Executing Test 1 in Test Suite 2")
    })

    it("Test 2 in Test Suite 2", () => {
        cy.log("Executing Test 2 in Test Suite 2")
    })
})

// Test Suite 3 with mixed skip and only
describe("Test Suite 3", () => {
    before(() => {
        cy.log("Before in Test Suite 3 - Runs once before all tests in this suite")
    })

    beforeEach(() => {
        cy.log("BeforeEach in Test Suite 3 - Runs before each test in this suite")
    })

    after(() => {
        cy.log("After in Test Suite 3 - Runs once after all tests in this suite")
    })

    afterEach(() => {
        cy.log("AfterEach in Test Suite 3 - Runs after each test in this suite")
    })

    it.skip("Test 1 in Test Suite 3", () => {
        cy.log("Executing Test 1 in Test Suite 3 - This will not run due to skip")
    })

    it.only("Test 2 in Test Suite 3", () => {
        cy.log("Executing Test 2 in Test Suite 3")
    })

    it("Test 3 in Test Suite 3", () => {
        cy.log("Executing Test 3 in Test Suite 3 - This will not run due to it")
    })

    it("Test 4 in Test Suite 3", () => {
        cy.log("Executing Test 4 in Test Suite 3 - This will not run due to it")
    })
})

// Test Suite 4 to demonstrate the effect of multiple only
describe("Test Suite 4", () => {
    it("Test 1 in Test Suite 4", () => {
        cy.log("Executing Test 1 in Test Suite 4 - This will not run due to it.only on Test 2 and Test 3")
    })

    it.only("Test 2 in Test Suite 4", () => {
        cy.log("Executing Test 2 in Test Suite 4")
    })

    it.only("Test 3 in Test Suite 4", () => {
        cy.log("Executing Test 3 in Test Suite 4 - This will run because it is also marked as only")
    })

    it("Test 4 in Test Suite 4", () => {
        cy.log("Executing Test 4 in Test Suite 4 - This will not run due to it.only on Test 2 and Test 3")
    })
})
