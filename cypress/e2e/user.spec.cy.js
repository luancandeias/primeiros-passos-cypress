import userData from '../fixtures/userData.json'
import LoginPage from './loginPage'
import DashboardPage from './pages/dashboardPage'
import menuPage from './pages/menuPage'
import MyInfoPage from './pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const MenuPage = new menuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
  
  

}

it ('User Info Update - Sucess', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

  dashboardPage.checkDashboardPage()
  MenuPage.accessMyInfo()
  myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
  myInfoPage.fillEmployeeDetails('EmployId', 'otherId','Driver Number' ,'2025-07-29', '123456', '098765')
  myInfoPage.fillStatus()
  myInfoPage.saveForm()
    
  })
 
})  