import React from 'react';
import ReactDOM from 'react-dom';
import  {Router, Route, hashHistory} from 'react-router';

import {Root} from './components/root'
import {Login} from './components/login';
import {Tab1} from './components/tab1';
import {Tab2} from './components/tab2';

ReactDOM.render(
< Router history = {hashHistory} >
    <Route path ="/" component = {Root } >
        <Route path="tab1(/:val)" component = {Tab1}></Route>
        <Route path="tab2" component = {Tab2}></Route>
    </Route>

    <Route path ="/login" component = {Login } />
    </Router>, document.querySelector('#root'));