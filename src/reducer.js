export const initialState = {
  user: null,
  playslists: [],
  random: null,
  playing: false,
  item: null,
  question2: null,
  question3: null,
  //remove after development
  token: null,
  leaderboard: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_RANDOM':
      return {
        ...state,
        random: action.random,
      };

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_QUESTION_3':
      console.log('in reducer!', action.question3);
      return {
        ...state,
        question3: action.question3,
      };

    case 'SET_LEADERBOARD':
      return {
        ...state,
        leaderboard: action.leaderboard,
      };
    case 'SET_QUESTION_2':
      return {
        ...state,
        question2: action.question2,
      };

    default:
      return state;
  }
};

export default reducer;
