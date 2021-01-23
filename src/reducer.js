export const initialState = {
  user: null,
  token: null,
  leaderboard: null,
  playslists: [],
  playing: false,
  item: null,
  question1: null,
  question2: null,
  question3: null,
  question4: null,
  question5: null,
  question6: null,
  question7: null,
  question8: null,
  question9: null,
  question10: null
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

    case 'SET_LEADERBOARD':
      return {
        ...state,
        leaderboard: action.leaderboard,
      };
    
    case 'SET_QUESTION_1':
    return {
      ...state,
      question1: action.question1,
    };

    case 'SET_QUESTION_2':
      return {
        ...state,
        question2: action.question2,
      };
      
    case 'SET_QUESTION_3':
      return {
        ...state,
        question3: action.question3,
      };

    case 'SET_QUESTION_4':
      return {
        ...state,
        question4: action.question4,
      };

    case 'SET_QUESTION_5':
      return {
        ...state,
        question5: action.question5,
      };

    case 'SET_QUESTION_6':
      return {
        ...state,
        question6: action.question6,
      };

    case 'SET_QUESTION_7':
      return {
        ...state,
        question7: action.question7,
      };

    case 'SET_QUESTION_8':
      return {
        ...state,
        question8: action.question8,
      };

      case 'SET_QUESTION_9':
        return {
          ...state,
          question9: action.question9,
        };

      case 'SET_QUESTION_10':
        return {
          ...state,
          question10: action.question10,
        };

    default:
      return state;
  }
};

export default reducer;
