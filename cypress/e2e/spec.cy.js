import Dashboard from "../fixtures/Dashboard";
import Customers from "../fixtures/Customers";
import SearchCustomers from "../fixtures/SearchCustomers";
describe("template spec", () => {
  beforeEach(() => {
    cy.login(Cypress.env("Username"), Cypress.env("Password"));
    cy.visit("/");
    Dashboard.verifyHomePageHeader("Dashboard");
    Dashboard.selectMenu("Customers");
    cy.fixture("CustomersData.json").as("Data");
  });
  it.skip("Customers", () => {
    Customers.openMenu("Customers");

    Customers.verifyCustomersPageTitle("Customers");
    Customers.clickOnAdd();
    Customers.selectGender("Female");
    Customers.tickIsTaxExempted();
    // cy.wait(2000);
    // Customers.unTickIsTaxExempted();
    Customers.selectNewsletter("Test store 2");
    Customers.selectCustRoles("Guests");
    Customers.selectManagerOfVendor("Vendor 2");
    Customers.unCheckActive();
    cy.wait(2000);
    Customers.checkActive();
    Customers.enterEmail("yahoo@yahoo.com");
    Customers.enterPassword("Password");
    Customers.enterFirstName("Sri");
    Customers.enterLastName("Kant");
    Customers.enterDOB("11/7/2023");
    Customers.enterCompName("Xmas");
    //Customers.selectCustRoles('Vendors');
    Customers.enterAdminComment("This is being tested");
    Customers.clickOnSave();
  });

  it("Duplicate Customer addition", () => {
    cy.get("@Data").then((data) => {
      Customers.openMenu("Customers");
      Customers.verifyCustomersPageTitle("Customers");
      Customers.clickOnAdd();
      Customers.selectGender(data.Gender);
      Customers.tickIsTaxExempted();
      // cy.wait(2000);
      // Customers.unTickIsTaxExempted();
      Customers.selectNewsletter(data.Newsletter);
      Customers.selectCustRoles(data.CustRoles);
      Customers.selectManagerOfVendor(data.ManagerOfVendors);
      Customers.unCheckActive();
      cy.wait(2000);
      Customers.checkActive();
      Customers.enterEmail(data.Email);
      Customers.enterPassword(data.Password);
      Customers.enterFirstName(data.FirstName);
      Customers.enterLastName(data.LastName);
      Customers.enterDOB(data.DOB);
      Customers.enterCompName(data.CompName);
      //Customers.selectCustRoles('Vendors');
      Customers.enterAdminComment(data.AdminComment);
      Customers.clickOnSave();
      Customers.verifyErrorMssgDuplicateCust("Email is already registered");
    });
  });

  it("Search Customer", () => {
    Customers.openMenu("Customers");
    Customers.verifyCustomersPageTitle("Customers");
    SearchCustomers.enterEmail("yahoo@yahoo.com");
    SearchCustomers.selectCustRoles("Guests");
    SearchCustomers.clickOnSearch();
    SearchCustomers.verifyTotalCustomers(1);
    SearchCustomers.verifyCustomerName("Sri Kant");
  });
});
