import { createStore, combineReducers } from 'redux';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store;