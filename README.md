### Catch Me App

1 - Running app: 2-4 players run a set distance and compete to finish the set distance first. (GPS)

App Name:
catchme

### Idea:

Running app: 2-4 players run a set distance and compete to finish the set distance first. (GPS)

### Basic Idea:

You have a group (up to 4) you start a race at the same time
Simplest goal (set goal of e.g. 1Km) / whoever runs the furthest in a set time
App interface shows information (distance, time, which friends are participating, map)
Interface split into 2 sections (bottom section shows participants, top section shows map with faces showing on map and map shows power ups where time freezes, tap another player to apply a penalty to / positive power up.)

Singular game - one lobby give yourself a name, no authentication

If we wanted stored history of results / averages we’d need log in/ authentication

People would be running outside
Timer countdown before tracking begins
Tracks distance not location

Table would be an instance of a race

### User stories:

#### Start

- As a user so that other can join a game I want to create a lobby
- As the lobby host I want to be able to start a game (then timer starts)
- As the lobby host I want to be able to set distance / time
- As a user so I can play with friends I want to join a lobby
- As a user so I can be identified I want to enter a name when I join a lobby

#### During

- As a user I want to see the distance I’ve travelled at any moment. The app would have to Calculate distance / total distance
- As a user I want to see a who is first/second on the map etc based on their position on the map
- As a user I want to see a who is first/second on the leaderboard etc based on their position on the map
- As a user so that I can time myself I want to see the timer (10 mins into game etc)
- As a user so that I have a better chance of winning I want to use a powerup / a penalty
- As a user I want to give someone else a penalty so I use a powerup on another player

#### End of game

- As a user so I can see who won I want to see a winner/second/third/fourth at the end of the game

### Stack

Front end - Javascript, React
Back end/framework - Node/Express, GraphQL (like rest API but easier), Apollo (client for graphQL).
Testing - Jest

### First MVP

Get one person working with geolocation api - in memory for one user
Simplest would be to show the result when everyone has finished (as a first MVP)
Start location + current location that recalculates continually until 1km hit
Just one player, leaderboard filtered by times
Inputs - date, name and precise time
Leaderboard could be any database.  
Heroku for hosting / travis
