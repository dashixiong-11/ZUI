import * as React from 'react';
import Button from './button';


const ButtonExample2: React.FunctionComponent = () => {
    return <>
        <Button size='large'> 大尺寸 </Button>
        <Button style={{margin: '0 20px'}}> 正常尺寸 </Button>
        <Button size='small'> 小尺寸 </Button>
    </>
};

export default ButtonExample2;