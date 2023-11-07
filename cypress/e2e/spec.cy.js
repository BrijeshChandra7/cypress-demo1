import Dashboard from "../fixtures/Dashboard";
describe('template spec', () => {
  beforeEach(()=>{
     cy.login(Cypress.env('Username'),Cypress.env('Password'));
     cy.visit('/');
  })
  it('passes', () => {
    Dashboard.verifyHomePageHeader('Dashboard');
  })
})