import { SUCCESS_REQUEST, BEGIN_REQUEST, CLEAR_QUERY } from './constants/ActionTypes';
import axios from 'axios';

export const addResult = function(query, result)  {
  return {
    type: SUCCESS_REQUEST,
    payload: { result, show: false }
  };
};

export const beginRequest = function(query)  {
  return {
    type: BEGIN_REQUEST,
    payload: { query, show: true }
  };
};

export const clearQuery = function()  {
  return {
    type: CLEAR_QUERY,
    payload: { query: '', show: false }
  };
};


export const sendRequest = (query) => {
  return dispatch => {
    if(query !== '') {
      dispatch(beginRequest(query));
      axios.get('https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + query)
      .then((response) => {
        dispatch(addResult(query, response.data)); 
      })
      .catch(function (error) {
        dispatch(addResult('', [{id: 0, name: `Произошла ошибка при запросе к серверу, попробуйте снова. Описание ошибки - ${error}`}])); 
      });
    }
    else dispatch(clearQuery());
  }
};