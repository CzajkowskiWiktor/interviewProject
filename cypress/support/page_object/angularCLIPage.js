/// <reference types="Cypress" />

export class AngularCLIPage{
    checkUrl(url){
        cy.verifyNewPageUrl(url); 
    }

    checkPageHeader(url, header) {
        cy.checkNewPageHeader('#cli-overview-and-command-reference', url, header);     
    }
}

export const onAngularCLIPage = new AngularCLIPage();