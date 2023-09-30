/// <reference types="Cypress" />

export class AngularDevToolsPage{
    checkUrl(url){
        cy.verifyNewPageUrl(url); 
    }

    checkPageHeader(url, header) {
        cy.checkNewPageHeader('#devtools-overview', url, header);  
    }
}

export const onAngularDevToolsPage = new AngularDevToolsPage();