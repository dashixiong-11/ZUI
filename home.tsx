import React from "react";
import Icon from "./lib/icon/icon";
import './home.scss'

export const Home = () => {
    return <div className="home">
        <Icon name='zui' size={80}/>
        <span className="title">ORZUI</span>
        <div className="install">
            <div>
                <span>install by npm</span>
                <div> npm i orzui</div>
            </div>
            <div>
                <span>install by yarn</span>
                <div> yarn add orzui</div>
            </div>
        </div>

    </div>
}

export default Home