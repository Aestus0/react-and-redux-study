import {Link} from 'react-router-dom';
import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: '欢迎',
            direction: '方向',
            url: 'url参数测试'
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>{this.state.welcome}</Link></li>
                    <li><Link to='/test'>{this.state.url}</Link></li>
                    <li><Link to='/order/asc'>{this.state.direction}</Link></li>
                </ul>
            </nav>
        )
    }
}

