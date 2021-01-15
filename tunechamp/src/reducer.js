export const initialState = {
    user:null,
    playslists: [],
    random:null,
    playing: false,
    item: null,
    //remove after development
    token: null
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_RANDOM':
            return {
                ...state,
                random: action.random
            };
        default:
            return state;
    }
}

export default reducer;