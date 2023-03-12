
it('Launch Google Page and Search',()=>{
cy.visit('https://google.com')
cy.get('.gLFyf').click
//cy.get('.gLFyf',{timeout:5000}).click
cy.get('.gLFyf').type("Hello World")
//cy.get('.gLFyf').type("Hello World {Enter}")
cy.wait(2000)
 cy.contains('Google Search').click()
})