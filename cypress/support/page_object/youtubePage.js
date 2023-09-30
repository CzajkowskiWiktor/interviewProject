/// <reference types="Cypress" />

export class YouTubePage{
    checkUrl(url){
        cy.verifyNewPageUrl(url); 
    }

    checkPageTitle(pageTitle) {
        cy.title().should('eq', pageTitle);
    }
}

export const onYouTubePage = new YouTubePage();