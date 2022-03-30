import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Home from './home'
import DialogDemo from './lib/dialog/dialog.demo'
import LayoutDemo from './lib/layout/layout.example'
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo'
import ButtonDemo from './lib/Button/button.demo'
import ScrollDemo from './lib/scroll/scroll.demo';
import PopupDemo from './lib/popup/popup.demo';
import TreeDemo from "./lib/tree/tree.demo";
import FormDemo from "./lib/form/form.example";
import Icon from "./lib/icon/icon";
import './example.scss'
import './lib/index'


ReactDOM.render((
        <Router>
            <div className="site-page">
                <div className="site-header">
                    <div className="logo">
                        <Icon name='zui' size={40}/>
                        <a href="/">ZUI</a>
                    </div>
                    <div className="github">
                        <Icon name='github' size={35}/>
                        <a href="https://github.com/dashixiong-11/ZUI">Github</a>
                    </div>
                </div>
                <div style={{height: '80px'}}/>
                <main>
                    <aside className="site-aside">
                        <span>组件</span>
                        <ul>
                            <li>
                                <NavLink activeClassName='active' to="/button">Button</NavLink>
                            </li>
                            <li>
                                <NavLink to="/icon">Icon</NavLink>
                            </li>
                            <li>
                                <NavLink to="/scroll">Scroll</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tree">Tree</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialog">Dialog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/popup">Popup</NavLink>
                            </li>
                        </ul>
                    </aside>
                    <div className="site-main">
                        <Route path="/" component={Home} exact/>
                        <Route path="/home" component={Home}/>
                        <Route path="/button" component={ButtonDemo}/>
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/scroll" component={ScrollDemo}/>
                        <Route path="/dialog" component={DialogDemo}/>
                        {/*
                    <Route path="/citySelect" component={CitySelectExample}/>
*/}
                        <Route path="/tree" component={TreeDemo}/>
                        <Route path="/layout" component={LayoutDemo}/>
                        <Route path="/form" component={FormDemo}/>
                        <Route path="/popup" component={PopupDemo}/>
                    </div>
                </main>
            </div>
        </Router>
    ),
    document.querySelector('#root')
)
