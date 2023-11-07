class Dashboard{
    Header = "div.content-header h1";
    verifyHomePageHeader(header){
        cy.assertElementVisiblity(this.Header);
        cy.verifyElementText(this.Header,header);
    }
}
export default new Dashboard();