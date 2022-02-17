import React from 'react';
import {ButtonExample as ButtonExample1} from './button.example.1';
import {ButtonExample as ButtonExample2} from './button.example.2';
import {ButtonExample as ButtonExample3} from './button.example.4';
/*
import ButtonExample3 from './button.example.3';
import ButtonExample5 from './button.example.5';
*/
import ShowCode from "../../components/showCode/showCode";

const ButtonDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./button.example.1.tsx').default,
            title: 'theme',
            describe: '',
            example: <ButtonExample1/>
        },
        {
            code:
            require('!!raw-loader!./button.example.3.tsx').default,
            title: 'size',
            describe: '',
            example: <ButtonExample2/>
        },
        {
            code:
            require('!!raw-loader!./button.example.4.tsx').default,
            title: 'Button Group',
            describe: '支持组合按钮',
            example: <ButtonExample3/>
        },
        /*
                {
                    code:
                    require('!!raw-loader!./button.example.5.tsx').default,
                    title: 'disabled',
                    describe: '',
                    example: <ButtonExample5/>
                }
        */
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

export default ButtonDemo;
