import React,{InputHTMLAttributes,ReactFragment} from 'react'
import {scopedClassNameMaker} from "../helpers/classes";
import './input.scss'

const sc = scopedClassNameMaker('input')

interface Props extends  InputHTMLAttributes<HTMLInputElement>{
    icon?:ReactFragment
}

const Input: React.FunctionComponent<Props> = (props) => {

    const {className,icon,...rest} = props

    return (
        <div className={sc('',{extra:className})}>
                {icon&&
                    <div className={sc('icon')}>
                        {icon}
                    </div>
                }
            <input  {...rest}/>
        </div>
    )
}

export default Input