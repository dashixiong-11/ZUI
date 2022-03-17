import React from 'react';
import {TreeExample as TreeExample1} from './tree.example.1';
import ShowCode from "../../components/showCode/showCode";

const TreeDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./tree.example.1.tsx').default,
            title: '',
            describe: '',
            example: <TreeExample1/>
        }
    ]
    const apiDocList: apiDoc[] = [
        {name: 'sourceData', explain: '原数据', type: 'Array', default: '-'},
        {name: 'selected', explain: '已选中的数据', type: 'Array', default: '-'},
        {name: 'onChange', explain: '点击选中回调', type: 'Function', default: '-'},
        {name: 'multiple', explain: '是否支持多选', type: 'Boolean', default: '-'},
    ]
    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Tree 树选择' desc='一个普普通通的树选择组件'/>
    );
};

export default TreeDemo;
