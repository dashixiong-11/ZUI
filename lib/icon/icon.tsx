import * as React from 'react';
import './icon.scss';
import '../icons/wechat.svg'
import '../icons/arrow.svg'
import './importAllIcon';
import classes from '../helpers/classes';


interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    size?: number;
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, size, ...restProps}) => {

    return <svg style={{fontSize: `${size}px`}}
                className={classes('orz-icon', className)} {...restProps} >
        <use xlinkHref={`#${name}`}/>
    </svg>
};

export default Icon;

Icon.defaultProps = {
    size: 15,
    color: '#009688'
}
