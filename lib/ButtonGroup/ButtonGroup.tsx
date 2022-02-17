import React, {ReactComponentElement, useEffect} from "react";
import './ButtonGroup.scss'

import {scopedClassNameMaker} from "../helpers/classes";

const sc = scopedClassNameMaker('button-group')

type ButtonGroupType = {
    children: ReactComponentElement<any>[]
}
const ORZButtonGroup: React.FC<ButtonGroupType> = (props) => {
    const {children} = props
    useEffect(() => {
        children.forEach(e => {
            if (e.type.name !== 'ORZButton') {
                throw 'children 类型错误'
            }
        })
    })
    return <>
        <div className={sc('')}>
            {children}
        </div>
    </>
}
export default ORZButtonGroup