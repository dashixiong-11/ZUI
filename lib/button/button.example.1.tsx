import * as React from 'react';
import Button from './button';


const ButtonExample1: React.FunctionComponent = () => {
    return <>
        <Button theme='primary'> primary </Button>
        <Button> default </Button>
        <Button theme='text'> text </Button>
    </>;
};

export default ButtonExample1;