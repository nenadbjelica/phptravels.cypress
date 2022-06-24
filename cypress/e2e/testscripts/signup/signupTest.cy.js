/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { signupData, signupValidations } from "../../../fixtures/constSignup";
import { LoginPage } from "../../../support/pageObjects/LoginPage";
import { SignupPage } from "../../../support/pageObjects/SignupPage";

const login = new LoginPage()
const signup = new SignupPage()
const email = signupData.email

Given('url is navigated', () => {
    login.navigate('/');
})

When('user click on Signup button', () => {
    signup.clickSignup(1)
})

And('enters all valid credentials and signup', () => {
    signup.signupUser(signupData.firstName, signupData.lastName, signupData.phone, email, signupData.password)
})

Then('user is successfully created', () => {
    cy.elementShouldContainText(signup.alertSuccess, signupValidations.signupSuccessfull)
})

And('enters all credentials with existing email and signup', () => {
    signup.signupUser(signupData.firstName, signupData.lastName, signupData.phone, email, signupData.password)
})

Then('email validation is thrown', () => {
    cy.elementShouldContainText(signup.alertDanger, signupValidations.emailAlreadyExist)
})