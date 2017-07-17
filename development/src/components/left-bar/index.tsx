import * as React from 'react';

interface IProps {

}

interface IState {

}

class LeftBar extends React.Component<IProps, IState> {
    render() {
        return (
            <div className = "left-bar fl_l" >Левое меню</div>
        );
    }
}

export default LeftBar;