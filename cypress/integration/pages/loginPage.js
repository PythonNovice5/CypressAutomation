/// <reference types="cypress" />

import { curry } from "lodash"

 

class loginPage {

    visitURL(){
        return cy.visit('https://app.mailshake.com/login')
    }


    userEmail() {

        return cy.get('[type="email"] input')
    }

    passwordInput() {
        return cy.get('[type="Password"] input')
    }

    loginBtn() {
        return cy.get('button:contains("Log In")')
    }


    enterUserEmail(email)
        {
            this.userEmail().clear()
            this.userEmail().type(email)
            return this
        }

    enterPassword(password)
        {
            this.passwordInput().clear()
            this.passwordInput().type(password)
            return this

        }

    clickLoginBtn()
    {
        this.loginBtn().click()
    }

    verifyTitle(toBeVerified)
    {
        cy.title().should('eq',toBeVerified)
        return this
    }
}

export default loginPage