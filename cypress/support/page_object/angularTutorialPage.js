/// <reference types="Cypress" />

export class AngularTutorialPage{
    checkUrl(url){
        cy.verifyNewPageUrl(url); 
    }

    checkPageHeader(url, header) {
        cy.checkNewPageHeader('#angular-tutorials', url, header);  
    }
}

export const onAngularTutorialPage = new AngularTutorialPage();