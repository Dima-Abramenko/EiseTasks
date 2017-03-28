import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}
export default MenuItem;