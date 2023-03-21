/* eslint-disable prettier/prettier */
import axios from 'axios';
import {
    API_URL,
    GET_TODOS_FAIALD,
    GET_TODOS_REQUEST,
    GET_TODOS_SECCESS
} from '../constant/TodoConst';

export const getAllTodos = () => async (dispatch) => {
    try {
        dispatch({ type: GET_TODOS_REQUEST });
        const res = await axios.get(API_URL);

        dispatch({ type: GET_TODOS_SECCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_TODOS_FAIALD, payload: error.message });
    }
};
