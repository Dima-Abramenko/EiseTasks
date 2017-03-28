/**
 * Created by somali on 22.03.17.
 */
import React, { Component } from 'react';
import './Menu.css';
import MenuItem from '../menu-item/MenuItem';

class Menu extends Component {
    render() {
        return(
            <div>
                <ul>
                    {
                        this.props.items.map(function(item){
                            return <MenuItem key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}
export default Menu;