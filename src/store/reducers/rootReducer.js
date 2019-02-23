import { combineReducers } from 'redux'
import  authReducesAd      from './authReducerAd'
import reducerUser from './reducerUser'
import reducerCompany from './reducerCompany'
import {firebaseReducer}   from 'react-redux-firebase'
import {firestoreReducer}  from 'redux-firestore'


const rootReducers  = combineReducers({

    authAd:       authReducesAd,
    reducerUR:    reducerUser,
    reducerCP:    reducerCompany,

    firebase:     firebaseReducer,
    firestore:    firestoreReducer
});

export default rootReducers;

