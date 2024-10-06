// import cypress from "cypress";
import * as object from "../object/page.js";

before(() => {
cy.config("defaultCommandTimeout",50000);
})

describe('sauce demo - Login', () => {
  it('should success login', () => {
    const url = "https://www.saucedemo.com/";
    cy.visit(url);
    cy.get(object.input_username).type("standard_user");
    cy.get(object.input_password).type("secret_sauce");
    cy.get(object.btn_submit).click();
    cy.get(object.heading).should("be.visible")
  })
})