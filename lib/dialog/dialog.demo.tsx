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
        {name: 'visible', explain: '是否显示弹窗', type: 'Boolean', default: 'false'},
        {name: 'buttons', explain: '自带 确定 取消按钮', type: 'ReactElement[] | null | undefined', default: '-'},
        {name: 'title', explain: '弹窗标题', type: 'ReactNode', default: '-'},
        {name: 'onClose', explain: '关闭弹窗回调', type: 'React.MouseEventHandler', default: '-'},
        {name: 'closeOnClickMask', explain: '是否可以通过点击遮罩层关闭', type: 'Boolean', default: 'false'},
        {name: 'closeButton', explain: '是否显示关闭按钮', type: 'Boolean', default: 'false'},
        {name: 'onOk', explain: '确定回调', type: 'Function', default: '-'},
        {name: 'onCancel', explain: '取消回调', type: 'Function', default: '-'},
    ]
    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Dialog 弹窗' desc='一个普普通通的按钮'/>
    );
};

export default DialogDemo;
