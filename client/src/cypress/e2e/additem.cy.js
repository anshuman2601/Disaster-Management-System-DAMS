// cypress test for adding an item to the list

describe('Add Item', () => {
    it('should be able to add an item to the list', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('title').contains('Disaster');
        cy.get('#username').type('Jane');
        cy.get('#password').type('testtest');
        cy.get('#login').first().click();
        cy.get('#add-item').click();
        cy.get('#item-name').type('test item');
        cy.get('#item-quantity').type('1');
        cy.get('#item-unit').type('test unit');
        cy.get('#item-description').type('test description');
        cy.get('#item-submit').click();
        cy.get('#item-name').should('have.value', '');
        cy.get('#item-quantity').should('have.value', '');
        cy.get('#item-unit').should('have.value', '');
        cy.get('#item-description').should('have.value', '');
    }
    );
});
