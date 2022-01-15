import IconDemo from './lib/icon/icon.demo'
/*
import DialogDemo from './lib/dialog/dialog.example'
import LayoutDemo from './lib/layout/layout.example'
import FormDemo from './lib/form/form.example'
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss'
import './lib/index'


ReactDOM.render((<div>
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    {/*<img src={logo} width="48" height="48" alt=""/>*/}
                    <span>LOGO</span>
                    <span> ZUI </span>
                </div>
            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Route path="/icon" component={IconDemo}/>
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; dashixiong
            </Footer>
        </Layout>
    </Router>
</div>), document.querySelector('#root'))
