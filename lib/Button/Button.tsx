import React, {ButtonHTMLAttributes} from 'react'
import './Button.scss'
import {scopedClassNameMaker} from "../helpers/classes";

const sc = scopedClassNameMaker('button')

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'normal' | 'large' | 'small',
    theme?: 'default' | 'primary' | 'text',
    disabled?: boolean,
}


const ORZButton: React.FunctionComponent<Props> = (props) => {
    const {className, disabled, size, theme, ...rest} = props
    const classes = [theme, size].filter(Boolean).join(' ')

    return (
        <button disabled={disabled}  className={sc('', {extra: className || '' + ` ${classes}`})} {...rest}>
            {props.children}
        </button>
    )
}

export default ORZButton

ORZButton.defaultProps = {
    size: 'normal',
    theme: 'default',
    disabled: false
}