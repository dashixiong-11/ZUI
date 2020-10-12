import React, {ReactFragment} from 'react'
import './form.scss'
import {scopedClassNameMaker} from "../helpers/classes";
import Input from "../input/input";

const sc = scopedClassNameMaker('form')

export interface FormValue {
    [K: string]: string
}

interface Props {
    value: FormValue,
    fields: Array<{ name: string, label: string, input: { type: string, placeholder?: string, icon?: ReactFragment } }>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value: FormValue) => void
    errors: { [K: string]: string[] }
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
            <table style={{borderCollapse:'collapse'}}>
                {
                    props.fields.map(f =>
                        <tr className={sc('row')} key={f.name}>
                            <td className={sc('row-td')}>
                                <span className={sc('row-label')}>
                                    {f.label}
                                </span>
                            </td>
                            <td className={sc('row-td')}>
                                <Input type={f.input.type} placeholder={f.input.placeholder}
                                       icon={f.input.icon}
                                       onChange={onInputChange.bind(null, f.name)}
                                       value={props.value[f.name]}/>
                                <div className={sc('row-td-error')}>{
                                    props.errors[f.name] ? props.errors[f.name].join('，'):<span>&nbsp;</span>}</div>
                            </td>
                        </tr>)
                }
                <tr>
                    <td/>
                    <td>
                        <div> {props.buttons} </div>
                    </td>
                </tr>
            </table>
        </form>

    );
}

export default Form