import * as React from 'react';
import LoginForm from './login-form';

interface IProps {

}

interface IState {

}

class RightBar extends React.Component<IProps, IState> {
    render() {
        return (
            <div className = "right-bar fl_r" >
                <LoginForm />
            </div>
        );
    }
}

export default RightBar;