import * as React from 'react';
import './importAllIcon'



interface IconProps {
    name:string
}
const icon:React.FunctionComponent<IconProps>  = (props) => {
    
    return <>
        <span>
            <svg>
                <use xlinkHref={ `#${props.name}`}/>
            </svg>
        </span>
    </>;
};


export default icon;