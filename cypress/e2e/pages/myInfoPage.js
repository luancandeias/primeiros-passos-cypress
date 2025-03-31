class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericCombobox:".oxd-select-text--arrow",
            secondItemCombobox:".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox:".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-left-space"
           

        }

        return selectors
    }

        fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
        }

    
        fillEmployeeDetails(EmployId, otherId, driversLicenseDate,expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
}
        saveForm() {
            cy.get(this.selectorsList().submitButton).eq(1).click({ force: true})
            cy.get('body').should('contain', 'Successfully Saved')
            cy.get('.oxd-toast-close')

        }
        fillStatus() {
            cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true})
            cy.get(this.selectorsList().secondItemCombobox).click()
            cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true})
            cy.get(this.selectorsList().thirdItemCombobox).click()

        }

}

export default MyInfoPage