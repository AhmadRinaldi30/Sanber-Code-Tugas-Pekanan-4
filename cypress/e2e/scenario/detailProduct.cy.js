import * as object from "../object/page.js";

before(() => {
cy.config("defaultCommandTimeout",20000);
})

describe('sauce demo - detail product "Sauce Labs Backpack"', () => {
    beforeEach(() =>{
    it('passed login home page', () => {
        cy.login("standard_user","secret_sauce");  
        }) 
    })
       it("Berhasil klik detail product",() =>{
        cy.get(object.product_Backpack).click();
        cy.get(object.btn_backProduct).should("be.visible");
        cy.get(object.name_product_detail).should("have.text","Sauce Labs Backpack")
       });
  })
