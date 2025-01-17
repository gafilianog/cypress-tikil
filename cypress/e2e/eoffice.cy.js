import * as loginPage from "../pages/LoginPage"
import * as eoffice from "../pages/EofficePage"

describe('E-Office Auto-present', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('User do create kehadiran', () => {
    //TODO: any integer +/- in env always read as 0
    console.log(typeof Number(String(Cypress.env('DATE_DIFF'))))
    console.log(Number(String(Cypress.env('DATE_DIFF'))))
    // loginPage.setCredentials(Cypress.env('NPP'), Cypress.env('PASSWORD'))
    // loginPage.clickBtnLogin()
    // loginPage.navigateToAbsensiMenu()
    // eoffice.navigateToMenu('Hadir')
    // eoffice.fillKehadiran(
    //   Cypress.env('CLOCK_OUT'), 
    //   Cypress.env('CLOCK_IN'), 
    //   Number(Cypress.env('DATE_DIFF')),
    //   Cypress.env('REASON'), 
    //   Cypress.env('WITNESS'),
    //   Cypress.env('REVIEWER1'),
    //   Cypress.env('REVIEWER2'),
    //   Cypress.env('IS_SUBMIT'),
    //   String(Cypress.env('COMMENT'))
    // )
    // cy.wait(1000)
    // eoffice.logout()
  })
})