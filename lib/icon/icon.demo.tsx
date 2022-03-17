import React from 'react';
import {IconExample as IconExample1} from './icon.example.1';
import {IconExample as IconExample2} from './icon.example.2';
import {IconExample as IconExample3} from './icon.example.3';
import ShowCode from "../../components/showCode/showCode";

const IconDemo = () => {
    const codeList: CodeList = [
        {
            code:
            require('!!raw-loader!./icon.example.1.tsx').default,
            title: 'name',
            describe: '不同的图标',
            example: <IconExample1/>
        },
        {
            code:
            require('!!raw-loader!./icon.example.2.tsx').default,
            title: 'size',
            describe: '控制图标大小',
            example: <IconExample2/>
        },
        {
            code:
            require('!!raw-loader!./icon.example.2.tsx').default,
            title: 'color',
            describe: '控制图标颜色',
            example: <IconExample3/>
        },
    ]

    const apiDocList: apiDoc[] = [
        {name: 'name', explain: 'icon图案', type: 'String', default: '-'},
        {name: 'size', explain: 'icon尺寸', type: 'Number', default: '15'},
        {name: 'color', explain: 'icon颜色', type: 'String', default: '#009688'},
    ]
    return (
        <ShowCode codeList={codeList} apiDocList={apiDocList} title='Icon 图标' desc='一个很普通的icon'/>
    );
};

export default IconDemo;
