import * as loginPage from "../pages/LoginPage"
import * as eoffice from "../pages/EofficePage"

describe('E-Office Auto-present', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User do create kehadiran', () => {
    loginPage.setCredentials(Cypress.env('NPP'), Cypress.env('PASSWORD'))
    loginPage.clickBtnLogin()
    loginPage.navigateToAbsensiMenu()
    eoffice.navigateToMenu('Hadir')
    eoffice.fillKehadiran(
      Cypress.env('CLOCK_OUT'), 
      Cypress.env('CLOCK_IN'), 
      Cypress.env('DATE_DIFF'),
      Cypress.env('DEFAULT_REASON'), 
      Cypress.env('DEFAULT_WITNESS'), 
      Cypress.env('DEFAULT_COMMENT')
    )
    cy.wait(1000)
    eoffice.logout()
  })
})