import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


const store = createStore(reducer, applyMiddleware(thunk));

export default store;