const locators = {

    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    
    MENU:{
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]'
    },
    CONTA:{
        NOME: '[data-test=nome]',
        BTN_SALVAR_CONTA: '.btn',
        BTN_ALTERAR: ':nth-child(1) > :nth-child(2) > :nth-child(1) > .far'
    },
    MESSAGE: '.toast-message'



}

export default locators;