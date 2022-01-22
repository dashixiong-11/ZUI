import React from 'react';
import ButtonExample1 from './button.example.1';
import ButtonExample2 from './button.example.2';
import ButtonExample3 from './button.example.3';
import ButtonExample4 from './button.example.4';
import ShowCode from "../../showCode/showCode";

const ButtonDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./button.example.1.tsx').default,
            title: '普通按钮',
            describe: '这是一段描述',
            example: <ButtonExample1/>
        },
        {
            code:
            require('!!raw-loader!./button.example.2.tsx').default,
            title: '主要按钮',
            describe: '',
            example: <ButtonExample2/>
        },
        {
            code:
            require('!!raw-loader!./button.example.3.tsx').default,
            title: '支持size',
            describe: '',
            example: <ButtonExample3/>
        },
        {
            code:
            require('!!raw-loader!./button.example.4.tsx').default,
            title: '支持border',
            describe: '',
            example: <ButtonExample4/>
        }
    ]
    return (
        <ShowCode codeList={codeList}/>
    );
};

export default ButtonDemo;
