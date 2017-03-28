import React, { Component } from 'react';
import logo from './image/logo.svg';
import './App.css';
import Header from '../../components/header/Header';
import MainField from '../../components/main-field/MainField';

class App extends Component {

    render() {
        return <div>
            <Header/>
            <MainField />
            </div>
    }
}
export default App;
