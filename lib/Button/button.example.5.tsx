import * as React from 'react';
import ORZButton from './Button';


const ButtonExample: React.FunctionComponent = () => {
    return (<>
        <ORZButton disabled={true} theme='primary'> primary </ORZButton>
        <ORZButton disabled={true}> normal </ORZButton>
        <ORZButton disabled={true} theme='text'> text </ORZButton>
    </>);
};

export {
    ButtonExample
}