/// <reference types="cypress" />

Cypress.Commands.add('cadastro', (user, email, password) => {
        cy.get('.right_list_fix > :nth-child(2) > a').click()
        cy.get('#user').type(user),
        cy.get('#email').type(email),
        cy.get('#password').type(password),
        cy.get('#btnRegister').click()
})

Cypress.Commands.add('e2e', (name,sobrename,company,email,country,city,code,address, message) => {
    cy.get('#fname').type(name)
    cy.get('#lname').type(sobrename)
    cy.get('#cname').type(company)
    cy.get('#email').type(email)
    cy.get('#country').select(country)
    cy.get('#city').select(city)
    cy.get('#zip').type(code)
    cy.get('#faddress').type(address)
    cy.get('#messages').type(message)
    cy.get('.checkout-area-bg > .theme-btn-one').click()
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').should('be.visible').click()
})