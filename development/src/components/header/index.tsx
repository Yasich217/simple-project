import * as React from 'react';

interface IProps {

}

interface IState {

}

class Header extends React.Component<IProps, IState> {
    render() {
        return (
            <div className = "header ta_c" >Шапка</div>
        );
    }
}

export default Header;