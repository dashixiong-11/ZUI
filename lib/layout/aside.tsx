import React from 'react'
import {scopedClassNameMaker} from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{}
const sc = scopedClassNameMaker('layout-aside')
const Aside: React.FunctionComponent<Props> = (props) => {

    const {className,...rest} = props
    return (
        <div className={sc('',{extra:className})} {...rest}>aside</div>
    )
}

export default Aside