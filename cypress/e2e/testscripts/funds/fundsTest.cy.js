/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { FundsPage } from "../../../support/pageObjects/FundsPage";
import { LoginPage } from "../../../support/pageObjects/LoginPage";

const login = new LoginPage()
const funds = new FundsPage
const agent = Cypress.env('agent');

Given('url is navigated and agent is logged in', () => {
    login.navigate('/')
    login.loginUser(agent.username, agent.password)
})

When ('click on Add Funds page', () =>{
    funds.openFundsPage()
})

And('select {string} payment, input {string} and click on Pay Now button', (payment, amount) => {
    funds.clickOnPaymentByParam(payment)
    funds.inputAmountInUSD(amount)
    funds.clickOnPayNowBtn()
})

Then('assert that entered amount {string} is shown', (amount) => {
    cy.elementShouldContainText(funds.amountInfo, amount)  
})