import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e);
};

const app = () => {
    return <div>
        <Icon  name='wechat'  color='red' onClick={fn}></Icon>
    </div>;
};


ReactDOM.render(app(), document.getElementById('root'));

