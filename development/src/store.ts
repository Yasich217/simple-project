import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const compose = composeWithDevTools(applyMiddleware(thunk));

const initialAuthState = {
  login: '',
  password: ''
};
const initialRegState = {
  login: '',
  password: '',
  confirmPassword: '',
  email: '',
  name: ''
};

const store = createStore(combineForms({
  auth: initialAuthState,
  reg: initialRegState,
}), compose);

export default store;
