import * as object from "../object/page.js";
/// <reference types='cypress'/>
import { LoginAction } from "../actions/login-actions.js";
import { LoginForm } from "../object/login-form.js";
import { PageHeader } from "../object/page-header.js";


before(() => {
cy.config("defaultCommandTimeout",20000);
})

describe('When logging on', () => {

    const login = new LoginAction()
    const loginForm = new LoginForm()
    const pageHeader = new PageHeader()

    describe('Login dengan valid user account', () => {
        it('dengan user credential', () => {
            login.withCredentials("standard_user","secret_sauce")
            pageHeader.title().should('have.text', 'Products')
        })

        it('dengan username yang salah', () => {
            login.withCredentials("WRONG_USER","secret_sauce")
            loginForm.errorMessage().should('contain', 'Username and password do not match any user')
        })

        it('dengan password yang salah', () => {
            login.withCredentials("standard_user","WRONG_PASSWORD")
            loginForm.errorMessage().should('contain', 'Username and password do not match any user')
        })
    });

    describe('dengan user account yang telah terblokir', () => {
        it('seharusnya user tidak dapat melakukan login', () => {
            login.withCredentials("locked_out_user","secret_sauce")
            loginForm.errorMessage().should('contain', 'Sorry, this user has been locked out.')   
        })
    })
})

// describe('sauce demo - Login', () => {
//   it('should success login', () => {
//     cy.visit("https://www.saucedemo.com/");
//     cy.get(object.input_username).type("standard_user");
//     cy.get(object.input_password).type("secret_sauce");
//     cy.get(object.btn_submit).click();
//     cy.get(object.heading).should("be.visible")
//   })
// })