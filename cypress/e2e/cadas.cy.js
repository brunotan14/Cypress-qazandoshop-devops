describe('Acessando o site', () => {
   beforeEach(() => {
    cy.visit('https://www.automationpratice.com.br/') 
   })

 it('Teste 1 - Cadastro de usuário com email despadronizado', () => {
  cy.cadastro('Bob', 'bob@bob', '123456')
 })
 it('Teste 2 - Cadastro de usuário com nome vazio', () => {
   cy.cadastro('  ', 'bob@gmail', '123456')
 })
 it('Teste 3 - Cadastro de usuário com senha vazia', () => {
   cy.cadastro('Bob', 'bob@gmail', '  ')

 }) 
 it('Teste 4 - Cadastro de usuário', () => {
  cy.cadastro('Bob', 'bob@gmail.com', '123456')
 })
})