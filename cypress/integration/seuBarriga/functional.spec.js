// <reference types="cypress"/>

describe('Should test at a funcional level', () =>{

    
    before(() =>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('neto@neto.com')
        cy.get(':nth-child(2) > .form-control').type('1234')
        cy.get('.btn').click()
    })


    it('Login', () => {
        cy.get('.toast-message').should('contain', 'Bem vindo')
    });

    it('Create an account', () => {
        const dataHoraBrasil = new Date();
        const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset() * 60000));
      

        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Testando'+dataHoraUtc)
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')
        
    });
})