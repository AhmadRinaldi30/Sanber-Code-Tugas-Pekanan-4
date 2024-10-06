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
        
        it("Berhasil menampilkan dashboard",() =>{
            cy.get(object.dashboard).should("be.visible");
            cy.get(object.dashboard).should("have.text","Swag Labs")
        });
    })