import Dashboard from "../fixtures/Dashboard";
import Customers from "../fixtures/Customers";
import SearchCustomers from "../fixtures/SearchCustomers";
import CustomerRoles from "../fixtures/CustomerRoles";
import Vendors from "../fixtures/Vendors";

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

  it.skip("Duplicate Customer addition", () => {
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

  it.skip("Search Customer", () => {
    Customers.openMenu("Customers");
    Customers.verifyCustomersPageTitle("Customers");
    SearchCustomers.enterEmail("yahoo@yahoo.com");
    SearchCustomers.selectCustRoles("Guests");
    SearchCustomers.clickOnSearch();
    SearchCustomers.verifyTotalCustomers(1);
    SearchCustomers.verifyCustomerName("Sri Kant");
  });

  it.skip("Customer Roles", () => {
    Customers.openMenu(" Customer roles");
    Customers.verifyCustomersPageTitle("Customer roles");
    CustomerRoles.clickOnAdd();
    cy.get("@Data").then((data) => {
      CustomerRoles.enterName(data.Name);
      // Click the button to open the new window
      //CustomerRoles.clickOnChooseProduct();
      /*
      // Capture a reference to the new window
      let newWindow;
      cy.window().then((win) => {
        newWindow = win;
      });

      // Make an assertion to ensure the new window is open and visible
      cy.window(newWindow).should("have.property", "closed", false);
      cy.wait(12000);

      // Interact with elements in the new window
      cy.window(newWindow).get("tbody tr:nth-child(4) td:nth-child(1) button:nth-child(1)").click();
      // Perform other actions in the new window, like selecting a product

      // Switch back to the original window
      cy.window().then((originalWindow) => {
        //cy.window(newWindow).close(); // Close the new window
        cy.window(originalWindow); // Switch back to the original window
      });

      // Assert or validate results in the original window
      cy.get("span#purchased-with-product-name").should("have.text", "Apple MacBook Pro 13-inch"); */
      //cy.visit('https://admin-demo.nopcommerce.com/Admin/CustomerRole/AssociateProductToCustomerRolePopup?productIdInput=PurchasedWithProductId&productNameInput=purchased-with-product-name&btnId=btnRefreshPurchasedWithProduct');

      //cy.get("tbody tr:nth-child(4) td:nth-child(1) button:nth-child(1)").click();
      //cy.wait(10000);
      // Get window object
      /*var home = "https://admin-demo.nopcommerce.com";


      const url = "https://admin-demo.nopcommerce.com/Admin/CustomerRole/AssociateProductToCustomerRolePopup?productIdInput=PurchasedWithProductId&productNameInput=purchased-with-product-name&btnId=btnRefreshPurchasedWithProduct";
cy.window().then((win) => {
  // Replace window.open(url, target)-function with our own arrow function
  cy.stub(win, 'open', url => 
  {
    // change window location to be same as the popup url
    win.location.href =  url;
  }).as("popup") // alias it with popup, so we can wait refer it with @popup
})

// Click button which triggers javascript's window.open() call
CustomerRoles.clickOnChooseProduct();
cy.get("tbody tr:nth-child(4) td:nth-child(1) button:nth-child(1)").click();

// Make sure that it triggered window.open function call
cy.get("@popup").should("be.called")
cy.wait(2000);

cy.visit('/');
cy.get('.nav-pills > :nth-child(4) > [href="#"]').trigger('mouseover').click();
Dashboard.selectMenu("Customers");
Customers.openMenu(" Customer roles");
Customers.verifyCustomersPageTitle("Customer roles");
CustomerRoles.clickOnAdd(); */
      const url =
        "https://admin-demo.nopcommerce.com/Admin/CustomerRole/AssociateProductToCustomerRolePopup?productIdInput=PurchasedWithProductId&productNameInput=purchased-with-product-name&btnId=btnRefreshPurchasedWithProduct";

      // Define a variable to store the original window handle
      let originalWindowHandle;

      cy.window().then((win) => {
        // Store the handle of the original window
        originalWindowHandle = win;

        // Replace window.open(url, target)-function with our own arrow function
        cy.stub(win, "open", (url) => {
          // change window location to be same as the popup url
          win.location.href = url;
        }).as("popup"); // alias it with popup, so we can wait and refer to it with @popup
      });

      // Click the button which triggers javascript's window.open() call
      CustomerRoles.clickOnChooseProduct();
      cy.get(
        "tbody tr:nth-child(4) td:nth-child(1) button:nth-child(1)"
      ).click();

      // Make sure that it triggered window.open function call
      cy.get("@popup").should("be.called");

      // After waiting for some time, switch back to the original window
      cy.wait(2000).then(() => {
        cy.window().then((win) => {
          // Close the new window
          win.close();
        });

        // Switch back to the original window
        cy.window(originalWindowHandle);

        // Now you are back in the original window
        // You can perform assertions here to check if the product is populated
        // on the original page
        cy.get("span#purchased-with-product-name").should(
          "have.text",
          "Apple MacBook Pro 13-inch"
        );
      });
    });
  });

  it("Vendors", () => {
    Customers.openMenu("Vendors");
    Customers.verifyCustomersPageTitle("Vendors");
    Vendors.verifyPageTitle("Vendors");
    Vendors.clickOnAdd();
    cy.get("@Data").then((data) => {
      Vendors.verifyAddPageTitle(data.VendorsAddPageTitle);
      Vendors.enterDescription(data.Desc);
      Vendors.enterName(data.Name);
      Vendors.enterEmail(data.Email);
      Vendors.uploadPicture("test_picture.jpg");
      Vendors.verifyUploadedPic("test_picture.jpg");
      Vendors.enterAdminComment(data.AdminComment);
      Vendors.openDisplay();
      Vendors.enterPriceFrom(100);
      Vendors.enterPriceTo(105);
      Vendors.enterDisplayOrder(0);
      Vendors.openSeo();
      Vendors.enterSEFriendlypgName(data.FriendlyPageName);
      Vendors.enterMetaTitle(data.MetaTitle);
      Vendors.enterMetaKeywords(data.MetaKeywords);
      Vendors.enterMetaDescription(data.MetaDesc);
      Vendors.clickOnSave();
    });
  });
});
