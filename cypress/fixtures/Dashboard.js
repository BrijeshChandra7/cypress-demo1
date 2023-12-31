class Dashboard {
  Header = "div.content-header h1";
  Menu = 'nav.mt-2 ul[role="menu"]';
  verifyHomePageHeader(header) {
    cy.assertElementVisibility(this.Header);
    cy.verifyElementText(this.Header, header);
  }
  selectMenu(menu) {
    cy.assertElementVisibility(this.Menu);
    cy.get(this.Menu)
      .children()
      .find("a p")
      .contains(menu)
      .click({ force: true });
  }
}
export default new Dashboard();
