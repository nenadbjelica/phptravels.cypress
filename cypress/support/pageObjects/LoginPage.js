export class LoginPage {

    username = '[placeholder="Email"]'
    password = '[placeholder="Password"]'
    loginButton = '.btn-lg'
    loginErrorMessage = '.alert-danger.failed'
    welcomeinfo = '.author__meta'

    navigate(url) {
        cy.visit(url)
    }

    enterUserName(strUsername) {
        cy.get(this.username).type(strUsername)
    }

    enterPassword(strPassword) {
        cy.get(this.password).type(strPassword)
    }

    clickLogin() {
        cy.get(this.loginButton).click()
    }

    getErrorMessage() {
        return cy.get(loginErrorMessage)
    }

    loginUser(strUsername, strPassword) {
        this.enterUserName(strUsername)
        this.enterPassword(strPassword)
        this.clickLogin()
    }

}
