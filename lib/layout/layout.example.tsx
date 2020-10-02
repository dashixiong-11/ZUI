import Layout from "./layout";
import Header from "./header";
import React from 'react';
import Footer from "./footer";
import Content from "./content";
import Aside from "./aside";
import './layout.example.scss'


export default function () {
    return <div style={{height: '100vh'}}>
        <Layout >
            <Header className='h'>
                header
            </Header>
            <Content className='c'>
                content
            </Content>
            <Footer className='f'>
                footer
            </Footer>
        </Layout>

        <Layout style={{margin:'50px 0'}}>
            <Header className='h'>header</Header>
            <Layout>
                <Aside className='a'>aside</Aside>
                <Content className='c'>content</Content>
            </Layout>
            <Footer className='f'>footer</Footer>
        </Layout>

        <Layout>
            <Aside className='a'>Aside</Aside>
            <Layout>
                <Header className='h'>Header</Header>
                <Content className='c'>content</Content>
                <Footer className='f'>footer</Footer>
            </Layout>
        </Layout>

    </div>

}