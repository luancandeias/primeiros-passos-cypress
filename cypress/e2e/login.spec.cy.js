import userData from '../fixtures/userData.json'
import LoginPage from './loginPage'
import DashboardPage from './pages/dashboardPage'
import menuPage from './pages/menuPage'
import MyInfoPage from './pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

const selectorsList = {
  
  
}


  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()

    })

    it('Login - Sucess', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
      dashboardPage.checkDashboardPage()
  
      })
})  