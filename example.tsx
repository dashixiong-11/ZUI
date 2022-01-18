import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DialogDemo from './lib/dialog/dialog.example'
import LayoutDemo from './lib/layout/layout.example'
import FormDemo from './lib/form/form.example'
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo'
import ScrollExample from './lib/scroll/scroll.example';
import CitySelectExample from './lib/citySelect/citySelect.example';
import TreeExample from './lib/tree/tree.example';

import './example.scss'
import './lib/index'


ReactDOM.render((
    <Router>
        <div className="site-page">
            <div className="site-header">
                <div className="logo">
                    <span>LOGO</span>
                    <span> ZUI </span>
                </div>
            </div>
            <div style={{height:'80px'}}/>
            <main>
                <aside className="site-aside">
                    <span>组件</span>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/scroll">滚动组件</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tree">树组件</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">form</NavLink>
                        </li>
                    </ul>
                </aside>
                <div className="site-main">
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/scroll" component={ScrollExample}/>
                    <Route path="/dialog" component={DialogDemo}/>
                    <Route path="/citySelect" component={CitySelectExample}/>
                    <Route path="/tree" component={TreeExample}/>
                    <Route path="/layout" component={LayoutDemo}/>
                    <Route path="/form" component={FormDemo}/>
                </div>
            </main>
        </div>
    </Router>), document.querySelector('#root'))
