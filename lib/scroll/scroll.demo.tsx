import React from 'react';
import {ScrollExample as ScrollExample1} from './scroll.example.1';
import ShowCode from "../../components/showCode/showCode";

const ScrollDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./scroll.example.1.tsx').default,
            title: '',
            describe: '',
            example: <ScrollExample1/>
        }
    ]
    const apiDocList: apiDoc[] = [
        {name: 'theme', explain: '按钮类型', type: 'default | primary | text', default: 'default'},
        {name: 'size', explain: '按钮尺寸', type: 'normal | large | small', default: 'normal'},
        {name: 'disabled', explain: '是否禁用', type: 'Boolean', default: 'false'},
    ]
    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Button 按钮' desc='一个普普通通的按钮'/>
    );
};

export default ScrollDemo;
