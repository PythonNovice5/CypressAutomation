/// <reference types="cypress" />

 

class loginPage {

    visitURL(){        
        return cy.visit('https://assessment.speakap.com/',{ timeout: 10000 })
    }


    userEmail() {

        return cy.get('input[type="email"]')
    }

    passwordInput() {
        return cy.get('input[type="password"]')
    }

    loginBtn() {
        return cy.get('button[type="submit"]')
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