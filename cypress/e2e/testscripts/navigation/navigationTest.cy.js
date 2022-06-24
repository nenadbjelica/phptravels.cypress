/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../../../support/pageObjects/LoginPage";
import { navigationList } from "../../../support/pageObjects/NotificationItems";
import { mainMenuText, mainMenuUrl, sidebarMenuText, sidebarMenuUrl } from "../../../fixtures/constNavifation";

const login = new LoginPage()
const customer = Cypress.env('customer');
const numberOfMainMenuItems = 8
const numberOfSidebarMenuItems = 5

Given('url is navigated', () => {
    login.navigate('/');
})

When('customer is logged in', () => {
    login.loginUser(customer.username, customer.password);
})

Then('assert that all {string} items contain requested text', (navigation) => {
    if (navigation === 'main_menu') {
        cy.assertTextArrayFromElementList(navigationList.mainMenuList, mainMenuText)
    } else {
        cy.assertTextArrayFromElementList(navigationList.sidebarList, sidebarMenuText)
    }
})

Then('assert that correct url is shown by click on all {string} items', (navigation) => {
    if (navigation === 'main_menu') {
        cy.assertUrlArrayFromFixedElementList(numberOfMainMenuItems, navigationList.mainMenuList, mainMenuUrl)
    } else {
        cy.assertUrlArrayFromFixedElementList(numberOfSidebarMenuItems, navigationList.sidebarList, sidebarMenuUrl)
    }
})
