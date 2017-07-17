import * as React from 'react';

interface IProps {

}

interface IState {

}

class RightBar extends React.Component<IProps, IState> {
    render() {
        return (
            <div className = "right-bar fl_r" >Правое меню</div>
        );
    }
}

export default RightBar;