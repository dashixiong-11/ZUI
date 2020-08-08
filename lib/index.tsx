import ReactDOM from 'react-dom';
import React from 'react'
import Icon from './icon';

const fn:React.MouseEventHandler = (e)=>{
    console.log(e);
}

const app = () =>{
    return <div>
        <Icon name='wechat' className='xxx' onClick={ fn }></Icon>
    </div>
}


ReactDOM.render(app(),document.getElementById("root"))

