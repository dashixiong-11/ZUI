import React from 'react';
import DialogExample1 from './dialog.example.1'
import DialogExample2 from './dialog.example.2'
import ShowCode from "../../components/showCode/showCode";

const DialogDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./dialog.example.1.tsx').default,
            title: '普通用法',
            describe: '',
            example: <DialogExample1/>
        },
        {
            code:
            require('!!raw-loader!./dialog.example.2.tsx').default,
            title: '函数触发',
            describe: 'alert confirm model',
            example: <DialogExample2/>
        },
    ]
    const apiDocList: apiDoc[] = [
        {name: 'theme', explain: '按钮类型', type: 'default | primary | text', default: 'default'},
        {name: 'size', explain: '按钮尺寸', type: 'normal | large | small', default: 'normal'},
        {name: 'disabled', explain: '是否禁用', type: 'Boolean', default: 'false'},
    ]
    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Dialog 弹窗' desc='一个普普通通的按钮'/>
    );
};

export default DialogDemo;
