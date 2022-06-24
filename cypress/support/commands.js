Cypress.Commands.add("urlIncludeOrContain", (url) => {
    cy.url().should('contain', url)
});

Cypress.Commands.add("elementShouldBeVisible", (element) => {
    cy.get(element).should('be.visible')
})

Cypress.Commands.add("elementShouldContainText", (element, value) => {
    cy.get(element).should('contains.text', value)
    // or
    //cy.get(element).contains(value)
})

Cypress.Commands.add("eachElementShouldBeVisible", (element, size) => {
    cy.get(element).should('have.length', size).each((ele) => {
        expect(ele).to.be.visible
    })
    // or
    // cy.get(element).should('have.length', size).each((ele) => {
    //     cy.wrap(ele).should('be.visible')
    // })
})

Cypress.Commands.add("eachElementShouldContainText", (element, value) => {
    cy.get(element).then((ele) => {
        expect(ele).to.contain(value)
    })
    // or
    // cy.get(element).each((ele) => {
    //     cy.wrap(ele).should('contain.text', value)
    //})
})

Cypress.Commands.add("clickByIndex", (element, index) => {
    cy.get(element).eq(index).click()
})

Cypress.Commands.add("verifyListOfItems", (element, size, text) => {
    cy.get(element).should('have.length', size).each((ele) => {
        expect(Cypress.$(ele)).text().to.eq(text) // wrap element with jQuery
        //or
        cy.wrap(ele).should('contain.text', text) // wrap element with Cypress
    })
})

Cypress.Commands.add("clickOnFirstElement", (element) => {
    cy.get(element).first().click()
})

Cypress.Commands.add("clickOnLastElement", (element) => {
    cy.get(element).last().click()
})

Cypress.Commands.add("assertUrlArrayFromFixedElementList", (size, element, url) => {
    for (let i = 0; i < size; i++) {
        cy.get(element).eq(i).click().then(() => {
            cy.urlIncludeOrContain(url[i])
        })
    }
})

Cypress.Commands.add("assertTextArrayFromElementList", (elementList, textList) => {
    cy.get(elementList).each((item, index) => {
        cy.elementShouldContainText(item, textList[index])
    })
})
