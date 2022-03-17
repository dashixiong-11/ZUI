import React from 'react';
import PopupExample1 from './popup.example.1';
import ShowCode from "../../components/showCode/showCode";

const PopupDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./popup.example.1.tsx').default,
            title: '弹出层',
            describe: '',
            example: <PopupExample1/>
        },
    ]

    const apiDocList: apiDoc[] = [
        {name: 'title', explain: '弹出层标题', type: 'String', default: '-'},
        {name: 'content', explain: '弹出层内容', type: 'String', default: '-'},
        {name: 'trigger', explain: '触发方式', type: 'click | hover', default: 'click'},
        {name: 'placement', explain: '弹出位置', type: 'top | bottom | right | left', default: 'top'},
    ]

    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Popup 弹出层' desc='一个普通popup组件'/>
    );
};

export default PopupDemo;
