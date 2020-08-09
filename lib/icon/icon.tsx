import * as React from 'react';
import './icon.scss';
import '../icons/wechat.svg'
import './importAllIcon';
import classes from '../helpers/classes';


interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    size?: number;
    color?: string;
}

const icon: React.FunctionComponent<IconProps> = ({className, name,color, size, ...restProps}) => {

    return <svg style={{fontSize: `${size}px`, fill: `${color}`}}
             className={classes('zui-icon', className)} {...restProps} >
            <use xlinkHref={`#${name}`}/>
        </svg>
};


export default icon;