// <reference types="cypress"/>

import loc from '../../support/locators'

describe('Should test at a funcional level', () =>{

    
    before(() =>{
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get(loc.LOGIN.USER).type('neto@neto.com')
        cy.get(loc.LOGIN.PASSWORD).type('1234')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
    })


    it('Login', () => {
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
    });

    it('Create an account', () => {
        const dataHoraBrasil = new Date();
        const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset() * 60000));
      

        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTA.NOME).type('Testando'+dataHoraUtc)
        cy.get(loc.CONTA.BTN_SALVAR_CONTA).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
        
    });

    it('Should update an account', () => {
        const dataHoraBrasil = new Date();
        const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset() * 60000));

        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTA.BTN_ALTERAR).click()
        cy.get(loc.CONTA.NOME).clear()
        .type('Conta alterada'+dataHoraUtc)
        cy.get(loc.CONTA.BTN_SALVAR_CONTA).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
        
    });
})