describe('Testing Homepage', function() {


  describe('Homepage Links', function() {
    it('click find a race button', function() {
      cy.visit('/findrace')
      cy.get('button').contains('Find a race').click()
      cy.location('pathname').should('include', 'findrace')
      cy.readFile('src/components/SoundEffects/Button-sound.mp3', 'base64').then((mp3) => {
        const uri = 'data:audio/mp3;base64,' + mp3
        const audio = new Audio(uri)

        audio.play()
      })
      cy.get('h1').contains('CatchMe')
      cy.get('h2').contains('Race Finder')
      cy.get('p').contains('Enter your name:')
      cy.get('input').contains('Find Race')
      cy.get('[alt="home-icon"]').should('be.visible')
      cy.get('[alt="plus-icon"]').should('be.visible')
      cy.get('p').contains('KiMaGoDa')
    })
  })
})
