/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'
import { kebabCase } from 'lodash'
import loginPage from '../pages/loginPage'
import {loggedinPage} from '../pages/loggedinPage'

describe('Login and verify if Text can be posted',function(){
    
    it('Login',function(){
        const lp = new loginPage()
        const lg = new loggedinPage()
        lp.visitURL()
        lp.verifyTitle('QA')

        lp.enterUserEmail('garg.eshant@gmail.com')
        lp.enterPassword("Project@512")
        lp.clickLoginBtn()
        lp.verifyTitle('QA')
        cy.log("Verified the title")        
        lg.enterText("Hello")
        lg.clickPostButton()

        cy.log("Verifying the text was pasted successefuuly under Just Now ...")

        lg.verifyElementPosted("Hello")  
         
        
    })

    it('Click and verify if Text can be posted', function(){        
       
         

        const lg = new loggedinPage()

        lg.enterText("Hello")
        cy.log("Entereed Text sucessfully .. ")
        lg.clickPostButton()
        
        // pages.forEach(page => {
        //     cy.get('.side-cont a').contains(page).click()
        //     cy.wait(2000)          
            
        //     cy.log("page name",page)
        //     if((page=='Conversion Tracking') || (page=='Apps & CRMs')){
        //         page="Integrations"
        //     }
            
        //     cy.location('href').should('not.contain',"undefined")
            
        //     //Any of the following two methods can be used to verify the links
        //     // verifying the href attribute to validate the page            
        //     cy.location('href').should('contain', `/${page.replace(/\s+/g, '-').toLowerCase()}`)

        //     // verifying the page url to validate the page
        //     cy.url().should('include',`/${page.replace(/\s+/g, '-').toLowerCase()}`)             
              
        //     })
          
        //   })

          //The following method can be used to verify the Page headers for each web link

    // it('Click the links and verify page headers', function(){
    //     const pages = ['Dashboard', 'Prospects', 'Mail Accounts','Sending Calendar','Reports','Productivity','Engagements','Lead Catcher','Lead Drivers','Integrations','Apps & CRMs','Conversion Tracking','Settings','Tools']
    //     cy.wait(5000)
    //     pages.forEach(page => {
    //         cy.wait(2000) 
    //         cy.get('.side-cont a').contains(page).click()
    //         cy.wait(2000)
    //         cy.get('div h1').then((h)=>{
    //             const header =  h.text()
    //             cy.log("The Current Page Header is: ",header)
    //                  if((page=='Integrations')){
    //                     page="Apps & CRMs"
    //                     }
    //                 expect(header).equal(`${page}`)
    //           })
           
            

        //    })
        })


    })
