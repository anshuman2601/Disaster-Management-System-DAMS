/* eslint-disable no-undef */
describe('Create a Request', () => {
    it('should be able to create a request', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('title').contains('Disaster');
        cy.get('#username').type('John');
        cy.get('#password').type('testtest');
        cy.get('#login').first().click();
        cy.get('#add-request').click();
        cy.get('#req-dis-id').type('6');
        cy.get('#req-dis-date').type('2020-12-31');
        cy.get('#req-item-id').type('9');
        cy.get('#req-create').first().click();
    });
    });