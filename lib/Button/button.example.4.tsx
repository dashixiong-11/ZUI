import * as React from 'react';
import ORZButtonGroup from "../ButtonGroup/ButtonGroup";
import ORZButton from './Button';


const ButtonExample: React.FunctionComponent = () => {
    return (<>
        <ORZButtonGroup>
            <ORZButton> default </ORZButton>
            <ORZButton> default </ORZButton>
        </ORZButtonGroup>
        <br/>
        <ORZButtonGroup>
            <ORZButton> default </ORZButton>
            <ORZButton> default </ORZButton>
            <ORZButton> default </ORZButton>
        </ORZButtonGroup>
        <br/>
        <ORZButtonGroup>
            <ORZButton theme='primary'> default </ORZButton>
            <ORZButton> default </ORZButton>
            <ORZButton> default </ORZButton>
            <ORZButton theme='primary'> default </ORZButton>
        </ORZButtonGroup>
    </>);
};

export {
    ButtonExample
};