/**
 * Created by somali on 22.03.17.
 */
import React, { Component } from 'react';
import './Header.css';
import Date from '../date/Date';
import Menu from '../menu/Menu';
import Avatar from '../avatar/Avatar';
class Header extends Component {
    render() {
        return (<header className="header">
            <Date/>
            <Menu items={ ['На сегодня', 'Входящие', 'На потом', 'Выполненные'] } />
            <Avatar/>
            </header>);
    }
}
export default Header;