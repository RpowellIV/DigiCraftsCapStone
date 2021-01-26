# TuneChamp

TuneChamp is a music quiz application where you listen to ten songs and guess from four answers given for each song.
Compare your scores with other people who have taken the quiz. See who will become the Tune Champion!

TuneChamp will be hosted and deployed by Heroku at (https://tunechamp-client.herokuapp.com/)

---

## Running TuneChamp

1. Need to have [Node.js](https://nodejs.org/en/download/) installed.
1. Clone the repository.
1. Install node packages  
   `npm install`
1. Create an app for Spotify oauth on the Spotify API website.
1. Create a `.env` file in the root of the project and place the following variables in this file.
   1. DB_USER= `your database user`
   1. DB_Pass= `your database user password`
   1. DB_LIB= `your database name`
   1. DB_HOST= localhost
   1. SPOTIFY_ID= `your spotify ID`
   1. SPOTIFY_SECRET= `your Spotify secret`
   1. SPOTIFY_CALLBACK = `http://localhost:3000/auth/spotify/callback`
1. Start the server  
   `npm start`
1. App will run on at `http://localhost:3000`

## Technologies Used

---

Express.js, Passport.js, Postgres, Spotify API,EJS, Node.js, Javascript, REACT, REDUX

## APIs Used

- [Spotify APi](https://developer.spotify.com/documentation/)

## Team Members

---

Lewis Ritenour - (http://github.com/LewRit)

Robert Powell - (http://github.com/RpowellIV)

Stephen Roach - (http://github.com/Stephen-Roach)
