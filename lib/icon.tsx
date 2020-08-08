import * as React from 'react';
import './icon.scss';
import './importAllIcon';
import classes from './helpers/classes';


interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

const icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, ...restProps} = props;

    return <svg className={classes('zui-icon',className)} {...restProps} >
        <use xlinkHref={`#${props.name}`}/>
    </svg>;
};


export default icon;