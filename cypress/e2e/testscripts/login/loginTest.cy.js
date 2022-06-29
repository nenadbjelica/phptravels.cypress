/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { loginData } from "../../../fixtures/constLogin";
import { LoginPage } from "../../../support/pageObjects/LoginPage";

const login = new LoginPage()

Given('url is navigated', () => {
  login.navigate('/')
})

Given('{string} with {string} and {string} is logged in', (role, username, password) => {
  login.loginUser(username, password)
})

Then('assert that {string} is shown', (text) => {
  cy.elementShouldContainText(login.welcomeinfo, text)
  login.logoutUser()
})

Given('user try to login with wrong credentials', () => {
  login.loginUser(loginData.wrongUsername, loginData.wrongPassword)
})

Then('validation error message appears', () => {
  cy.elementShouldContainText(login.getErrorMessage, loginData.wrongCredentialsValidation)
})