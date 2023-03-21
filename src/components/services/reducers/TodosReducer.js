/* eslint-disable default-param-last */
import { GET_TODOS_FAIALD, GET_TODOS_REQUEST, GET_TODOS_SECCESS } from '../constant/TodoConst';

const initialState = {
    todos: [],
    isLoading: false,
    error: null,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SECCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null,
            };
        case GET_TODOS_FAIALD:
            return {
                isLoading: false,
                todos: [],
                error: action.payload,
            };

        default:
            return state;
    }
};

export default counterReducer;
