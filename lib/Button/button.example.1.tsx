import * as React from 'react';
import ORZButton from './Button';


const ButtonExample: React.FunctionComponent = () => {
    return <>
        <ORZButton theme='primary'> primary </ORZButton>
            <ORZButton style={{margin:'0 1em'}}> default </ORZButton>
        <ORZButton theme='text'> text </ORZButton>
    </>;
};

export {
    ButtonExample
};