/// <reference types="Cypress" />
class Customers {
  Menu = "li.nav-item.has-treeview.menu-is-opening.menu-open ul";
  CustomersPageTitle = "h1.float-left";
  btnAdd = 'a[href="/Admin/Customer/Create"]';
  txtEmail = "input#Email";
  txtPassword = "input#Password";
  txtFName = "input#FirstName";
  txtLName = "input#LastName";
  radioGender = "div.raw";
  dateDOB = "input#DateOfBirth";
  txtCompName = "input#Company";
  checkIsTaxExempt = "input#IsTaxExempt";
  dropNewsletter = "ul#SelectedNewsletterSubscriptionStoreIds_listbox";
  dropCustRoles = "ul#SelectedCustomerRoleIds_listbox";
  unClickRegistered = "span.k-select";
  dropManagerVendor = "select#VendorId";
  checkboxActive = "input#Active";
  txtAdminComment = "#AdminComment";
  btnSave = 'button[name="save"]';
  errorMssg = ".validation-summary-errors > ul > li";

  openMenu(menu) {
    cy.get(this.Menu)
      .children()
      .find("a p")
      .contains(menu)
      .click({ force: true });
  }

  verifyCustomersPageTitle(title) {
    cy.verifyElementText(this.CustomersPageTitle, title);
  }

  clickOnAdd() {
    cy.assertElementVisiblity(this.btnAdd);
    cy.clickElement(this.btnAdd);
  }

  enterEmail(email) {
    cy.enterText(this.txtEmail, email);
  }

  enterPassword(pwd) {
    cy.enterText(this.txtPassword, pwd);
  }

  enterFirstName(fname) {
    cy.enterText(this.txtFName, fname);
  }

  enterLastName(lname) {
    cy.enterText(this.txtLName, lname);
  }

  enterDOB(dob) {
    cy.enterText(this.dateDOB, dob);
  }

  selectGender(gender) {
    cy.assertElementVisiblity(this.radioGender);
    cy.get(this.radioGender).children().find("label").contains(gender).click();
  }

  enterCompName(cname) {
    cy.assertElementVisiblity(this.txtCompName);
    cy.enterText(this.txtCompName, cname);
  }
  tickIsTaxExempted() {
    cy.get(this.checkIsTaxExempt).check();
  }
  unTickIsTaxExempted() {
    cy.get(this.checkIsTaxExempt).uncheck();
  }

  selectNewsletter(letter) {
    cy.get(this.dropNewsletter)
      .children()
      .contains(letter)
      .click({ force: true });
  }

  selectCustRoles(role) {
    cy.get(this.unClickRegistered).eq(2).click();
    cy.get(this.dropCustRoles).children().contains(role).click({ force: true });
  }

  selectManagerOfVendor(manager) {
    cy.assertElementVisiblity(this.dropManagerVendor);
    cy.selectDrop(this.dropManagerVendor, manager);
  }
  checkActive() {
    cy.get(this.checkboxActive).check();
  }

  unCheckActive() {
    cy.get(this.checkboxActive).uncheck();
  }

  enterAdminComment(comment) {
    cy.assertElementVisibility(this.txtAdminComment);
    cy.enterText(this.txtAdminComment, comment);
  }

  clickOnSave() {
    cy.scrollTo("top");
    cy.assertElementVisiblity(this.btnSave);
    cy.clickElement(this.btnSave);
  }

  verifyErrorMssgDuplicateCust(error) {
    cy.verifyElementText(this.errorMssg, error);
  }
}
export default new Customers();
