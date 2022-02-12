import * as React from 'react';
import Button from './button';


const ButtonExample2: React.FunctionComponent = () => {
    return (<>
        <Button round={true} theme='primary'> primary </Button>
        <Button round={true} > default </Button>
    </>);
};

export default ButtonExample2;