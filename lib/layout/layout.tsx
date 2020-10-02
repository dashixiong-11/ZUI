import React, {ReactElement} from 'react'
import './layout.scss'

import Aside from "./aside";
import {scopedClassNameMaker} from "../helpers/classes";

const sc = scopedClassNameMaker('layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>

}

const Layout: React.FunctionComponent<Props> = (props) => {
    const children = props.children as Array<ReactElement>

    const hasAside = children.length &&
        children.reduce((result, node) => result || node.type === Aside, false)

    const {className, ...rest} = props
    return (<div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>
        {props.children}
    </div>)
}

export default Layout