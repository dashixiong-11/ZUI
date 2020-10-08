import React,{useState} from 'react'
import {scopedClassNameMaker} from "../helpers/classes";

import Form,{FormValue} from './form'
import Validator from "./validator";

const sc = scopedClassNameMaker('form.example')

const FormDemo:React.FunctionComponent = () => {
    const [formData,setFormData] =  useState<FormValue>({
        username:'',
        password:''
    })

    const [fields] = useState( [
            {name:'username',label:'用户名',input:{type:'text'}},
            {name:'password',label:'密码',input:{type:'password'}}
        ] )
    const [errors,setErrors] = useState({})
    const buttons = <>
        <button>提交</button>
    </>
    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key:'username',required:true},
            {key:'username',pattern:/^[A-Za-z0-9]+$/}
        ]
        const errors = Validator(formData,rules)
        setErrors(errors)
        console.log(errors);

    }


    return (
        <div className={sc('')}>
            <Form value={formData} errors={errors} fields={fields} buttons={buttons} onChange={(newValue)=>{setFormData(newValue)}} onSubmit={submit}></Form>
        </div>
    )
}

export default FormDemo