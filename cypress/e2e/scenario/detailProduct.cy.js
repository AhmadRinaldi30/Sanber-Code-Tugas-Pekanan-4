import * as object from "../object/page.js";
import { LoginAction } from "../actions/login-actions.js";
import { ProductCatalog } from "../object/product-catalog";

before(() => {
cy.config("defaultCommandTimeout",20000);
})

describe('ketika mencari product katalog', () => {

    const login = new LoginAction()
    const productCatalog = new ProductCatalog()

    beforeEach(() => {
        login.withCredentials("standard_user", "secret_sauce")
        cy.config("defaultCommandTimeout",20000);
    });

    describe('semua 6 product katalog telah di tampilkan', () => {
        it('sukses memunculkan untuk judul catalog produk', () => {
            productCatalog.productNames().should('have.length', 6)
        });
    }); 

    describe('pelanggan dapat menambahkan product dengan menampilkan tombol keranjang', () => {
        it('tombol keranjang berhasil dimunculkan', () => {
            productCatalog.addToCartButtons().should('have.length', 6)
        }); 

        it('menambahkan item product kedalam keranjang dan mengubah jumlah item d keranjang', () => {
            
            productCatalog.addItemToCartCalled('Sauce Labs Backpack')
            productCatalog.shoppingCartBadge().should('contain.text','1')
            productCatalog.addToCartButtons().should('have.length',5)
            productCatalog.removeFromCartButtons().should('have.length',1)
        });

        it('menambahkan dua item dalam keranjang', () => {
            productCatalog.addItemToCartCalled('Sauce Labs Backpack')
            productCatalog.addItemToCartCalled('Sauce Labs Bike Light')
            productCatalog.shoppingCartBadge().should('contain.text','2')
        });

        it('menambahkan dua item kedalam keranjang lalu melakukan hapus item produk dalam keranjang', () => {
            productCatalog.addItemToCartCalled('Sauce Labs Backpack')
            productCatalog.addItemToCartCalled('Sauce Labs Bike Light')

            productCatalog.removeItemFromCartCalled('Sauce Labs Backpack')

            productCatalog.shoppingCartBadge().should('contain.text','1')
            productCatalog.addToCartButtons().should('have.length',5)
            productCatalog.removeFromCartButtons().should('have.length',1)
        });
    });

    describe('sauce demo - detail product "Sauce Labs Backpack"', () => {
        it("Berhasil klik detail product",() =>{
            productCatalog.showDetailProductKlik().should('have.length',4)
            productCatalog.showDetailProduct().should('contain.text','Sauce Labs Backpack')
        });
   })
});


