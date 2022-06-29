import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../../../support/pageObjects/LoginPage";
import { HomePage } from "../../../support/pageObjects/HomePage";

const customer = Cypress.env('customer');
const home = new HomePage()
const login = new LoginPage()

const imgNoResults = 'https://www.phptravels.net/app/themes/default/assets/img/no_results.gif'

Given('url is navigated and customer is logged in', () => {
    login.navigate('/')
    login.loginUser(customer.username, customer.password)
})

When('click on Home page', () => {
    home.openHomePage()
})

And('input cyty {string}, checkin date {string} and checkout date {string}', (city, checkin, checkout) => {
    home.inputCityName(city)
    home.inputCheckinDate(checkin)
    home.inputCheckoutDate(checkout)
})

And('click on Submit button', () => {
    home.clickSubmitBtn()
})

Then('assert that image that represent no results is shown', () => {
    cy.attributeEquals(home.noResults, 'src', imgNoResults)
})


