import * as React from 'react';
import Button from './button';


const ButtonExample2: React.FunctionComponent = () => {
    return (<>
        <Button disabled={true} theme='primary'> 主要按钮禁用 </Button>
        <Button disabled={true} round={true} > 圆角禁用 </Button>
        <Button disabled={true} > 普通禁用 </Button>
    </>);
};

export default ButtonExample2;