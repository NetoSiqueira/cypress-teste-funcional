/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at a funcional level', () =>{

    
    before(() =>{
        cy.login('neto@neto.com', '1234')    
        
    })

    after(()=>{
        cy.resetApp()
    })

    it('Create an account', () => {
       cy.acessarMenuConta()
       cy.inserirConta('testando ')

        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    });

    it('Should update an account', () => {
        const dataHoraBrasil = new Date();
        const dataHoraUtc = new Date(dataHoraBrasil.getTime() + (dataHoraBrasil.getTimezoneOffset() * 60000));

        cy.acessarMenuConta()
        cy.get(loc.CONTA.BTN_ALTERAR).click()
        cy.get(loc.CONTA.NOME).clear()
        .type('Conta alterada ' +dataHoraUtc)
        cy.get(loc.CONTA.BTN_SALVAR_CONTA).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
        
    });
})