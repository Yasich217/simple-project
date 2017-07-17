import * as React from 'react';

interface IProps {

}

interface IState {

}

class Content extends React.Component<IProps, IState> {
    render() {
        return (
            <div className = "content" >Основной контент страницы</div>
        );
    }
}

export default Content;