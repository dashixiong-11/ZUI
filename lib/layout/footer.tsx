import React from 'react'
import {scopedClassNameMaker} from "../helpers/classes";


const sc = scopedClassNameMaker('layout-footer')
interface Props extends React.HTMLAttributes<HTMLElement>{}

const Footer: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('',{extra:className})} {...rest}>footer</div>
    )
}

export default Footer