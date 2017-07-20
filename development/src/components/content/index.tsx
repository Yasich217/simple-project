import * as React from 'react';
import RegForm from './reg-form';
import Search from './search';
import { Route  } from 'react-router-dom';

interface IProps {

}

interface IState {

}

class Content extends React.Component<IProps, IState> {
    render() {
        return (
            <div className = "content" >
                <Route path="/registration/" component={ RegForm }/>
            </div>
        );
    }
}

export default Content;