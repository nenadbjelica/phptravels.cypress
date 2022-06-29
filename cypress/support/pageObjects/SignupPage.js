export class SignupPage {

    firstName = '[name="first_name"]'
    lastName = '[name="last_name"]'
    phone = '[name="phone"]'
    email = '[name="email"]'
    password = '[name="password"]'
    accountType = '[role="textbox"]'
    signupButton = '.btn-block'
    alertSuccess = '.alert-success'
    alertDanger = '.alert-danger'


    enterFirstName(strFirstName) {
        cy.get(this.firstName).type(strFirstName)
    }

    enterLastName(strLastName) {
        cy.get(this.lastName).type(strLastName)
    }

    enterPhone(strPhone) {
        cy.get(this.phone).type(strPhone)
    }

    enterEmail(strEmail) {
        cy.get(this.email).type(strEmail)
    }

    enterPassword(strPassword) {
        cy.get(this.password).type(strPassword)
    }

    clickSignup(index) {
        cy.clickByIndex(this.signupButton, index)
    }

    signupUser(strFirstName, strLastName, strPhone, strEmail, strPassword) {
        this.enterFirstName(strFirstName)
        this.enterLastName(strLastName)
        this.enterPhone(strPhone)
        this.enterEmail(strEmail)
        this.enterPassword(strPassword)
        this.clickSignup(0)
    }

}
