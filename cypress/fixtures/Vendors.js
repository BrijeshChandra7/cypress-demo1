import "cypress-iframe";

class Vendors {
  PageTitle = "h1.float-left";
  btnAdd = 'a[href="/Admin/Vendor/Create"]';
  AddPageTitle = "h1.float-left";
  txtName = "input#Name";
  iframeDesc = "#Description_ifr";
  txtDesc = "p";
  txtEmail = "input#Email";
  checkboxActive = "input#Active";
  btnUpload = 'input[title="file input"]';
  uploadedPic = "span.qq-upload-file-selector.qq-upload-file";
  uploadedOrigPic = "div.uploaded-image";
  txtAdminComment = "#AdminComment";
  txtEmail = "#Email";
  btnDisplay = "div[id='vendor-display'] i[class='fa toggle-icon fa-plus']";
  btnSeo = "div[id='vendor-seo'] i[class='fa toggle-icon fa-plus']";
  txtPageSizeOptions = "#PageSizeOptions";
  txtPriceFrom =
    "body > div:nth-child(3) > div:nth-child(3) > form:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nop-cards:nth-child(2) > nop-card:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > input:nth-child(1)";
  //txtPriceFrom = "#nestedSetting1020467856 > :nth-child(2) > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value";
  btnPriceFrom =
    "body > div:nth-child(3) > div:nth-child(3) > form:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nop-cards:nth-child(2) > nop-card:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(4) > span:nth-child(1) > span:nth-child(1)";
  // txtPriceTo =
  //   "body > div:nth-child(3) > div:nth-child(3) > form:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nop-cards:nth-child(2) > nop-card:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > input:nth-child(1)";
  txtPriceTo =
    ":nth-child(3) > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value";
  txtDisplayOrder =
    ":nth-child(5) > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value";
  txtSEFriendlypgName = "#SeName";
  txtMetaTitle = "#MetaTitle";
  txtMetaKeywords = "#MetaKeywords";
  txtMetaDesc = "#MetaDescription";
  btnSave = "button[name='save']";
  verifyPageTitle(title) {
    cy.verifyElementText(this.PageTitle, title);
  }

  clickOnAdd() {
    cy.assertElementVisibility(this.btnAdd);
    cy.clickElement(this.btnAdd);
  }

  verifyAddPageTitle(title) {
    cy.assertElementVisibility(this.AddPageTitle);
    cy.verifyElementText(this.AddPageTitle, title);
  }

  enterName(name) {
    cy.assertElementVisibility(this.txtName);
    cy.enterText(this.txtName, name);
  }
  enterDescription(description) {
    cy.frameLoaded(this.iframeDesc);
    cy.wait(2000);
    cy.iframe(this.iframeDesc).find(this.txtDesc).type(description);
    // const getiframe=cy.get(this.iframeDesc).its('0.contentDocument.body').should('be.visible').then(cy.wrap);
    // getiframe.find(this.txtDesc).type(description);
  }
  enterEmail(email) {
    cy.enterText(this.txtEmail, email);
  }
  checkActive() {
    cy.get(this.checkboxActive).check();
  }

  unCheckActive() {
    cy.get(this.checkboxActive).uncheck();
  }

  uploadPicture(picture) {
    cy.get(this.btnUpload).attachFile(picture);
  }
  verifyUploadedPic(pic) {
    cy.wait(2000);
    cy.get(this.uploadedPic).should("contain", pic);
    cy.assertElementVisibility(this.uploadedOrigPic);
  }
  enterAdminComment(comment) {
    cy.assertElementVisibility(this.txtAdminComment);
    cy.enterText(this.txtAdminComment, comment);
  }
  openDisplay() {
    /*cy.get(this.txtPriceFrom).should('if','not.be.visible').then(($element) => {
      // The element is visible, you can continue with your test
      // ...
      cy.assertElementVisibility(this.btnDisplay);
      cy.clickElement(this.btnDisplay);
    
    }); */

    cy.get(this.txtPriceFrom).then(($element) => {
      // Check if the element is visible
      if ($element.is(":visible")) {
        // Element is visible, log a message or perform actions if needed
        cy.log("Element is visible.");
        // You can choose to return or continue further actions
        // return true; // This is just an example; you can adjust the condition as needed
      } else {
        cy.clickElement(this.btnDisplay);
      }
      // Element is not visible, you can proceed with further action
    });

    // Continue with other actions that should happen regardless of the element's visibility
    // ...

    // Continue with other actions that should happen regardless of the element's visibility
    // ...

    // Continue with other actions that should happen regardless of the element's visibility
    // ...

    // Continue with other actions that should happen regardless of the element's visibility
    // ...

    // Continue with other actions that should happen regardless of the element's visibility
    // ...

    // Continue with other actions that should happen regardless of the element's visibility
    // ...

    // if(cy.get(this.txtPriceFrom).should('not.be.visible')){
    // cy.assertElementVisibility(this.btnDisplay);
    // cy.clickElement(this.btnDisplay);
    // }
  }
  openSeo() {
    cy.get(this.txtMetaDesc).then(($element) => {
      // Check if the element is visible
      if ($element.is(":visible")) {
        // Element is visible, log a message or perform actions if needed
        cy.log("Element is visible.");
        // You can choose to return or continue further actions
        // return true; // This is just an example; you can adjust the condition as needed
      } else {
        cy.assertElementVisibility(this.btnSeo);
        cy.clickElement(this.btnSeo);
      }
      // Element is not visible, you can proceed with further action
    });
  }

  enterPageSizeOptions(option) {
    cy.enterText(this.txtPageSizeOptions, option);
  }

  enterPriceFrom(pricefrom) {
    //cy.get(this.txtPriceFrom).clear();
    cy.wait(1000);
    cy.get(this.txtPriceFrom).type(`{selectall}{backspace}${pricefrom}`);
    // cy.get(this.txtPriceFrom).clear();
    // for(var i=0; i<pricefrom; i++){
    //   cy.clickElement(this.btnPriceFrom);
    // }
  }

  enterPriceTo(priceto) {
    //cy.get(this.txtPriceTo).clear().type(priceto,{force: true});
    cy.get(this.txtPriceTo).type(`{selectall}{backspace}${priceto}`);
  }

  enterDisplayOrder(order) {
    cy.get(this.txtDisplayOrder).type(`{selectall}{backspace}${order}`, {
      force: true,
    });
  }

  enterSEFriendlypgName(name) {
    cy.assertElementVisibility(this.txtSEFriendlypgName);
    cy.enterText(this.txtSEFriendlypgName, name);
  }

  enterMetaTitle(title) {
    cy.assertElementVisibility(this.txtMetaTitle);
    cy.enterText(this.txtMetaTitle, title);
  }

  enterMetaKeywords(keywords) {
    cy.assertElementVisibility(this.txtMetaKeywords);
    cy.enterText(this.txtMetaKeywords, keywords);
  }

  enterMetaDescription(description) {
    cy.assertElementVisibility(this.txtMetaDesc);
    cy.enterText(this.txtMetaDesc, description);
  }

  clickOnSave() {
    cy.scrollTo("top");
    cy.assertElementVisibility(this.btnSave);
    cy.clickElement(this.btnSave);
  }
}
export default new Vendors();
