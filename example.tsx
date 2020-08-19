import IconDemo from './lib/icon/icon.example'
import DialogDemo from './lib/dialog/dialog.example'
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import './lib/index'


ReactDOM.render((<div>
    <Router>
        <ul>
            <li>
                <NavLink to='/icon'>icon</NavLink>
                <NavLink to='/dialog'>icon</NavLink>
            </li>
        </ul>
        <Route path='/icon' component={IconDemo}></Route>
        <Route path='/dialog' component={DialogDemo}></Route>
    </Router>
</div>), document.querySelector('#root'))
