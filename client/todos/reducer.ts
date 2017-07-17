
import { IState } from './model';
import { SUCCESS_REQUEST, BEGIN_REQUEST, CLEAR_QUERY } from './constants/ActionTypes';

const initialState = { 
  result: [{
    id: 0,
    name: 'Это просто тестовый элемент...'
  }],
  show: false,
  query: ''
};

const search = function(state = initialState, action)
  {
    switch(action.type) {
        case SUCCESS_REQUEST:
          return {...state, result: action.payload.result, show: action.payload.show};
        case BEGIN_REQUEST:
          return {...state, query: action.payload.query, result: [], show: action.payload.show};
        case CLEAR_QUERY:
          return {...state, query: action.payload.query, result: [], show: action.payload.show};
        default:
            return state;
    }
  };

  export default search;