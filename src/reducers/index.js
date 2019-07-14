import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';


import accommodationReducer from './accommodationReducer'
 
const rootReducer = combineReducers({
  //routing: routerReducer,
  accomodations : accommodationReducer,
});

export default rootReducer;