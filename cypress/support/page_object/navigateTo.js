/// <reference types="Cypress" />

export class NavigateTo{
    goToFormPage(){
        cy.get('#form-view-link').click();
      }
    
      goToMainPage(){
        cy.get('#main-view-link').click();
      }
    
      goToStepperPage(){
        cy.get('#stepper-view-link').click();
      }

      clickOnIconTopNavbar(iconTitle) {
        cy.get(".toolbar")
          .find(`[title="${iconTitle}"]`)
          .invoke("removeAttr", "target")
          .click();
      }
    
      checkTopNavbarIconVisibility(iconTitle){
        cy.get(".toolbar")
        .find(`[title="${iconTitle}"]`)
        .should('be.visible');
      }
    
      checkTopNavbarIconHrefLink(iconTitle,iconHref){
        cy.get(".toolbar")
        .find(`[title="${iconTitle}"]`)
        .invoke('attr', 'href')
        .then(href => {
            expect(href).to.eq(iconHref);
        })
      }
}

export const onNavigateTo = new NavigateTo();