/// <reference types = "cypress" /> 

describe('My test ', function(){

    it ('my test case',function(){

        cy.visit('', { headers: { "Accept-Encoding": "gzip, deflate" } });
        // cy.get('._10aNXF > :nth-child(1) > ._3gE-EQ').click()
        // cy.get(':nth-child(2) > ._2Q07ec').click()   ** IF THE SITE OPENED IN HEBREW LANGUAGE , MAKE THESE COMMANDS ACTIVE **
        cy.log('Pick city by typing')
        cy.get('[data-stid="sqm-destination"]')
            .click()
            .type('jerusalem{enter}')
            .should('have.value', 'Jerusalem, Jerusalem District, Israel')
        cy.get('button[aria-label="Search"]').click()
    })


    it('open a specific result',function(){
        cy.get('._61P-R0').invoke('removeAttr','target').contains('Dan Boutique Jerusalem').click('center',{force: true}) 
        cy.get('.FebmkO').click()
        cy.url().should('include', '/ho145237/') // => true
    })

})