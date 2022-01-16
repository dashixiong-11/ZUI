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
import ScrollExample from './lib/scroll/scroll.example';
import CitySelectExample from './lib/citySelect/citySelect.example';
import TreeExample from './lib/tree/tree.example';
/*
*/
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
                        <li>
                            <NavLink to="/scroll">滚动组件</NavLink>
                        </li>
                        <li>
                            <NavLink to="/citySelect">城市选择</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tree">树组件</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/scroll" component={ScrollExample}/>
                    <Route path="/citySelect" component={CitySelectExample}/>
                    <Route path="/tree" component={TreeExample}/>
{/*
                    <Route path="/tree" component={TreeExample}/>
*/}
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; dashixiong
            </Footer>
        </Layout>
    </Router>
</div>), document.querySelector('#root'))
