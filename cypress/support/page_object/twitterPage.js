/// <reference types="Cypress" />

export class TwitterPage{
    checkUrl(url){
        cy.verifyNewPageUrl(url); 
    }

    checkPageTitle(pageTitle) {
        cy.title().should('eq', pageTitle);
    }
}

export const onTwitterPage = new TwitterPage();