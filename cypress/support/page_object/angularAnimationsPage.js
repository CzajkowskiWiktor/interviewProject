/// <reference types="Cypress" />

export class AngularAnimationsPage{
    checkUrl(url){
        cy.verifyNewPageUrl(url);
    }

    checkPageTitle(pageTitle) {
        cy.title().should('eq', pageTitle);
    }

    checkPageHeader(url, header) {
        cy.checkNewPageHeader('#introduction-to-angular-animations', url, header);      
    }
}

export const onAngularAnimationsPage = new AngularAnimationsPage();