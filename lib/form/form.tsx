import React, {ReactFragment} from 'react'
import {scopedClassNameMaker} from "../helpers/classes";

const sc = scopedClassNameMaker('form')

export interface FormValue {
    [K: string]: string
}

interface Props {
    value: FormValue,
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value: FormValue) => void
}

const Form: React.FunctionComponent<Props> = (props) => {

    const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        props.onSubmit(e)
    }
    const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const newFormValue = {...props.value, [name]: e.target.value}
        props.onChange(newFormValue)
    }

    return (
        <form onSubmit={onSubmit} className={sc('')}>
            {
                props.fields.map(f => <div>
                    {f.label}
                    <input type={f.input.type} onChange={onInputChange.bind(null, f.name)} value={props.value[f.name]}/>
                </div>)
            }
            <div> {props.buttons} </div>
        </form>

    )
}

export default Form