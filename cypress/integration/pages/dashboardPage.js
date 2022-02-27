class Dashboard{

    verifyLeftPanelLinks(){
        pages.forEach(page => {
                    cy.get('.side-cont a').contains(page).click()
                    cy.wait(2000)           
                    
                    // verifying the href attribute to validate the page
                    cy.location('href').should('contain', `/${page.replace(/\s+/g, '-').toLowerCase()}`)
        
                    // verifying the page url to validate the page
                    cy.url().should('include',`/${page.replace(/\s+/g, '-').toLowerCase()}`)             
                      
                    })
                  
                  })
    }
}