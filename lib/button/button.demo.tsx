import React from 'react';
import ButtonExample1 from './button.example.1';
import ButtonExample3 from './button.example.3';
import ButtonExample4 from './button.example.4';
import ButtonExample5 from './button.example.5';
import ShowCode from "../../showCode/showCode";

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
            example: <ButtonExample3/>
        },
        {
            code:
            require('!!raw-loader!./button.example.4.tsx').default,
            title: 'round',
            describe: '',
            example: <ButtonExample4/>
        },
        {
            code:
            require('!!raw-loader!./button.example.5.tsx').default,
            title: 'disabled',
            describe: '',
            example: <ButtonExample5/>
        }
    ]
    return (
        <ShowCode codeList={codeList}/>
    );
};

export default ButtonDemo;
