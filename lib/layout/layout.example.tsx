import Layout from "./layout";
import Header from "./header";
import React from 'react';
import Footer from "./footer";
import Content from "./content";
import Aside from "./aside";


export default function () {
    return <div style={{height: '100vh'}}>
        <Layout>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </Layout>

        <Layout>
            <Header></Header>
            <Layout>
                <Aside></Aside>
                <Content></Content>
            </Layout>
            <Footer></Footer>
        </Layout>

        <Layout>
            <Aside></Aside>
            <Layout>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </Layout>

    </div>

}