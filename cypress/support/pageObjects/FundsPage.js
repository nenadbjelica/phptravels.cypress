import { NavMenuItems } from "./NavMenuItems"

export class FundsPage extends NavMenuItems {

    stripePayment = '[value="stripe"]'
    paypalPayment = '[value="paypal"]'
    bankTransferPayment = '[value="bank-transfer"]'
    amountInUSD = '[name="price"]'
    payNowBtn = '[type="submit"]'
    payPalBtn = '[role = "presentation"]'
    amountInfo = '.card-header'

    openFundsPage() {
        cy.get(this.sidebarMenuItems.addFunds).click()
    }

    clickOnStripePayment() {
        cy.get(this.stripePayment).click()
    }

    clickOnPaypalPayment() {
        cy.get(this.paypalPayment).click()
    }

    clickOnBankTransferPayment() {
        cy.get(this.bankTransferPayment).click()
    }

    clickOnPaymentByParam(payment) {
        cy.get('[value="' + payment + '"]').click()
    }

    inputAmountInUSD(amount) {
        cy.get(this.amountInUSD).clear().type(amount)
    }

    clickOnPayNowBtn() {
        cy.get(this.payNowBtn).click()
    }

}
