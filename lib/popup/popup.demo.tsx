import React from 'react';
import PopupExample1 from './popup.example.1';
import ShowCode from "../../components/showCode/showCode";

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

    const apiDocList: apiDoc[] = [
        {name: 'theme', explain: '按钮类型', type: 'default | primary | text', default: 'default'},
        {name: 'size', explain: '按钮尺寸', type: 'normal | large | small', default: 'normal'},
        {name: 'disabled', explain: '是否禁用', type: 'Boolean', default: 'false'},
    ]

    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Popup' desc='一个普通popup组件'/>
    );
};

export default PopupDemo;
