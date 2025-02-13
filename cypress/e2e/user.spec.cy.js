import userData from '../fixtures/userData.json'
import LoginPage from './loginPage'
import DashboardPage from './pages/dashboardPage'
import menuPage from './pages/menuPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const MenuPage = new menuPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
  
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

it.only ('User Info Update - Sucess', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
  dashboardPage.checkDashboardPage()
  MenuPage.accessMyInfo()
  
    cy.get(selectorsList.firstNameField).type('FNameTest')
    cy.get(selectorsList.lastNameField).type('LNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employ')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseNumber')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(1).click({ force: true})
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true})
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true})
    cy.get(selectorsList.thirdItemCombobox).click()
   

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type (userData.userFail.username)
    cy.get(selectorsList.passwordField).type (userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    })
})  