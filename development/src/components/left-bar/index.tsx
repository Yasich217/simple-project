import * as React from 'react';
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
                    link: '/1',
                    sub: [
                        {
                            id: 1,
                            name: 'По жанрам',
                            link: '/1',
                            sub: [
                                {
                                    id: 1,
                                    name: 'Ужасы',
                                    link: '/1'
                                },
                                {
                                    id: 2,
                                    name: 'Триллер',
                                    link: '/1'
                                },
                                {
                                    id: 3,
                                    name: 'Сопли',
                                    link: '/1'
                                },
                            ]
                        },
                        {
                            id: 2,
                            name: 'По сборам',
                            link: '/1'
                        },
                        {
                            id: 3,
                            name: 'По популярности',
                            link: '/1'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Избранное',
                    link: '/2'
                },
                {
                    id: 3,
                    name: 'Просмотренное',
                    link: '/3'
                },
                {
                    id: 4,
                    name: 'Мои списки',
                    link: '/4',
                    sub: [
                        {
                            id: 1,
                            name: 'Нужно посмотреть',
                            link: '/1'
                        },
                        {
                            id: 2,
                            name: 'Посоветовать',
                            link: '/2',
                            sub: [
                                {
                                    id: 1,
                                    name: 'Друзьям',
                                    link: '/1'
                                },
                                {
                                    id: 2,
                                    name: 'Врагам',
                                    link: '/2',
                                    sub: [
                                        {
                                            id: 1,
                                            name: 'Фильмы',
                                            link: '/1'
                                        },
                                        {
                                            id: 2,
                                            name: 'Избранное',
                                            link: '/2'
                                        },
                                        {
                                            id: 3,
                                            name: 'Просмотренное',
                                            link: '/3'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 3,
                            name: 'Говно',
                            link: '/3'
                        }
                    ]
                }
            ]
        };
    }

    renderItems = (items) => {
        return <ul>{
            items.map(item => {
                return (
                    <li key = {item.id}>
                        <a href = {item.link} >{item.name}</a>
                        {(item.sub) ? this.renderItems(item.sub) : ''}
                    </li>
                );}) 
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
