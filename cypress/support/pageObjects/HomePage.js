import { NavMenuItems } from "./NavMenuItems"

export class HomePage extends NavMenuItems {

    textBox = '#select2-hotels_city-container'
    search = '[role="searchbox"]'
    option = '[role="option"]'
    checkin = '#checkin'
    checkout = '#checkout'
    tabItemList = '.nav-link'
    submitBtn = '.btn[type="submit"]'
    noResults = '[alt="no results"]'

    openHomePage() {
        cy.get(this.mainMenuItems.home).click()
    }

    inputCityName(cytyName) {
        cy.get(this.textBox).click()
        cy.get(this.search).type(cytyName)
        cy.intercept('GET', 'https://www.phptravels.net/hotels_locations?q=Belgrade').as('location')
        cy.wait('@location')
        cy.get(this.option).click()
    }

    inputCheckinDate(date) {
        cy.setAttribute(this.checkin, "value", date)
    }

    inputCheckoutDate(date) {
        cy.setAttribute(this.checkout, "value", date)
    }

    clickSubmitBtn() {
        cy.get(this.submitBtn).click()
    }

}
