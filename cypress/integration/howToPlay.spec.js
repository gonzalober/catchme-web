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

  describe('how to play page icon Links', function() {
    it('click home icon returns user to homepage', function() {
      cy.visit('/how-to-play')
      cy.location('pathname').should('include', 'how-to-play')
      cy.get('[alt="home-icon"]').should('be.visible')
      cy.get('[alt="plus-icon"]').should('be.visible')
      cy.get('[alt="home-icon"]').click()
      cy.location('pathname').should('eq', '/')
      cy.get('h1').contains('CatchMe')
      cy.get('[alt="Logo"]').should('be.visible')
      cy.get('h1').contains('CatchMe')
      cy.get('[alt="Logo"]').should('be.visible')
      cy.get('p').contains('The app that keeps you running')
      cy.get('button').contains('How to play')
      cy.get('button').contains('Create a race')
      cy.get('button').contains('Leaderboard')
      cy.get('button').contains('Find a race')
      cy.get('p').contains('KiMaGoDa')
    })

    it('click plus icon sends user to create a race page', function() {
      cy.visit('/how-to-play')
      cy.location('pathname').should('include', 'how-to-play')
      cy.get('[alt="home-icon"]').should('be.visible')
      cy.get('[alt="plus-icon"]').should('be.visible')
      cy.get('[alt="plus-icon"]').click()
      cy.visit('/')
      cy.get('button').contains('Create a race').click()
      cy.location('pathname').should('include', 'createrace')
      cy.readFile('src/components/SoundEffects/Button-sound.mp3', 'base64').then((mp3) => {
        const uri = 'data:audio/mp3;base64,' + mp3
        const audio = new Audio(uri)

        audio.play()
    })
      cy.get('h1').contains('CatchMe')
      cy.get('h2').contains('Race parameters')
      cy.get('[alt="home-icon"]').should('be.visible')
      cy.get('span').contains('10m')
      cy.get('span').contains('50m')
      cy.get('span').contains('500m')
      cy.get('span').contains('1000m')
      cy.get('span').contains('1500m')
      cy.get('span').contains('2000m')
      cy.get('p').contains('Enter your name:')
      cy.get('input').contains('Create Race')
      cy.get('p').contains('KiMaGoDa')
    })
  })

})
