import * as React from 'react';
import Button from '../Button/Button';
import Popup from "./Popup";


const PopupExample1: React.FunctionComponent = () => {
    return <>
        <Popup title='这是一个标题'
               trigger='click'
               content='这是一段很长的内容,这是一段很长的内容,这是一段很长的内容'
               placement='bottom'>
            <Button> 上弹窗 </Button>
        </Popup>
    </>;
};

export default PopupExample1;