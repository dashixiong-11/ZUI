import * as React from 'react';
import ORZButton from './Button';


const ButtonExample: React.FunctionComponent = () => {
    return <>
        <ORZButton size='large'> 大尺寸 </ORZButton>
        <ORZButton style={{margin: '0 20px'}}> 正常尺寸 </ORZButton>
        <ORZButton size='small'> 小尺寸 </ORZButton>
    </>
};

export {
    ButtonExample
};
