import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/left-bar/index.less';

interface IProps {

}

interface IState {
    items: IItems[];
}

interface IItems {
    id: number;
    name: string;
    link: string;
    sub?: IItems[];
}

class LeftBar extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Фильмы',
                    link: '/movies/',
                },
                {
                    id: 2,
                    name: 'Избранное',
                    link: '/favorites/'
                },
                {
                    id: 3,
                    name: 'Просмотренное',
                    link: '/watched/'
                },
                {
                    id: 4,
                    name: 'Мои списки',
                    link: '/lists/',
                    sub: [
                        {
                            id: 1,
                            name: 'Нужно посмотреть',
                            link: '/lists/1/'
                        },
                        {
                            id: 2,
                            name: 'Посоветовать',
                            link: '/lists/2/',
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Мой профиль',
                    link: '/profile/',
                },
                {
                    id: 6,
                    name: 'Выйти',
                    link: '/logout/',
                }
            ]
        };
    }

    renderItems = (items) => {
        return <ul>{
            items.map(item => {
                return (
                    <li key = {item.id}>
                        <Link to = {item.link}>{item.name}</Link>
                        {(item.sub) ? this.renderItems(item.sub) : ''}
                    </li>
            );  })
        }</ul>;
    }

    render() {
        return (
            <div className = 'left-bar fl_l' >
                <nav className = 'left-nav'>{this.renderItems(this.state.items)}</nav>
            </div>
        );
    }
}

export default LeftBar;
