describe('Testing how to play page', function() {


  describe('how to play page content', function() {
    it('how to play page displays correct content', function() {
      cy.visit('/how-to-play')
      cy.location('pathname').should('include', 'how-to-play')
      cy.get('[alt="home-icon"]').should('be.visible')
      cy.get('[alt="plus-icon"]').should('be.visible')
      cy.get('h2').contains('How to Play')
      cy.get('p').contains('1 - Create race')
      cy.get('p').contains('2 - Add users')
      cy.get('p').contains('3 - Click ready')
      cy.get('p').contains('4 - Start race -(Only host)')
      cy.get('p').contains('5 - Race ends')
      cy.readFile('src/components/SoundEffects/Bruh.MP3', 'base64').then((mp3) => {
        const uri = 'data:audio/mp3;base64,' + mp3
        const audio = new Audio(uri)

        audio.play()
      })
    })
  })

})
