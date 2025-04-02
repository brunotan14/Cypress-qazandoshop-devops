/// <reference types="cypress" />

describe ('Acessando o site', () =>{
    beforeEach (() => {
        cy.visit('https://www.automationpratice.com.br/')
    })
    it ('teste de simulação de compra no site', () =>{
        cy.get('.right_list_fix > :nth-child(1) > a').contains('Login').click()
        cy.get('#user').type('bob@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()

        cy.get('#swal2-title').should('be.visible')
        cy.get('.swal2-confirm').should('be.visible').click()

        cy.get(':nth-child(3) > .offcanvas-toggle > .fa').should('be.visible').click()
        cy.get('.offcanvas-cart > :nth-child(1) > .text-right > .offcanvas-wishlist-item-delete > .fa').should('be.visible').click()
        cy.get('#offcanvas-add-cart > .offcanvas-header > .offcanvas-close > img').should('be.visible').click()

        cy.get(':nth-child(4) > .offcanvas-toggle > .fa').should('be.visible').click()
        cy.get('#menuShopText').should('be.visible').click()
        cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(5) > a').should('be.visible').click()

        cy.get(':nth-child(1) > .product_wrappers_one > .thumb > .image > .hover-image').click()
        cy.get('.customs_sel_box').select('XL')
        cy.get('.product-color-green').click()
        cy.get('.links_Product_areas > .theme-btn-one').should('be.visible').click() // adicioando ao carrinho
        cy.get('.swal2-popup').should('be.visible').click()

        cy.wait(5000) 
        cy.get(':nth-child(3) > .offcanvas-toggle > .fa', { timeout: 10000 }).should('be.visible').click() // abrindo o carrinho
        cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').should('be.visible').click()

        cy.e2e('bob', 'zom', 'Unipê', 'bob@gmail.com', 'usa', 'Aland Islands', 56000, 'Rua Campina', 'Pedido realizado com sucesso')
    })
})

