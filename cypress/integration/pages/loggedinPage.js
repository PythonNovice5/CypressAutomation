/// <reference types="cypress" />

class loggedinPage{

    updatesBox(){
        
        cy.log("Trying to get element for update box..")       
        return cy.get('textarea[placeholder="Write an update or drop a file..."]')
    }

    postButton(){
        return cy.get('button',{timeout:10000}).contains('Post')       
    }

    enterText(text)
        {
            this.updatesBox().click()
            this.updatesBox().clear()
            this.updatesBox().type(text)
            return this
        }

    clickPostButton(){
        this.postButton().click()

    }

    verifyElementPosted(postedtextToBeVerified){
        // const elemt = cy.get('div',{timeout:10000}).contains("Just now").siblings('div').contains(postedtextToBeVerified)
        const e2 = cy.get('.dough-box.js-post-content-box').contains("Just now")
        e2.should().contains(postedtextToBeVerified)
        //.siblings('div').contains(postedtextToBeVerified)
        return true
    }





}

// export default loggedinPage
export {loggedinPage}