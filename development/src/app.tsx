import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom';
import Header from './components/header/';
import LeftBar from './components/left-bar/';
import RightBar from './components/right-bar/';
import Content from './components/content/';
import Footer from './components/Footer/';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';

interface IProps {

}

interface IState {

}
//http://getmovie.cc/api/kinopoisk.json?id=714888&token=037313259a17be837be3bd04a51bf678
class App extends React.Component<IProps, IState> {
    render() {
        return (
            <Provider store = { store }>
                <div className = 'wrap'>
                    <Header />
                    <LeftBar />
                    <RightBar />
                    <Route path="/" component={ Content }/>
                    <Footer />
                </div>
            </Provider>
        );
    }
}


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);
