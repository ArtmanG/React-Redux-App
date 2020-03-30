import { FETCH_DATA, UPDATE_CHARACTERS, SET_ERROR } from "../actions";


const initialState = {
    books: [],
    isFetchingData: false,
    error: ''
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                books: []
            };
        case UPDATE_CHARACTERS:
            return {
                ...state,
                books: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
}