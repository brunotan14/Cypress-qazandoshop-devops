/// <reference types="cypress" />

describe('Teste da área de login', () => {
    beforeEach(() => {
        cy.visit('https://www.automationpratice.com.br/')
    })
    it('Teste 1 -  realizando login com usuário não cadastrado', () =>{
        cy.get('.right_list_fix > :nth-child(1) > a').click()
        cy.get('#user').type('bob14555@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
    })
    it.only('Teste 2 -  realizando login com usuário cadastrado', () => {
        cy.get('.right_list_fix > :nth-child(1) > a').click()
        cy.get('#user').type('bob@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
    })
    it('Teste 3 -  realizando login com usuário em branco', () => {
        cy.get('.right_list_fix > :nth-child(1) > a').click()
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible')
    })
    it('Teste 4 -  realizando login com senha em branco', () => {
        cy.get('.right_list_fix > :nth-child(1) > a').click()
        cy.get('#user').type('bob@gmail.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible')
    })
})