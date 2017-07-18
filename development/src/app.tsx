import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom';
import Header from './components/header/';
import LeftBar from './components/left-bar/';
import RightBar from './components/right-bar/';
import Content from './components/content/';
import Footer from './components/Footer/';
import axios from 'axios';

interface IProps {

}

interface IState {

}
//http://getmovie.cc/api/kinopoisk.json?id=714888&token=037313259a17be837be3bd04a51bf678
//https://vk.com/yakazarin

class App extends React.Component<IProps, IState> {
    render() {
            axios.get('http://getmovie.cc/api/kinopoisk.json?id=714888&token=037313259a17be837be3bd04a51bf678')
            .then((response) => {
                const action = {
                    type: 'RESULT_LOADED',
                    payload: {
                        icon: './trash.png',
                        result: response.data
                    }
                };
                console.log(action); 
            })
            .catch(function (error) {
                const action = {
                    type: 'LOADED_FAIL',
                    payload: {
                        icon: './trash.png',
                        error: error
                    }
                };
                console.log(action); 
            });
        return (
            <div className = 'wrap'>
                <Header />
                <LeftBar />
                <RightBar />
                <Route path="/" component={Content}/>
                <Footer />
            </div>
        );
    }
}


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);
