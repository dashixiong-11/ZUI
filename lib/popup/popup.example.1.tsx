import * as React from 'react';
import Button from '../Button/Button';
import Popup from "./Popup";


const PopupExample1: React.FunctionComponent = () => {
    return <>
        <Popup title='这是一个标题'
               trigger='click'
               content='这是一段很长的内容,这是一段很长的内容,这是一段很长的内容'
               placement='top'>
            <Button> 上弹窗 </Button>
        </Popup>
        <Popup title='这是一个标题'
               trigger='click'
               content='这是一段很长的内容,这是一段很长的内容,这是一段很长的内容'
               placement='bottom'>
            <Button> 上弹窗 </Button>
        </Popup>
        <Popup title='这是一个标题'
               trigger='click'
               content='这是一段很长的内容,这是一段很长的内容,这是一段很长的内容'
               placement='left'>
            <Button> 左弹窗 </Button>
        </Popup>
        <Popup title='这是一个标题'
               trigger='click'
               content='这是一段很长的内容,这是一段很长的内容,这是一段很长的内容'
               placement='right'>
            <Button>右弹窗 </Button>
        </Popup>
        <Popup
            trigger='hover'
            content='这是一段很长的内容,这是一段很长的内容,这是一段很长的内容'
            placement='right'>
            <Button>hover弹窗 </Button>
        </Popup>
    </>;
};

export default PopupExample1;