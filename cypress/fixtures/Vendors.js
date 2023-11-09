import 'cypress-iframe';
class Vendors {
PageTitle = 'h1.float-left';
btnAdd = 'a[href="/Admin/Vendor/Create"]';
AddPageTitle =  'h1.float-left';
txtName = 'input#Name';
iframeDesc = '#Description_ifr'
txtDesc = 'p';
txtEmail = 'input#Email';
checkboxActive = "input#Active";
btnUpload = 'input[title="file input"]';
uploadedPic = 'span.qq-upload-file-selector.qq-upload-file';
uploadedOrigPic = 'div.uploaded-image';
txtAdminComment = "#AdminComment";
txtEmail = '#Email';

verifyPageTitle(title){
    cy.verifyElementText(this.PageTitle,title);
}

clickOnAdd(){
    cy.assertElementVisibility(this.btnAdd);
    cy.clickElement(this.btnAdd);
}

verifyAddPageTitle(title){
    cy.assertElementVisibility(this.AddPageTitle);
    cy.verifyElementText(this.AddPageTitle,title);
}

enterName(name){
    cy.assertElementVisibility(this.txtName);
    cy.enterText(this.txtName,name);
}
enterDescription(description){
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

  uploadPicture(picture){
    cy.get(this.btnUpload).attachFile(picture);
  }
  verifyUploadedPic(pic){
    cy.wait(2000);
    cy.get(this.uploadedPic).should('contain',pic);
    cy.assertElementVisibility(this.uploadedOrigPic);
  }
  enterAdminComment(comment) {
    cy.assertElementVisibility(this.txtAdminComment);
    cy.enterText(this.txtAdminComment, comment);
  }

}
export default new Vendors();