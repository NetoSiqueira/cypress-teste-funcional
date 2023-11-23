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
        MOVIMENTACAO: '[data-test=menu-movimentacao]'
    },
    CONTA:{
        NOME: '[data-test=nome]',
        BTN_SALVAR_CONTA: '.btn',
        BTN_ALTERAR: "//table//td[contains(., 'Conta de teste')]/..//i[@class='far fa-edit']"
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
    }



}

export default locators;