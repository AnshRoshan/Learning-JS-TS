/**
COMMON LOCATORS IN CYPRESS

cy.get(selector): Selects elements using CSS selectors.
cy.contains(text): Selects elements containing specific text.
cy.find(selector): Finds elements within a specific parent element.
cy.eq(index): Selects an element at a specific index from a set of elements.
cy.first(): Selects the first element in a set.
cy.last(): Selects the last element in a set.
cy.parent(): Selects the parent of an element.
cy.children(): Selects the children of an element.
cy.siblings(): Selects the siblings of an element.
cy.next(): Selects the next sibling of an element.
cy.prev(): Selects the previous sibling of an element.
*/

/**
 *  LOCATORS IN CYPRESS
 * -------------------------------------------------
 * ID   =>#idvalue
 * CLASS    =>.classname
 * MULTIPLECLASS   =>> .logo.username
 * TAG  =>tagname
 * ATTRIBUTE    =>[attribute_name = atrtribute_value]
 * NESTED Nth Value  =>> div>p.logo
 * START TEXT IS FIXED  => [attribute ^="Start"]
 * END TEXT IS FIXED  => [attribute $="end."]
 */

describe('Sample Page Tests', () => {
    before(() => {
        // Visit the page before running the tests
        cy.visit('path/to/your/sample/page.html'); // Change to the actual path of your HTML file
    });

    it('Selects elements by ID', () => {
        cy.get('#username').should('exist'); // Check if the input with id="username" exists
    });

    it('Selects elements by class', () => {
        cy.get('.header').should('contain.text', 'Welcome to Cypress Testing'); // Check if the element with class="header" contains the correct text
    });

    it('Selects elements by multiple classes', () => {
        cy.get('.btn.submit').should('have.text', 'Submit'); // Check if the button with classes "btn" and "submit" has the correct text
    });

    it('Selects elements by tag name', () => {
        cy.get('h1').should('have.length', 1); // Check if there is one <h1> element
    });

    it('Selects elements by attribute', () => {
        cy.get('[placeholder="Enter Username"]').should('exist'); // Check if the input with placeholder="Enter Username" exists
    });

    it('Selects nested nth value', () => {
        cy.get('div>p.text').should('contain.text', 'This is a sample paragraph.'); // Check if the <p> with class "text" inside a <div> contains the correct text
    });

    it('Selects elements by attribute starting text', () => {
        cy.get('[placeholder^="Enter"]').should('have.length', 2); // Check if there are two elements with a placeholder attribute starting with "Enter"
    });

    it('Selects elements by attribute ending text', () => {
        cy.get('[placeholder$="Password"]').should('exist'); // Check if the input with placeholder ending with "Password" exists
    });

    it('Selects elements containing specific text', () => {
        cy.contains('Forgot Password?').should('exist'); // Check if the element containing the text "Forgot Password?" exists
    });

    it('Selects elements within a specific parent', () => {
        cy.get('#main').find('.text').should('contain.text', 'This is a sample paragraph.'); // Check if the element with class "text" within the element with id="main" contains the correct text
    });

    it('Selects element at a specific index', () => {
        cy.get('.input-field').eq(1).should('have.attr', 'placeholder', 'Enter Password'); // Check if the second element with class "input-field" has the correct placeholder
    });

    it('Selects the first element', () => {
        cy.get('.input-field').first().should('have.attr', 'placeholder', 'Enter Username'); // Check if the first element with class "input-field" has the correct placeholder
    });

    it('Selects the last element', () => {
        cy.get('.input-field').last().should('have.attr', 'placeholder', 'Enter Password'); // Check if the last element with class "input-field" has the correct placeholder
    });

    it('Selects the parent of an element', () => {
        cy.get('.submit').parent().should('have.id', 'main'); // Check if the parent of the element with class "submit" has the id "main"
    });

    it('Selects the children of an element', () => {
        cy.get('#main').children().should('have.length', 6); // Check if the element with id "main" has six children
    });

    it('Selects the siblings of an element', () => {
        cy.get('.text').siblings().should('have.length', 5); // Check if the element with class "text" has five siblings
    });

    it('Selects the next sibling of an element', () => {
        cy.get('.text').next().should('have.class', 'btn submit'); // Check if the next sibling of the element with class "text" has the correct classes
    });

    it('Selects the previous sibling of an element', () => {
        cy.get('.submit').prev().should('have.class', 'text'); // Check if the previous sibling of the element with class "submit" has the class "text"
    });
});
