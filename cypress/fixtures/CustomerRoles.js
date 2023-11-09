class CustomerRoles {
  btnAdd = 'a[href="/Admin/CustomerRole/Create"]';
  txtName = "input#Name";
  checkboxActive = "input#Active";
  checkboxFreeShipping = "#FreeShipping";
  checkboxTaxExempt = "#TaxExempt";
  checkboxOverrideTaxDispType = "input#OverrideTaxDisplayType";
  checkboxEnablePwdLifetime = "input#EnablePasswordLifetime";
  btnChooseProduct = 'div.col-md-9 button[type="submit"]';

  clickOnAdd() {
    cy.assertElementVisiblity(this.btnAdd);
    cy.clickElement(this.btnAdd);
  }

  enterName(name) {
    cy.assertElementVisiblity(this.txtName);
    cy.enterText(this.txtName, name);
  }
  checkActive() {
    cy.get(this.checkboxActive).check();
  }

  unCheckActive() {
    cy.get(this.checkboxActive).uncheck();
  }
  checkFreeShipping() {
    cy.get(this.checkboxFreeShipping).check();
  }

  uncheckFreeShipping() {
    cy.get(this.checkboxFreeShipping).uncheck();
  }
  checkTaxExempt() {
    cy.get(this.checkboxTaxExempt).check();
  }

  uncheckTaxExempt() {
    cy.get(this.checkboxTaxExempt).uncheck();
  }

  checkOverrideTaxDispType() {
    cy.get(this.checkboxOverrideTaxDispType).check();
  }

  uncheckOverrideTaxDispType() {
    cy.get(this.checkboxOverrideTaxDispType).uncheck();
  }

  checkEnablePwdLifetime() {
    cy.get(this.checkboxEnablePwdLifetime).check();
  }

  uncheckEnablePwdLifetime() {
    cy.get(this.checkboxEnablePwdLifetime).uncheck();
  }

  clickOnChooseProduct(){
    cy.get(this.btnChooseProduct).eq(0).click();
  }
}
export default new CustomerRoles();
