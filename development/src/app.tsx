import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/header/';
import LeftBar from './components/left-bar/';
import RightBar from './components/right-bar/';
import Content from './components/content/';
import Footer from './components/Footer/';

interface IProps {

}

interface IState {

}

class App extends React.Component<IProps, IState> {
    render() {
        return (
            <div className = 'wrap'>
                <Header />
                <LeftBar />
                <RightBar />
                <Content />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
