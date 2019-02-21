import { combineReducers } from 'redux'
import  authReducesAd      from './authReducerAd'
import {firebaseReducer}   from 'react-redux-firebase'
import {firestoreReducer}  from 'redux-firestore'


const rootReducers  = combineReducers({

    authAd:       authReducesAd,

    firebase:     firebaseReducer,
    firestore:    firestoreReducer
});

export default rootReducers;

