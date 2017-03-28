import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './pages/app/App';
import TodayPage from './pages/today-page/TodayPage';
import LaterPage from  './pages/later-page/LaterPage';
import CompletedPage from './pages/completed-page/CompletedPage';
import './index.css';

//const history = createBrowserHistory();
ReactDOM.render (
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/app' component={App}/>
            <Route path='/today' component={TodayPage}/>
            <Route path='/later' component={LaterPage}/>
            <Route path='/completed' component={CompletedPage}/>
        </div>
    </Router>,
  document.getElementById('root')
);
