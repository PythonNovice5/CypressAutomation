/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'
import loginPage from '../pages/loginPage'

describe('Testing Mailshake Dashboard Left Panel links',function(){
    
    
    it('Login',function(){  
        const pages = ['Dashboard', 'Prospects', 'Mail Accounts','Sending Calendar','Reports','Productivity','Engagements','Lead Catcher','Lead Drivers','Integrations','Settings','Tools']      
        
        cy.visit('https://app.mailshake.com/login')
        cy.title().should('eq','Login | Mailshake')
        

        cy.get('[type="email"] input').clear()
        cy.get('[type="email"] input').type('michaelscott@mailinator.com')
        // cy.wait(2000)
        cy.get('[type="Password"] input').type("'F'-\\\(3S@e9^(w=/*PM@")
        cy.get('button:contains("Log In")').click()
        // cy.wait(5000)
        // cy.title().should('eq','Dashboard | Mailshake')
        // cy.get('div h1').should('have.text',"Dashboard") 
    })

    it('Click and verify if links are routing to the correct page', function(){
        
        cy.wait(5000)
        const pages = ['Dashboard', 'Prospects', 'Mail Accounts','Sending Calendar','Reports','Productivity','Engagements','Lead Catcher','Lead Drivers','Integrations','Settings','Tools']
                 
        pages.forEach(page => {
            cy.get('.side-cont a').contains(page).click()
            cy.wait(2000)           
            
            // verifying the href attribute to validate the page
            cy.location('href').should('contain', `/${page.replace(/\s+/g, '-').toLowerCase()}`)

            // verifying the page url to validate the page
            cy.url().should('include',`/${page.replace(/\s+/g, '-').toLowerCase()}`)             
              
            })
          
          })

          // This method verifies the page headers after each click (assuming developer has kept same page headers tab headings)
        //   it('Click the links and verify page headers', function(){
        //     const pages = ['Dashboard', 'Prospects', 'Mail Accounts','Sending Calendar','Reports','Productivity','Engagements','Lead Catcher','Lead Drivers','Integrations','Settings','Tools']
        //     cy.wait(5000)
        //     pages.forEach(page => {
        //         cy.get('.side-cont a').contains(page).click()
        //         cy.wait(2000)
        //         // cy.get('div h1').should('have.text',`${page}`) 
        //         cy.get('div h1').then(($h)=>{
        //             const header =    $h.text()
        //             cy.log("The Current Page Header is: ",header)
        //             // header.contains(`${page}`)
        //             expect(header).equal(`${page}`)
        //       })
           
            

        //   })
        // })

    
    })