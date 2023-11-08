class SearchCustomers {
  txtEmail = "input#SearchEmail";
  dropCustRoles = "select#SelectedCustomerRoleIds";
  btnSearch = "button#search-customers";
  customerGrid = "table#customers-grid";

  enterEmail(email) {
    cy.enterText(this.txtEmail, email);
  }
  selectCustRoles(role) {
    cy.selectDrop(this.dropCustRoles, role);
  }

  clickOnSearch() {
    cy.clickElement(this.btnSearch);
  }

  verifyTotalCustomers(total) {
    cy.get(this.customerGrid).should("have.length", total);
  }

  verifyCustomerName(name) {
    cy.get(this.customerGrid).children().find("tr td").should("contain", name);
  }
}

export default new SearchCustomers();
