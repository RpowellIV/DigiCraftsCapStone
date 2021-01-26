//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//lets spotify take care of API stuff
export const authEndpoint = 'https://accounts.spotify.com/authorize';

//set previously on Spotify
const redirectUri = 'http://localhost:3000/';
// const redirectUri = 'https://tunechamp-client.herokuapp.com/'
// const redirectUri = 'https://tunechamp-client.herokuapp.com/';

//login id
const clientId = '3df631b3b2aa48ccb68f10acfdc8a359';

//SCOPES - what you want to use and do from target API and gives proper permissions
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'streaming',
  'user-read-email',
  'user-read-private',
];

export const getTokenFromUrl = () => {
  //pulls access token from hash in url
  return (
    window.location.hash
      .substring(1)
      //ends at &
      .split('&')
      // #token=secret&name=me&word=other
      .reduce((initial, item) => {
        var parts = item.split('=');
        //acces token 0 pull secret
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {})
  );
};

//makes url code to get back token
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
