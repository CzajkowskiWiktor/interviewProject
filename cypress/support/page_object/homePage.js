/// <reference types="Cypress" />

export class HomePage {
  checkTopLogoVisibility() {
    cy.get("#rocket").should("be.visible");
  }

  checkTopLogoTitleRocket(titleRocket) {
    cy.get("#rocket").find("title").should("have.text", titleRocket);
  }

  checkTopLogoCircleColor(colorCircle) {
    cy.get("#Ellipse_8").should("have.attr", "fill", colorCircle);
  }

  checkTopTitleText(titleText) {
    cy.get("#rocket").next("span").should("have.text", titleText);
  }

  checkTopContentColor() {
    cy.get("div.card").should(
      "have.css",
      "background-color",
      "rgb(25, 118, 210)"
    );
  }

  checkTerminalVisibility() {
    cy.get(".terminal").should("be.visible");
  }

  checkResourcesTitle(titleText) {
    cy.get("h2").first().should("have.text", titleText);
  }

  checkResourcesSubtitle(subtitleText) {
    cy.contains("h2", "Resources").next("p").should("have.text", subtitleText);
  }

  checkNextStepsTitle(titleText) {
    cy.get("h2").eq(1).should("have.text", titleText);
  }

  checkNextStepsSubtitle(subtitleText) {
    cy.contains("h2", "Next Steps").next("p").should("have.text", subtitleText);
  }

  checkAmountAndVisibilityOfCardsInSection(amount) {
    cy.get(".card-container")
      .first()
      .find("a")
      .should("have.length", amount)
      .and("be.visible");
  }

  checkEachCardContentInSection(arrBtnText) {
    cy.get(".card-container")
      .first()
      .find("a")
      .each(($el, index) => {
        //verify card text
        const cardText = $el.find("span").text().trim();
        expect(cardText).to.eq(arrBtnText[index]);
        //verify card icon
        cy.wrap($el).find("svg.material-icons").first().should("be.visible");
        //verify if card has righ arrow
        cy.wrap($el).find("svg.material-icons").eq(1).should("be.visible");
      });
  }

  clickCardByTextInResourcesSection(text) {
    //verify if text provided is in Resources cards
    expect(text).to.be.oneOf([
      "Learn Angular",
      "CLI Documentation",
      "Angular Blog",
      "Angular DevTools",
    ]);
    cy.get(".card-container")
      .first()
      .find("a")
      .each(($el, index) => {
        //click on card by text
        const actualCardText = $el.find("span").text().trim();
        if (actualCardText === text) {
          cy.wrap($el).invoke("removeAttr", "target").click();
        }
      });
  }

  clickCardByTextInNextStepsSection(text) {
    //verify if text provided is in Next Steps cards
    expect(text).to.be.oneOf([
      "New Component",
      "Angular Material",
      "Add PWA Support",
      "Add Dependency",
      "Run and Watch Tests",
      "Build for Production",
    ]);
    cy.get(".card-container")
      .eq(1)
      .find("button")
      .each(($el, index) => {
        //click on card by text
        const actualCardText = $el.find("span").text().trim();
        if (actualCardText === text) {
          cy.wrap($el).invoke("removeAttr", "target").click();
        }
      });
  }

  checkCodeInConsoleField(codeText) {
    cy.get(".terminal")
      .find("pre")
      .then(($el) => {
        const code = $el.text().trim();
        expect(code).to.eq(codeText);
      });
  }

  clickCardAndVerifyTerminalOutput(cardNameArr, codeOutputArr) {
    cy.get(".card-container")
      .eq(1)
      .find("button")
      .each(($el, index) => {
        //click on card by text
        const actualCardText = $el.find("span").text().trim();
        if (actualCardText === cardNameArr[index]) {
          cy.wrap($el).invoke("removeAttr", "target").click();
          //check terminal output code
          this.checkCodeInConsoleField(codeOutputArr[index]);
        }
      });
  }

  checkFooterText() {
    cy.get("footer").should("contain", "Love Angular?");
  }

  clickFooterLinkStar() {
    cy.get("footer")
      .contains("a", "Give our repo a star.")
      .invoke("attr", "href")
      .then((href) => {
        const args = href;
        cy.get("footer")
          .contains("a", "Give our repo a star.")
          .invoke("removeAttr", "target")
          .click();
        //check url
        cy.origin(args, { args }, (urlPage) => {
          cy.url().should("eq", urlPage);
        });
      });
  }

  clickRightArrowIconFooter() {
    cy.get("footer")
      .find("a")
      .eq(1)
      .invoke("attr", "href")
      .then((href) => {
        const args = href;
        cy.get("footer")
          .contains("a", "Give our repo a star.")
          .invoke("removeAttr", "target")
          .click();
        //check url
        cy.origin(args, { args }, (urlPage) => {
          cy.url().should("eq", urlPage);
        });
      });
  }

  clickOnIconInFooter(iconTitle) {
    cy.get(".card-container")
      .find(`a[title="${iconTitle}"]`)
      .invoke("removeAttr", "target")
      .click();
  }

  clickOnIconTopNavbar(iconTitle) {
    cy.get(".toolbar")
      .find(`[title="${iconTitle}"]`)
      .invoke("removeAttr", "target")
      .click();
  }

  checkTopNavbarIconVisibility(iconTitle) {
    cy.get(".toolbar").find(`[title="${iconTitle}"]`).should("be.visible");
  }

  checkTopNavbarIconHrefLink(iconTitle, iconHref) {
    cy.get(".toolbar")
      .find(`[title="${iconTitle}"]`)
      .invoke("attr", "href")
      .then((href) => {
        expect(href).to.eq(iconHref);
      });
  }

  checkUrl() {
    cy.verifyUrl("");
  }
}

export const onHomePage = new HomePage();
