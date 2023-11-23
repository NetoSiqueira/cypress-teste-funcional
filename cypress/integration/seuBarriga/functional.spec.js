/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at a funcional level', () =>{

    
    before(() =>{
        cy.login('neto@neto.com', '1234')    
        cy.resetApp()
        
    })


    it('Create an account', () => {
       cy.acessarMenuConta()
       cy.inserirConta('Conta de teste')

        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    });

    it('Should update an account', () => {
       // const dataHoraBrasil = new Date();
       // const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset() * 60000));

        cy.acessarMenuConta()
        cy.xpath(loc.CONTA.BTN_ALTERAR).click()
        cy.get(loc.CONTA.NOME).clear()
        .type('Conta alterada')
        cy.get(loc.CONTA.BTN_SALVAR_CONTA).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
        
    });

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()

        cy.get(loc.CONTA.NOME).type('Conta alterada')
        cy.get(loc.CONTA.BTN_SALVAR_CONTA).click()
        cy.get(loc.MESSAGE).should('contain', 'code 400')
    });

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTO.VALOR).type('123')
        cy.get(loc.MOVIMENTO.INTERESSADO).type('Int')
        cy.get(loc.MOVIMENTO.CONTA_MOV).select('Conta alterada')
        cy.get(loc.MOVIMENTO.BNT_STATUS).click()
        cy.get(loc.MOVIMENTO.BNT_MOV).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')
    });


    it('Should get Balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta alterada')).should('contain', '123,00')
        
    });
})