/// <reference types="Cypress" />

//custom error message
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

export class FormPage {
  checkUrl() {
    cy.verifyUrl("form");
  }

  checkTheNameInputValue(name = "Dr IQ") {
    cy.get("#name").should("have.value", name);
  }

  fillTheNameInputValue(name) {
    //accept only a-z characters without numbers with optional space
    var regExpression = /^[A-Za-z]+( [A-Za-z]+)*$/;

    if (name.length > 32) {
      throw new ValidationError(`"${name}" is longer than 32 characters`);
    } else if (!regExpression.test(name)) {
      throw new ValidationError(`"${name}" does not match regex expression`);
    } else {
      cy.get("#name").clear().type(name).should("have.value", name);
    }
  }

  checkTheAlterEgoInputValue(alterEgo = "Chuck Overstreet") {
    cy.get("#alterEgo").should("have.value", alterEgo);
  }

  fillTheAlterEgoInputValue(alterEgo) {
    //accept any word characters without numbers with optional space
    var regExpression = /^\w+( \w+)*$/;
    if (alterEgo.length > 32) {
      throw new ValidationError(`${alterEgo} is longer than 32 characters`);
    } else if (!regExpression.test(alterEgo)) {
      throw new ValidationError(
        `"${alterEgo}" does not match regex expression`
      );
    } else {
      cy.get("#alterEgo").clear().type(alterEgo).should("have.value", alterEgo);
    }
  }

  checkTheHeroPowerValue(heroPower = "Really Smart") {
    cy.get("#power").find(":selected").should("have.text", heroPower);
  }

  changeTheHeroPoweValue(heroPower) {
    cy.get("#power")
      .select(heroPower, { force: true })
      .should("have.value", heroPower);
  }

  clickSubmitBtn() {
    cy.get("button")
      .filter('[type="submit"]')
      .should("contain", "Submit")
      .click();
  }

  clickNewHeroBtn() {
    cy.get("button")
      .filter(".btn-default")
      .should("contain", "New Hero")
      .click();
  }

  checkInputValidStatus(selector) {
    cy.get(`#${selector}`)
      .should("have.class", "ng-valid")
      .and("have.css", "border-left", "5px solid rgb(66, 169, 72)");
  }

  checkInputInvalidStatus(selector) {
    cy.get(`#${selector}`)
      .should("have.class", "ng-invalid")
      .and("have.css", "border-left", "5px solid rgb(169, 68, 66)");
  }

  checkResultsFormHidden() {
    cy.get(".results > div").should("have.attr", "hidden");
  }

  checkResultsFormVisible() {
    cy.get(".results > div").should("be.visible");
  }

  checkInputFormHidden() {
    cy.get("app-form > div.container > div:first-child").should(
      "have.attr",
      "hidden"
    );
  }

  clickEditBtn() {
    cy.get("button").contains("Edit").click();
  }

  checkResultFormHeader() {
    cy.get(".results h2").should("have.text", "You submitted the following:");
  }

  checkResultFormInput(inputHeader, inputVar) {
    cy.get(".results .row")
      .contains(`${inputHeader}`)
      .next()
      .then(($el) => {
        const elementText = $el.text().trim();
        expect(elementText).to.eq(inputVar);
      });
  }

  clearAlterEgoInputField() {
    cy.get("#alterEgo").clear();
  }

  clearPowerInputField() {
    cy.get("#power").clear();
  }

  clearNameInputField() {
    cy.get("#name").clear();
  }

  checkSubmitBtnDisabledStatus() {
    cy.get("button")
      .filter('[type="submit"]')
      .contains("Submit")
      .should("have.attr", "disabled");
  }

  checkAlerDangerMessage() {
    cy.get("#name")
      .next()
      .should("be.visible")
      .should("have.class", "alert-danger")
      .and("contain", "Name is required");
  }
}

export const onFormPage = new FormPage();
