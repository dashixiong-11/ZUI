import React from 'react'
import {scopedClassNameMaker} from "../helpers/classes";

const sc = scopedClassNameMaker('layout-header')
const Header: React.FunctionComponent = () => {
    return (
        <div className={sc('')}>header</div>
    )
}

export default Header