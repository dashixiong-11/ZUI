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
            console.log('331200');
            console.log(e);
/*
            if (e.type.name !== 'ORZButton') {
                throw 'children 类型错误'
            }
*/
        })
    })
    return <>
        <div className={sc('')}>
            {children}
        </div>
    </>
}
export default ORZButtonGroup