import React,{useState} from 'react'
import {scopedClassNameMaker} from "../helpers/classes";

import Form,{FormValue} from './form'

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
    const buttons = <>
        <button>提交</button>
    </>
    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(formData);

    }


    return (
        <div className={sc('')}>
            <Form value={formData} fields={fields} buttons={buttons} onChange={(newValue)=>{setFormData(newValue)}} onSubmit={submit}></Form>
        </div>
    )
}

export default FormDemo