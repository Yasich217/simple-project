import * as React from 'react';
import '../../styles/right-bar/login-form.less';
import {  Field, Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { required, maxLength, minLength, isNumber, isEmail } from '../../utils/form-validate';
import i18next from 'i18next';

interface IProps {
  
}

interface IState {

}
 


class LoginForm extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setLanguage('en');
  }

  setLanguage = (lng) => {
    i18next.init({
      lng: lng,
      resources: require(`../../json/lang/${lng}.json`)
    });

    //i18next.changeLanguage(lng, this.changeLanguage)
  }

  changeLanguage = () => {
    
  }

  render() {
    return (
      <Form className ="login-form ta_c" model="auth" onSubmit={v => console.log(v)}>
        { i18next.t('common.field.auth') }
        <Control.text
          model=".login"
          validators={{
            required,
            minLength: minLength(5),
            maxLength: maxLength(15),
          }}
          placeholder = { i18next.t('common.field.login') + ':' }
        />
        <Errors
          model="auth.login"
          show="touched"
          messages={{
            required: i18next.t('common.field.error.required'),
            minLength: i18next.t('common.field.error.minLength'),
            maxLength: i18next.t('common.field.error.maxLength')
          }}
        />

        <Control.input
          model=".password"
          type="password"
          validators={{
            required,
            minLength: minLength(6),
            maxLength: maxLength(15),
          }}
          placeholder = { i18next.t('common.field.password') + ':' }
        />
        <Errors
          model="auth.password"
          show="touched"
          messages={{
            required: i18next.t('common.field.error.required'),
            minLength: i18next.t('common.field.error.minLength'),
            maxLength: i18next.t('common.field.error.maxLength')
          }}
        />

        <button type="submit">{ i18next.t('common.button.login') }</button>

      </Form>
    )
  }
}

export default LoginForm;
