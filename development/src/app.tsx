import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {

}

interface IState {

}

class App extends React.Component<IProps, IState> {
    render() {
        return (
            <h1>Hello world!!!</h1>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);