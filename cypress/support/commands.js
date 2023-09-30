// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("openHomePage", () => {
  cy.visit("/");
});

Cypress.Commands.add("verifyUrl", (url) => {
  cy.url().should("eq", Cypress.config().baseUrl + "/" + url);
});

Cypress.Commands.add("verifyNewPageUrl", (url) => {
  const args = url;
  cy.origin(url, { args }, (urlPage) => {
    cy.url().should("eq", urlPage);
  });
});

Cypress.Commands.add("checkNewPageHeader", (selector , url, header) => {
  const args = {header, selector};
  cy.origin(url, { args }, ({header, selector}) => {
    cy.get(`${selector}`).then(($el) => {
      const headerEl = $el.text().trim().replace("link", "");
      expect(headerEl).to.eq(header);
    });
  });
});
