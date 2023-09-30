/// <reference types="Cypress" />

export class DiscordPage{
    checkUrl(url){
        cy.verifyNewPageUrl(url); 
    }

    checkPageTitle(pageTitle) {
        cy.title().should('eq', pageTitle);
    }
}

export const onDiscordPage = new DiscordPage();