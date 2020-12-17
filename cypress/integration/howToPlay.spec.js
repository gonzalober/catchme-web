describe('Testing how to play page', function() {

  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('yarn startcov')
})

describe('how to play page content', function() {
  it('how to play page displays correct content', function() {
    cy.visit('/how-to-play')
    cy.contains('CatchMe')
    cy.get('[alt="Logo"]').should('be.visible')
    cy.contains('How to Play')
    cy.contains('1 - Create race')
    cy.contains('2 - Add users')
    cy.contains('3 - Start race')
    cy.contains('4 - Race ends')
  })
})

describe('how to play page icon Links', function() {
  it('click home icon returns user to homepage', function() {
    cy.visit('/how-to-play')
    cy.get('[alt="home-icon"]').should('be.visible')
    cy.get('[alt="plus-icon"]').should('be.visible')
    cy.get('[alt="home-icon"]').click()
    cy.location('pathname').should('eq', '/')
    cy.contains('CatchMe')
    cy.get('[alt="Logo"]').should('be.visible')
    cy.contains('The app that keeps you running')
    cy.contains('Create a race')
    cy.contains('Leaderboard')
    cy.get('button').contains('How to play')
    cy.get('button').contains('Create a race')
    cy.get('button').contains('Leaderboard')
  })

  it('click plus icon sends user to create a race page', function() {
    cy.visit('/how-to-play')
    cy.get('[alt="home-icon"]').should('be.visible')
    cy.get('[alt="plus-icon"]').should('be.visible')
    cy.get('[alt="plus-icon"]').click()
    cy.location('pathname').should('eq', '/setup')
    cy.contains('CatchMe')
    cy.get('[alt="Logo"]').should('be.visible')
    cy.contains('Race parameters')
    cy.contains('500m')
    cy.contains('1km')
    cy.get('[alt="home-icon"]').should('be.visible')
    cy.get('[alt="plus-icon"]').should('be.visible')
  })

})

})
