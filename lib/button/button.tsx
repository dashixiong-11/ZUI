import React,{ButtonHTMLAttributes} from 'react'
import './button.scss'
import {scopedClassNameMaker} from "../helpers/classes";

const sc = scopedClassNameMaker('button')

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{}

const Button: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props

    return (
        <button className={sc('',{extra:className})} {...rest}>
            {props.children}
        </button>
    )
}

export default Button