/// <reference types="Cypress" />

export class StepperPage {
  checkUrl() {
    cy.verifyUrl("stepper");
  }

  fillTheNameInput(name) {
    cy.get("#mat-input-0").clear().type(name).should("have.value", name);
  }

  checkIfStepIsSelected(selector, value) {
    cy.get(`#${selector}`).should("have.attr", "aria-selected", value);
  }

  clickNextBtn() {
    cy.get("button").filter('[type="submit"]').filter(':visible').contains("Next").click();
  }

  clickBackBtn() {
    cy.get("button").filter(':visible').contains("Back").click();
  }

  clickResetBtn() {
    cy.get("button").filter(':visible').contains("Reset").click();
  }

  checkIconEditVisibility(selector){
    cy.get(`#${selector}`).find('.mat-step-icon-state-edit').find('span').should('contain', 'Editable');
  }

  fillThAddressInput(address) {
    cy.get("#mat-input-1").clear().type(address).should("have.value", address);
  }

  checkStepperDetails(name, address){
    cy.get('#cdk-step-content-0-2').find('p').each(($el, index) => {
        const textRow = $el.text().trim();
        if(textRow.includes(name)){
            const nameFromText = textRow.split(':')[1].trim();
            expect(nameFromText).to.eq(name);
        } else if(textRow.includes(address)){
            const addressFromText = textRow.split(':')[1].trim();
            expect(addressFromText).to.include(address);
        } else {
            expect(textRow).to.eq('You are now done!');
        }

    })
  }

  checkInputFieldStatus(selector){
    cy.get(`#${selector}`).find('mat-form-field').should('have.class', 'mat-form-field-invalid');
    //required symbol in input field
    cy.get('label.mat-form-field-label').filter(':visible').contains('*');
    //color of underline
    cy.get('span.mat-form-field-ripple').filter(':visible').should('have.css', 'background-color', 'rgb(244, 67, 54)')
  }

  checkInputErrorMessage(text){
    cy.get('small.text-danger').filter(':visible').then($el => {
      const errMsg = $el.text().trim();
      expect(errMsg).to.eq(text);
    })
  }

  checkInputEmptyNameValue(){
    cy.get("#mat-input-0").should('have.value', '');
  }

  checkInputEmptyAddressValue(){
    cy.get("#mat-input-1").should('have.value', '');
  }

  checkInputAddressValue(address){
    cy.get("#mat-input-1").should('have.value', address);
  }

  checkInputNameValue(name){
    cy.get("#mat-input-0").should('have.value', name);
  }
}

export const onStepperPage = new StepperPage();
