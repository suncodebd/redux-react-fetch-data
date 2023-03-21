import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from '../components/services/reducers/TodosReducer';

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
