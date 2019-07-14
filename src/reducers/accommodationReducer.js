import {
    FETCH_ACCOMMODATIONS, 
    SAVE_ACCOMMODATION,
    EDIT_ACCOMMODATION,
    REMOVE_ACCOMMODATION,
    } from '../actions/types';
  import initialState from './intialGlobalState';
  
  export default function (state = initialState, action){  
      switch(action.type){
        case FETCH_ACCOMMODATIONS:
          return {
            ...state,
            items: action.payload,
            error: null,
            loading: false,
          };

        case SAVE_ACCOMMODATION:
          return {
            ...state,
            items: [...state.items, action.payload],
            error: null,
            loading: false
          };
  
        case REMOVE_ACCOMMODATION:
          return {
            ...state,
            error: null,
           loading: true
          };
  
        case EDIT_ACCOMMODATION:
          var ids = state.items.map(function(service) {
            return service._id;
          });
          const indexToModif = ids.indexOf(action.payload.monitoringService._id)
          const newState = {...state}
          newState.items[indexToModif] = action.payload.monitoringService;
          return {
            ...state,
            items: newState.items.slice(),
            error: null,
            loading: false
          };
        
          default:
          return state;
      }
  }