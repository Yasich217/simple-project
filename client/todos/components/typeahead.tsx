import { connect } from 'react-redux';
import * as React from 'react';
import Result from '../../todos/components/Result';
import Loading from '../../todos/components/Loading';

import { sendRequest } from '../../todos/actions';
import TextInput from '../../todos/components/TextInput';
import { IOResult } from '../../todos/model';

interface IProps { 
  sendQuery: (string) => void;
  handleOnChange: (string) => void;
  handleOnClick: (string) => void;
  search: ISearch;
  query: string;
}
interface ISearch {
  result: IOResult[];
  show: boolean;
  query: string;
}

class Typeahead extends React.Component<IProps, void> {
    render() {
        return (
            <div className="typeahead">
            <header className="header">
                <h1>Twitter</h1>
                <TextInput handleOnChange={ this.props.sendQuery } query={ this.props.search.query }  />
            </header>
            <Loading show = { this.props.search.show }/>
            <Result handleOnClick={ this.props.sendQuery } result = { this.props.search.result } />
            </div>
        );
    }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => {
  return {      
    sendQuery: (event) => {
      let query = event.target.value ? event.target.value : event.target.innerText;
      sendRequest(query)(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Typeahead);