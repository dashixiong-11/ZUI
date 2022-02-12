import React, {ButtonHTMLAttributes} from 'react'
import './button.scss'
import {scopedClassNameMaker} from "../helpers/classes";

const sc = scopedClassNameMaker('button')

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'normal' | 'large' | 'small',
    round?: boolean,
    theme?: 'default' | 'primary' | 'text',
    disabled?: boolean
}


const Button: React.FunctionComponent<Props> = (props) => {
    const {className, disabled, ...rest} = props
    const classes = [props.theme, props.size, (props.round && 'border')].filter(Boolean).join(' ')
    console.log(classes);

    return (
        <button disabled={disabled}  className={sc('', {extra: className + ` ${classes}`})} {...rest}>
            {props.children}
        </button>
    )
}

export default Button

Button.defaultProps = {
    size: 'normal',
    round: false,
    theme: 'default',
    disabled: false
}