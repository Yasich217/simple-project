import * as React from 'react';
import Axios from 'axios';


interface IProps {

}

interface IState {
    results: IResult[];
    query: string;
}

interface IResult {
    title: string;
    kinopoisk_id: string;
    world_art_id: string;
    type: string;
    quality: string;
    iframe_url: string;
    translator: string;
    added_at: string;
    seasons_count?: string;
    episodes_count?: string;
}

//http://hdgo.cc/api/video.json?token=1b1b35bbc0eedc83e1221116d7793b3a&title=%D0%9F%D0%B5%D1%80%D1%81%D0%B8
class Search extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            query: ''
        }
    }

    handleChange = (event) => {
        let query = event.target.value;

        Axios.get('http://hdgo.cc/api/video.json?token=1b1b35bbc0eedc83e1221116d7793b3a&title=' + query)
        .then((response) => {
            this.setState({results: response.data}); 
        })
        .catch(function (error) {
            this.setState({ results: []});
        }); 
    }

    render() {
        return (
            <div className = "search">
                <input type = "text" onChange = { this.handleChange } placeholder = "Поиск по сайту" />
                <div className = "result">
                    { this.state.results.map(item => item.title) }
                </div>
            </div>
        );
    }
}

export default Search;
