import * as React from 'react';
import Button from '../button/button';
import {useState} from "react";
import Popup from "./Popup";


const PopupExample1: React.FunctionComponent = () => {
    const [visible, setVisible] = useState(false)
    return <>
        <Button onClick={() => setVisible(true)}> 上弹窗 </Button>
        <Popup show={visible}>
            这是一段内容
        </Popup>
    </>;
};

export default PopupExample1;