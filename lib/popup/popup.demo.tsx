import React from 'react';
import PopupExample1 from './popup.example.1';
import ShowCode from "../../showCode/showCode";

const PopupDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./popup.example.1.tsx').default,
            title: '上弹窗',
            describe: '这是一段描述',
            example: <PopupExample1/>
        },
    ]
    return (
        <ShowCode codeList={codeList}/>
    );
};

export default PopupDemo;
