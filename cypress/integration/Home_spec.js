describe('Testing Homepage', function() {

  beforeEach(() => {
    // reset and seed the database prior to every test
        cy.exec('yarn start')
      })

  describe('Homepage content', function() {
    it('Homepage has correct content', function() {
      cy.visit('/')
      cy.get('h1').contains('CatchMe')
    })
  })
})

// describe("the post component", function (){ 
//   it("shows a post", function () { 
//   cy.visit('localhost:3000')  
//   cy.get('.post-message').contains('Yo bruh!.') 
//   cy.get('.post-username').contains('Magzimillion') 
// }) 
// }) 
//
// it("can log in", function () { 
//   cy.visit('localhost:3000/login')  
//   cy.get('.email').type('maggie@loveme.com') 
//   cy.get('.password').type('password') 
// })  
//
// it("can submit a valid form", function () { 
//   cy.get('.form-login').submit() 
// })
// })
