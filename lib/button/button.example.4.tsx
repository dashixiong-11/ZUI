import * as React from 'react';
import Button from './button';


const ButtonExample2: React.FunctionComponent = () => {
    return (<>
        <Button border size='large'> 大尺寸 </Button>
        <Button border style={{margin: '0 20px'}}> 正常尺寸 </Button>
        <Button border size='small'> 小尺寸 </Button>
    </>);
};

export default ButtonExample2;