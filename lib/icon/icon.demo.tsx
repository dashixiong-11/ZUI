import React from 'react';
import ShowCode from "../../components/showCode/showCode";

const IconDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./icon.example.1.tsx').default,
            title: '基本用法',
            describe: '这是一段描述'
        },
        {
            code:
            require('!!raw-loader!./icon.example.2.tsx').default,
            title: '基本用法',
            describe: '这是一段描述'
        },
    ]

    const apiDocList: apiDoc[] = [
        {name: 'theme', explain: '按钮类型', type: 'default | primary | text', default: 'default'},
        {name: 'size', explain: '按钮尺寸', type: 'normal | large | small', default: 'normal'},
        {name: 'disabled', explain: '是否禁用', type: 'Boolean', default: 'false'},
    ]
    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Icon 图标' desc='一个很普通的icon'/>
    );
};

export default IconDemo;
