import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    RESET_ERROR
} from './adminTypes';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_USERS_SUCCESS:
            return { ...state, loading: false, users: action.payload };
        case FETCH_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case DELETE_USER_REQUEST:
            return { ...state, loading: true, error: null };
        case DELETE_USER_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                users: state.users.filter((user) => user._id !== action.payload) 
            };
        case DELETE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case RESET_ERROR:
            return { ...state, error: null };
        default:
            return state;
    }
};
