describe('Testing Homepage', function() {

  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('yarn start')
})

describe('Homepage content', function() {
  it('Homepage has correct content', function() {
    cy.visit('/')
    cy.contains('CatchMe')
    cy.get('[alt="Logo"]').should('be.visible')
    cy.contains('The app that keeps you running')
    cy.contains('Create a race')
    cy.contains('Leaderboard')
    cy.get('button').contains('How to play')
    cy.get('button').contains('Create a race')
    cy.get('button').contains('Leaderboard')
  })
})

describe('Homepage Links', function() {
  it('click link to how-to-play loads how to play', function() {
    cy.visit('/')
    cy.get('button').contains('How to play').click()
    cy.location('pathname').should('include', 'how-to-play')
    cy.get('[alt="Logo"]').should('be.visible')
    cy.contains('How to Play')
    cy.contains('1 - Create race')
    cy.contains('2 - Add users')
    cy.contains('3 - Start race')
    cy.contains('4 - Race ends')
  })
})



})
