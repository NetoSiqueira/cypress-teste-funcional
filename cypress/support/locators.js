const locators = {

    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    
    MENU:{
        HOME:'[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]'
    },
    CONTA:{
        NOME: '[data-test=nome]',
        BTN_SALVAR_CONTA: '.btn',
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`
    },
    MESSAGE: '.toast-message',
    MOVIMENTO:{
        DESCRICAO: '#descricao',
        VALOR:'[data-test=valor]',
        INTERESSADO:'#envolvido',
        CONTA_MOV: '[data-test=conta]',
        BNT_MOV:'.btn-primary',
        BNT_STATUS: '[data-test=status]'
    },
    SALDO:{
        FN_XP_SALDO_CONTA: nome =>`//td[contains(., '${nome}')]/../td[2]`
    },
    EXTRATO:{
        FN_XP_REMOVER_ELEMENTO: conta=> `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`
    }



}

export default locators;