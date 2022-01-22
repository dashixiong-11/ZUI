import React, {ButtonHTMLAttributes} from 'react'
import './button.scss'
import {scopedClassNameMaker} from "../helpers/classes";

const sc = scopedClassNameMaker('button')

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'normal' | 'large' | 'small',
    border?: boolean,
    theme?: 'default' | 'primary'
}


const Button: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    const classes = [props.theme, props.size, props.border && 'border'].filter(Boolean).join(' ')

    return (
        <button className={sc('', {extra: className + ` ${classes}`})} {...rest}>
            {props.children}
        </button>
    )
}

export default Button

Button.defaultProps = {
    size: 'normal',
    border: false,
    theme: 'default'
}