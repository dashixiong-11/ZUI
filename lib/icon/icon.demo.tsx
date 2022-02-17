import React from 'react';
import IconExample1 from './icon.example.1';
import ShowCode from "../../components/showCode/showCode";
import IconExample2 from './icon.example.2';

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
    return (
        <ShowCode codeList={codeList}>
            <IconExample1/>
            <IconExample2/>
        </ShowCode>
    );
};

export default IconDemo;
