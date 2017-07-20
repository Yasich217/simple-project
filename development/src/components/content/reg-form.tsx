import * as React from 'react';
import '../../styles/content/reg-form.less';
import {  Field, Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { required, maxLength, minLength, isNumber, isEmail } from '../../utils/form-validate';
import i18next from 'i18next';

interface IProps {
  
}

interface IState {

}
 


class RegForm extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.setLanguage('ru');
  }

  setLanguage = (lang) => {
    i18next.init({
      lng: lang,
      resources: require(`../../json/lang/${lang}.json`)
    });

    //i18next.changeLanguage(lng, this.changeLanguage);
  }

  changeLanguage = () => {
    
  }

  render() {
    return (
      <Form className ="reg-form ta_c" model="reg" onSubmit={v => console.log(v)}>
        { i18next.t('common.field.reg') }
        <br />
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
            model="reg.login"
            show="touched"
            messages={{
              required: i18next.t('common.field.error.required'),
              minLength: i18next.t('common.field.error.minLength'),
              maxLength: i18next.t('common.field.error.maxLength')
            }}
          />
          <br />
          <Control.text
            model=".email"
            validators={{
              required,
              minLength: minLength(5),
              isEmail,
            }}
            placeholder = { i18next.t('common.field.email') + ':' }
          />

          <Errors
            model="reg.email"
            show="touched"
            messages={{
              required: i18next.t('common.field.error.required'),
              minLength: i18next.t('common.field.error.minLength'),
              isEmail: i18next.t('common.field.error.incorrectEmail')
            }}
          />
          <br />
          <Control.text
            model=".name"
            validators={{
              required,
              minLength: minLength(5),
              maxLength: maxLength(15),
            }}
            placeholder = { i18next.t('common.field.name') + ':' }
          />
          <Errors
            model="reg.name"
            show="touched"
            messages={{
              required: i18next.t('common.field.error.required'),
              minLength: i18next.t('common.field.error.minLength'),
              maxLength: i18next.t('common.field.error.maxLength')
            }}
          />
          <br />
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
            model="reg.password"
            show="touched"
            messages={{
              required: i18next.t('common.field.error.required'),
              minLength: i18next.t('common.field.error.minLength'),
              maxLength: i18next.t('common.field.error.maxLength')
            }}
          />
          <br />          
          <Control.input
            model=".confirmPassword"
            type="password"
            validators={{
              required,
              minLength: minLength(6),
              maxLength: maxLength(15),
            }}
            placeholder = { i18next.t('common.field.confirmPassword') + ':' }
          />
          <Errors
            model="reg.confirmPassword"
            show="touched"
            messages={{
              required: i18next.t('common.field.error.required'),
              minLength: i18next.t('common.field.error.minLength'),
              maxLength: i18next.t('common.field.error.maxLength')
            }}
          />
            <br />
        <button type="submit">{ i18next.t('common.button.reg') }</button>

      </Form>
    )
  }
}

export default RegForm;
