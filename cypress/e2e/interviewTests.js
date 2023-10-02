/// <reference types="Cypress" />

import { onAngularBlogPage } from "../support/page_object/angularBlogPage";
import { onAngularCLIPage } from "../support/page_object/angularCLIPage";
import { onAngularDevToolsPage } from "../support/page_object/angularDevToolsPage";
import { onAngularTutorialPage } from "../support/page_object/angularTutorialPage";
import { onAngularAnimationsPage } from "../support/page_object/angularAnimationsPage";
import { onDiscordPage } from "../support/page_object/discordPage";
import { onHomePage } from "../support/page_object/homePage";
import { onTwitterPage } from "../support/page_object/twitterPage";
import { onYouTubePage } from "../support/page_object/youtubePage";
import { onFormPage } from "../support/page_object/formPage";
import { onStepperPage } from "../support/page_object/stepperPage";
import { onNavigateTo } from "../support/page_object/navigateTo";

describe("E2E tests for a webpage", () => {
  let name = "Andrew";
  let alterEgo = "Andi Bandi";
  let heroPower = "Super Flexible";
  let address = 'Testing Strasse';

  beforeEach("open an home page and verify basic content", () => {
    cy.openHomePage();
    //verify top logo content on home page
    //check if rocket logo is visible and verify rocket title text
    onHomePage.checkTopLogoVisibility();
    onHomePage.checkTopLogoTitleRocket("Rocket Ship");
    onHomePage.checkTopLogoCircleColor("#dd0031");
    onHomePage.checkTopContentColor();
    //check text of the title section
    onHomePage.checkTopTitleText("Recruitment app is running!");
    //check terminal visibility
    onHomePage.checkTerminalVisibility();
  });

  //Resources Content tests
  //Split to 4 seperate test cases for these Resources cards
  //but it is possible to make it in one test case and
  //change only variables to check cards behaviour
  it("click on Angular blog card in Resources section", () => {
    let cardName = "Angular Blog";
    let urlPage = "https://blog.angular.io/";
    let titleNextPage = "Angular Blog";
    //verify title and subtitle of Resources section
    onHomePage.checkResourcesTitle("Resources");
    onHomePage.checkResourcesSubtitle(
      "Here are some links to help you get started:"
    );
    //verify amount of cards and their visiblity in section
    onHomePage.checkAmountAndVisibilityOfCardsInSection(4);
    //verify if cards are properly loaded
    onHomePage.checkEachCardContentInSection([
      "Learn Angular",
      "CLI Documentation",
      "Angular Blog",
      "Angular DevTools",
    ]);
    //click on card
    onHomePage.clickCardByTextInResourcesSection(cardName);
    //verify url and page title
    onAngularBlogPage.checkUrl(urlPage);
    onAngularBlogPage.checkPageHeader(urlPage, titleNextPage);
  });

  //this test mostly failed - page angular devtools hardly ever load on cypress
  //cannot find solution to skip loading page
  it("click on Angular DevTools card in Resources section", () => {
    let cardName = "Angular DevTools";
    let urlPage = "https://angular.io/guide/devtools";
    let titleNextPage = "DevTools Overview";
    //verify title and subtitle of Resources section
    onHomePage.checkResourcesTitle("Resources");
    onHomePage.checkResourcesSubtitle(
      "Here are some links to help you get started:"
    );
    //verify amount of cards and their visiblity in section
    onHomePage.checkAmountAndVisibilityOfCardsInSection(4);
    //verify if cards are properly loaded
    onHomePage.checkEachCardContentInSection([
      "Learn Angular",
      "CLI Documentation",
      "Angular Blog",
      "Angular DevTools",
    ]);
    //click on card
    onHomePage.clickCardByTextInResourcesSection(cardName);
    //verify url and page title
    onAngularDevToolsPage.checkUrl(urlPage);
    onAngularDevToolsPage.checkPageHeader(urlPage, titleNextPage);
  });

  //this test mostly failed - page angular CLI documentation hardly ever load on cypress
  //cannot find solution to skip loading page
  it("click on Angular CLI Documentation card in Resources section", () => {
    let cardName = "CLI Documentation";
    let urlPage = "https://angular.io/cli";
    let titleNextPage = "CLI Overview and Command Reference";
    //verify title and subtitle of Resources section
    onHomePage.checkResourcesTitle("Resources");
    onHomePage.checkResourcesSubtitle(
      "Here are some links to help you get started:"
    );
    //verify amount of cards and their visiblity in section
    onHomePage.checkAmountAndVisibilityOfCardsInSection(4);
    //verify if cards are properly loaded
    onHomePage.checkEachCardContentInSection([
      "Learn Angular",
      "CLI Documentation",
      "Angular Blog",
      "Angular DevTools",
    ]);
    //click on card
    onHomePage.clickCardByTextInResourcesSection(cardName);
    //verify url and page title
    onAngularCLIPage.checkUrl(urlPage);
    onAngularCLIPage.checkPageHeader(urlPage, titleNextPage);
  });

  //this test mostly failed - page angular hardly ever load on cypress
  //cannot find solution to skip loading page
  it("click on Angular tutorial card in Resources section", () => {
    let cardName = "Learn Angular";
    let urlPage = "https://angular.io/tutorial";
    let titleNextPage = "Angular tutorials";
    //verify title and subtitle of Resources section
    onHomePage.checkResourcesTitle("Resources");
    onHomePage.checkResourcesSubtitle(
      "Here are some links to help you get started:"
    );
    //verify amount of cards and their visiblity in section
    onHomePage.checkAmountAndVisibilityOfCardsInSection(4);
    //verify if cards are properly loaded
    onHomePage.checkEachCardContentInSection([
      "Learn Angular",
      "CLI Documentation",
      "Angular Blog",
      "Angular DevTools",
    ]);
    //click on card
    onHomePage.clickCardByTextInResourcesSection(cardName);
    //verify url and page title
    onAngularTutorialPage.checkUrl(urlPage);
    onAngularTutorialPage.checkPageHeader(urlPage, titleNextPage);
  });

  //Next Steps Content tests
  //1 method - click on card by individual text
  it("click on selected card by text in Next Steps content and verify if the code is appropriate in the console box", () => {
    let cardName = "Add PWA Support";
    let codeOutput = "ng add @angular/pwa";
    //verify title and subtitle of Resources section
    onHomePage.checkNextStepsTitle("Next Steps");
    onHomePage.checkNextStepsSubtitle(
      "What do you want to do next with your app?"
    );
    //click on New Component Card
    onHomePage.clickCardByTextInNextStepsSection(cardName);
    //verify code displayed in the console field
    onHomePage.checkCodeInConsoleField(codeOutput);
  });

  //2 method - click on each card looping through names
  it("click on new component card in Next Steps content and verify if the code is appropriate in the console box", () => {
    let cardNameArr = [
      "New Component",
      "Angular Material",
      "Add PWA Support",
      "Add Dependency",
      "Run and Watch Tests",
      "Build for Production",
    ];
    let codeOutputArr = [
      "ng generate component xyz",
      "ng add @angular/material",
      "ng add @angular/pwa",
      "ng add _____",
      "ng test",
      "ng build",
    ];
    //verify title and subtitle of Resources section
    onHomePage.checkNextStepsTitle("Next Steps");
    onHomePage.checkNextStepsSubtitle(
      "What do you want to do next with your app?"
    );
    //click on New Component Card and verify code outputs on terminal
    onHomePage.clickCardAndVerifyTerminalOutput(cardNameArr, codeOutputArr);
  });

  //footer tests - 2 way of clicking the link
  it("on footer click link to give a star to a repo", () => {
    onHomePage.checkFooterText();
    onHomePage.clickFooterLinkStar();
  });

  it("on footer click right arrow icon to give a star to a repo", () => {
    onHomePage.checkFooterText();
    onHomePage.clickRightArrowIconFooter();
  });

  //can be done for all 4 icons (tests written for 2 cases) - but need to change url and page title
  it("click a icon Discord by its title", () => {
    let iconTitle = [
      "Animations",
      "CLI",
      "Find a Local Meetup",
      "Join the Conversation on Discord",
    ];
    let discordURL = "https://discord.com/invite/angular";
    let pageTitle = "Discord";
    onHomePage.clickOnIconInFooter(iconTitle[3]);
    onDiscordPage.checkUrl(discordURL);
    onDiscordPage.checkPageTitle(pageTitle);
  });

  it("click a icon angular animations by its title", () => {
    let iconTitle = [
      "Animations",
      "CLI",
      "Find a Local Meetup",
      "Join the Conversation on Discord",
    ];
    let animationsURL = "https://angular.io/guide/animations";
    let pageTitle = "Angular - Introduction to Angular animations";
    let pageHeader = "Introduction to Angular animations";
    onHomePage.clickOnIconInFooter(iconTitle[0]);
    onAngularAnimationsPage.checkUrl(animationsURL);
    onAngularAnimationsPage.checkPageTitle(pageTitle);
    onAngularAnimationsPage.checkPageHeader(animationsURL, pageHeader);
  });

  it("check twitter icon in top navbar visibility and url", () => {
    let iconTitle = "Twitter";
    let url = "https://twitter.com/angular";
    onHomePage.checkTopNavbarIconVisibility(iconTitle);
    onHomePage.checkTopNavbarIconHrefLink(iconTitle, url);
  });

  it("click youtube icon in top navbar visibility and url", () => {
    let iconTitle = "YouTube";
    let url = "https://youtube.com/angular";
    onHomePage.checkTopNavbarIconVisibility(iconTitle);
    onHomePage.checkTopNavbarIconHrefLink(iconTitle, url);
  });

  it("Send successfully the form with default values", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //check default input values on form
    onFormPage.checkTheNameInputValue();
    onFormPage.checkTheAlterEgoInputValue();
    onFormPage.checkTheHeroPowerValue();
    //check required inputs style
    onFormPage.checkInputValidStatus("name");
    onFormPage.checkInputValidStatus("power");
    //check if result form is hidden before submitting the form
    onFormPage.checkResultsFormHidden();
    //click submit btn
    onFormPage.clickSubmitBtn();
    //the reuslt form is visible and the input form is hidden
    onFormPage.checkInputFormHidden();
    onFormPage.checkResultsFormVisible();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", "Dr IQ");
    onFormPage.checkResultFormInput("Alter Ego", "Chuck Overstreet");
    onFormPage.checkResultFormInput("Power", "Really Smart");
  });

  it("fill successfully the form with user values", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //fill the form
    onFormPage.fillTheNameInputValue(name);
    onFormPage.fillTheAlterEgoInputValue(alterEgo);
    onFormPage.changeTheHeroPoweValue(heroPower);
    //submit the form
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", name);
    onFormPage.checkResultFormInput("Alter Ego", alterEgo);
    onFormPage.checkResultFormInput("Power", heroPower);
  });

  it("fill successfully the form with user values by clicking New Hero btn", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form - new hero btn
    onFormPage.clickNewHeroBtn();
    //fill the form
    onFormPage.fillTheNameInputValue(name);
    onFormPage.fillTheAlterEgoInputValue(alterEgo);
    onFormPage.changeTheHeroPoweValue(heroPower);
    //submit the form
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", name);
    onFormPage.checkResultFormInput("Alter Ego", alterEgo);
    onFormPage.checkResultFormInput("Power", heroPower);
  });

  it("fill and submit the form and then change the values in the form", () => {
    let editName = "Tony";
    let editAlterEgo = "Tony Maccaronni";
    let editHeroPower = "Weather Changer";
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form - new hero btn
    onFormPage.clickNewHeroBtn();
    //fill the form
    onFormPage.fillTheNameInputValue(name);
    onFormPage.fillTheAlterEgoInputValue(alterEgo);
    onFormPage.changeTheHeroPoweValue(heroPower);
    //submit the form
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", name);
    onFormPage.checkResultFormInput("Alter Ego", alterEgo);
    onFormPage.checkResultFormInput("Power", heroPower);
    //click edit btn
    onFormPage.clickEditBtn();
    //check input form fields
    onFormPage.checkTheNameInputValue(name);
    onFormPage.checkTheAlterEgoInputValue(alterEgo);
    onFormPage.checkTheHeroPowerValue(heroPower);
    //change input fields
    onFormPage.fillTheNameInputValue(editName);
    onFormPage.fillTheAlterEgoInputValue(editAlterEgo);
    onFormPage.changeTheHeroPoweValue(editHeroPower);
    //submit the form
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", editName);
    onFormPage.checkResultFormInput("Alter Ego", editAlterEgo);
    onFormPage.checkResultFormInput("Power", editHeroPower);
  });

  it("fill the form without alter ego input", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form - new hero btn
    onFormPage.clickNewHeroBtn();
    //fill the form
    onFormPage.fillTheNameInputValue(name);
    onFormPage.changeTheHeroPoweValue(heroPower);
    //submit the form
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", name);
    onFormPage.checkResultFormInput("Alter Ego", "");
    onFormPage.checkResultFormInput("Power", heroPower);
  });

  it("fill and submit the form with alter ego and then edit the form - delete alter ego input", () => {
    let editName = "Tony";
    let editAlterEgo = "";
    let editHeroPower = "Weather Changer";
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form - new hero btn
    onFormPage.clickNewHeroBtn();
    //fill the form
    onFormPage.fillTheNameInputValue(name);
    onFormPage.fillTheAlterEgoInputValue(alterEgo);
    onFormPage.changeTheHeroPoweValue(heroPower);
    //submit the form
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", name);
    onFormPage.checkResultFormInput("Alter Ego", alterEgo);
    onFormPage.checkResultFormInput("Power", heroPower);
    //click edit btn
    onFormPage.clickEditBtn();
    //check input form fields
    onFormPage.checkTheNameInputValue(name);
    onFormPage.checkTheAlterEgoInputValue(alterEgo);
    onFormPage.checkTheHeroPowerValue(heroPower);
    //change input fields and clear alter ego field
    onFormPage.fillTheNameInputValue(editName);
    onFormPage.clearAlterEgoInputField();
    onFormPage.changeTheHeroPoweValue(editHeroPower);
    //submit the form
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", editName);
    onFormPage.checkResultFormInput("Alter Ego", editAlterEgo);
    onFormPage.checkResultFormInput("Power", editHeroPower);
  });

  it("fail on sending the form - name and power inputs are empty", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clickNewHeroBtn();
    //check requried field statuses
    onFormPage.checkInputInvalidStatus("name");
    onFormPage.checkInputInvalidStatus("power");
    //check submit btn unavailability to click
    onFormPage.checkSubmitBtnDisabledStatus();
  });

  it("fail on sending the form - name input empty", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clearNameInputField();
    //fill the alter ego and power field
    onFormPage.fillTheAlterEgoInputValue(alterEgo);
    onFormPage.changeTheHeroPoweValue(heroPower);
    //under the name input should be error message and submit btn disabled
    onFormPage.checkInputInvalidStatus('name');
    onFormPage.checkAlerDangerMessage();
    onFormPage.checkSubmitBtnDisabledStatus();
  });

  it("fail on sending the form - power input empty", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clickNewHeroBtn();
    //fill the alter ego and power field
    onFormPage.fillTheNameInputValue(name);
    onFormPage.fillTheAlterEgoInputValue(alterEgo);
    //fhero power input invalid status and submit btn disabled
    onFormPage.checkInputInvalidStatus('power');
    onFormPage.checkSubmitBtnDisabledStatus();
  });

  it("fail editing the submitted form - name input empty", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clickNewHeroBtn();
    //fill the alter ego and power field
    onFormPage.fillTheNameInputValue(name);
    onFormPage.fillTheAlterEgoInputValue(alterEgo);
    onFormPage.changeTheHeroPoweValue(heroPower);
    //click submit btn
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", name);
    onFormPage.checkResultFormInput("Alter Ego", alterEgo);
    onFormPage.checkResultFormInput("Power", heroPower);
    //click edit btn
    onFormPage.clickEditBtn();
    //clear input name value
    onFormPage.clearNameInputField();
    //under the name input should be error message and submit btn disabled
    onFormPage.checkInputInvalidStatus('name');
    onFormPage.checkAlerDangerMessage();
    onFormPage.checkSubmitBtnDisabledStatus();
  });

  it("fail editing the submitted form - name and power inputs empty", () => {
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clickNewHeroBtn();
    //fill the alter ego and power field
    onFormPage.fillTheNameInputValue(name);
    onFormPage.fillTheAlterEgoInputValue(alterEgo);
    onFormPage.changeTheHeroPoweValue(heroPower);
    //click submit btn
    onFormPage.clickSubmitBtn();
    //check result form values
    onFormPage.checkResultFormHeader();
    onFormPage.checkResultFormInput("Name", name);
    onFormPage.checkResultFormInput("Alter Ego", alterEgo);
    onFormPage.checkResultFormInput("Power", heroPower);
    //click edit btn
    onFormPage.clickEditBtn();
    //clear input name value
    onFormPage.clickNewHeroBtn();
    //under the name input should be error message and submit btn disabled
    onFormPage.checkInputInvalidStatus('name');
    onFormPage.checkInputInvalidStatus('power');
    onFormPage.checkSubmitBtnDisabledStatus();
  });

  it("fail test - try to pass the name variable longer than 32characters", () => {
    let longerName = "LoremIpsumTestingTheMaximumLengthLimit";
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clickNewHeroBtn();
    //fill the alter ego and power field
    onFormPage.fillTheNameInputValue(longerName);
  });

  it("fail test - try to pass the name variable with forbidden characters", () => {
    let longerName = "https://www.youtube.com/watch?v=";
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clickNewHeroBtn();
    //fill the alter ego and power field
    onFormPage.fillTheNameInputValue(longerName);
  });

  it("fail test - try to pass the alter ego variable longer than 32characters", () => {
    let longerAlterEgo = "LoremIpsumTestingTheMaximumLengthLimit";
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clickNewHeroBtn();
    //fill the alter ego and power field
    onFormPage.fillTheNameInputValue(longerAlterEgo);
  });

  it("fail test - try to pass the alter ego variable with forbidden characters", () => {
    let longerAlterEgo = "Lorem%#5____dasd";
    //go to form tab
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
    //empty the form
    onFormPage.clickNewHeroBtn();
    //fill the alter ego and power field
    onFormPage.fillTheNameInputValue(longerAlterEgo);
  });

  it('check changing pages through different pages', () => {
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    onNavigateTo.goToMainPage();
    onHomePage.checkUrl();
    onNavigateTo.goToFormPage();
    onFormPage.checkUrl();
  });

  it('fill successfully user details on stepper page', () => {
    //go to stepper page
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    //check steps selected stauses
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'true');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'false');
    //provide the name
    onStepperPage.fillTheNameInput(name);
    onStepperPage.clickNextBtn();
    //check step 1 and step 2 status
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'true');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'false');
    //check step 1 icon
    onStepperPage.checkIconEditVisibility('cdk-step-label-0-0');
    //provide the address
    onStepperPage.fillThAddressInput(address);
    onStepperPage.clickNextBtn();
    //check statuses of steps selected and editable
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'true');
    onStepperPage.checkIconEditVisibility('cdk-step-label-0-0');
    onStepperPage.checkIconEditVisibility('cdk-step-label-0-1');
    //check stepper details
    onStepperPage.checkStepperDetails(name, address);
  });

  it('try to go to 2nd step without providing name', () => {
    //go to stepper page
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    //check steps selected stauses
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'true');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'false');
    //click next btn
    onStepperPage.clickNextBtn();
    //check input status and steps
    onStepperPage.checkInputFieldStatus('cdk-step-content-0-0');
    //user still on 1st step
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'true');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'false');
  });

  it('try to go to 3rd step without providing address', () => {
    //go to stepper page
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    //check steps selected stauses
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'true');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'false');
    onStepperPage.fillTheNameInput(name);
    onStepperPage.clickNextBtn();
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'true');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'false');
    onStepperPage.clickNextBtn();
    //check invalid status of field
    onStepperPage.checkInputFieldStatus('cdk-step-content-0-1');
  });

  it('fill the name with more than 20 characters - error message, not possible to go to next step', () => {
    let longerName = "LoremIpsumTestingTheMaximumLengthLimit";
    //go to stepper page
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    //fill the name
    onStepperPage.fillTheNameInput(longerName);
    //check error message
    onStepperPage.checkInputErrorMessage('The maximum length for this field is 20 characters.');
    //try to go to next step
    onStepperPage.clickNextBtn();
    onStepperPage.checkInputFieldStatus('cdk-step-content-0-0');
  });

  it('fill the address with more than 30 characters - error message, not possible to go to next step', () => {
    let longerAddress = "TestingAddress 123a/12 Lorem Ipsum test";
    //go to stepper page
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    //fill the name
    onStepperPage.fillTheNameInput(name);
    onStepperPage.clickNextBtn();
    //fill the address
    onStepperPage.fillThAddressInput(longerAddress);
    //check error message
    onStepperPage.checkInputErrorMessage('The maximum length for this field is 30 characters.');
    //try to go to next step
    onStepperPage.clickNextBtn();
    onStepperPage.checkInputFieldStatus('cdk-step-content-0-1');
  });

  it('complete the stepper and then click reset button', () => {
    //go to stepper page
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    //provide the name
    onStepperPage.fillTheNameInput(name);
    onStepperPage.clickNextBtn();
    //check step 1 icon
    onStepperPage.checkIconEditVisibility('cdk-step-label-0-0');
    //provide the address
    onStepperPage.fillThAddressInput(address);
    onStepperPage.clickNextBtn();
    //check stepper details
    onStepperPage.checkStepperDetails(name, address);
    //click reset btn
    onStepperPage.clickResetBtn();
    //check steps status
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'true');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'false');
    //check if name input field has empty value
    onStepperPage.checkInputEmptyNameValue();
  });

  it('complete the stepper form and then change address by going back', () => {
    let newAddress = "Kolorowa 72/1a";
    //go to stepper page
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    //provide the name
    onStepperPage.fillTheNameInput(name);
    onStepperPage.clickNextBtn();
    //check step 1 icon
    onStepperPage.checkIconEditVisibility('cdk-step-label-0-0');
    //provide the address
    onStepperPage.fillThAddressInput(address);
    onStepperPage.clickNextBtn();
    //check stepper details
    onStepperPage.checkStepperDetails(name, address);
    //click back btn
    onStepperPage.clickBackBtn();
    //check status of steps
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-0', 'false');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-1', 'true');
    onStepperPage.checkIfStepIsSelected('cdk-step-label-0-2', 'false');
    onStepperPage.checkIconEditVisibility('cdk-step-label-0-0');
    onStepperPage.checkIconEditVisibility('cdk-step-label-0-2');
    //check if address value is correct
    onStepperPage.checkInputAddressValue(address);
    //change address value
    onStepperPage.fillThAddressInput(newAddress);
    onStepperPage.clickNextBtn();
    //check stepper details
    onStepperPage.checkStepperDetails(name, newAddress);
  });

  it('complete the stepper and then change name and address', () => {
    let newName = 'Tony'
    let newAddress = "Kolorowa 72/1a";
    //go to stepper page
    onNavigateTo.goToStepperPage();
    onStepperPage.checkUrl();
    //provide the name
    onStepperPage.fillTheNameInput(name);
    onStepperPage.clickNextBtn();
    //check step 1 icon
    onStepperPage.checkIconEditVisibility('cdk-step-label-0-0');
    //provide the address
    onStepperPage.fillThAddressInput(address);
    onStepperPage.clickNextBtn();
    //check stepper details
    onStepperPage.checkStepperDetails(name, address);
    //click back btn
    onStepperPage.clickBackBtn();
    //check if address value is correct and change it
    onStepperPage.checkInputAddressValue(address);
    onStepperPage.fillThAddressInput(newAddress);
    //go back and change name
    onStepperPage.clickBackBtn();
    onStepperPage.checkInputNameValue(name);
    onStepperPage.fillTheNameInput(newName);
    onStepperPage.clickNextBtn()
    //change address value
    onStepperPage.checkInputAddressValue(newAddress);
    onStepperPage.clickNextBtn();
    //check stepper details
    onStepperPage.checkStepperDetails(newName, newAddress);
  });
});
