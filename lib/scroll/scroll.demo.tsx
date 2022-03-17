import React from 'react';
import {ScrollExample as ScrollExample1} from './scroll.example.1';
import ShowCode from "../../components/showCode/showCode";

const ScrollDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./scroll.example.1.tsx').default,
            title: '',
            describe: 'onPull 方法仅在移动端有效',
            example: <ScrollExample1/>
        }
    ]
    const apiDocList: apiDoc[] = [
        {name: 'height', explain: '滚动视图的高度', type: 'String', default: '-'},
        {name: 'onPull', explain: '触发下拉事件方法', type: 'Function', default: '-'},
    ]
    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Scroll 滚动' desc='一个普普通通的滚动组件'/>
    );
};

export default ScrollDemo;
