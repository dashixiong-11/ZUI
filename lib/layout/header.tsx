import React from 'react'
import {scopedClassNameMaker} from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{}
const sc = scopedClassNameMaker('layout-header')
const Header: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('',{extra:className})} {...rest}>{props.children}</div>
    )
}

export default Header