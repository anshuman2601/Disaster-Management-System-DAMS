/* eslint-disable no-undef */
// cypress test for adding an item to the list

describe('Add Item', () => {
    it('should be able to add an item to the list', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('title').contains('Disaster');
        cy.get('#username').type('Jane');
        cy.get('#password').type('testtest');
        cy.get('#login').first().click();
        cy.get('#add-item').click();
        cy.get('#item-name').type('Mineral Water Bottle');
        // cy.get('#item-quantity').type('1');
        cy.get('#item-description').type('0.5L bottle of water');
        cy.get('#item-submit').click();
        //cy.get('#item-delete').click(); // delete the item
    }
    );
});
