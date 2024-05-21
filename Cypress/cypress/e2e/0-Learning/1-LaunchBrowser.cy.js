// in describe use test suite name
describe.skip("Home Page", () => {
    // CHANGING THE VIEWPORT
    it("change viewports", () => {
        cy.viewport(900, 400)
        cy.visit("https://www.google.com")
    })
})


// Example 1: Viewport Options-in test suite
describe.skip("Flipkart test Suite", { viewportHeight: 600, viewportWidth: 800 }, () => {
    it("Test 1 in Test Suite 1", () => {
        cy.log("Executing Test 1 in Test Suite 1")
        cy.visit("https://www.flipkart.com/")
    })

    it("Test 2 in Test Suite 1", () => {
        cy.log("Executing Test 2 in Test Suite 1")
        cy.visit("https://www.amazon.com/")
    })
})


// Example 2: Viewport Device Presets
describe.skip('Viewport Device Presets', () => {
    beforeEach(() => {
        // Replace with your application's URL
        cy.visit("https://www.flipkart.com/")
    })

    it('Sets viewport to iPhone 6', () => {
        cy.viewport('iphone-6')
        cy.log('Viewport set to iPhone 6 dimensions')
    })

    it('Sets viewport to iPad 2', () => {
        cy.viewport('ipad-2', 'landscape')
        cy.log('Viewport set to iPad 2 dimensions')
    })

    it('Sets viewport to MacBook 15', () => {
        cy.viewport('macbook-15', 'landscape')
        cy.log('Viewport set to MacBook 15 dimensions')
    })

    it('Sets viewport to Samsung S10', () => {
        cy.viewport('samsung-s10')
        cy.log('Viewport set to Samsung S10 dimensions')
    })
})


// Example 3: Changing Viewport Dynamically
describe.skip('Dynamic Viewport Change', () => {
    beforeEach(() => {
        cy.visit('https://example.com') // Replace with your application's URL
    })

    it('Tests responsiveness by changing viewport sizes', () => {
        const sizes = [
            [320, 480],   // Mobile portrait
            [480, 320],   // Mobile landscape
            [768, 1024],  // Tablet portrait
            [1024, 768],  // Tablet landscape
            [1280, 720],  // Desktop
            [1920, 1080]  // Full HD
        ]

        sizes.forEach(size => {
            cy.viewport(size[0], size[1])
            cy.log(`Viewport set to ${size[0]}x${size[1]}`)
            // Add assertions to verify responsive behavior
        })
    })
})

// Example 4: Setting Viewport with Options
describe.skip('Viewport with Options', () => {
    beforeEach(() => {
        cy.visit('https://example.com') // Replace with your application's URL
    })

    it('Sets viewport to 1024x768 with logging disabled', () => {
        cy.viewport(1024, 768, { log: false })
        cy.log('Viewport set to 1024x768 without logging to command log')
    })
})
