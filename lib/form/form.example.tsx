import React, {useState} from 'react'
import {scopedClassNameMaker} from "../helpers/classes";
import Icon from '../icon/icon'

import Form, {FormValue} from './form'
import Validator from "./validator";
import Button from "../Button/Button";

const sc = scopedClassNameMaker('form-example')

const FormDemo: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    })

    const names = ['frank', 'jack', 'alice', 'bob']
    const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
        setTimeout(() => {
            if (names.indexOf(username) >= 0) {
                succeed()
            } else {
                fail()
            }
        }, 3000)
    }
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text', placeholder: '请输入账号', icon: <Icon name='wechat'/>}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ])
    const [errors, setErrors] = useState({})
    const buttons = <>
        <Button type='submit'>提交</Button>
    </>
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required: true},
            {
                key: 'username', validator: (username: string) => {
                    return new Promise<string>((resolve, reject) => {
                        checkUserName(username, resolve, reject)
                    })
                }

            },
            {key: 'username', pattern: /^[A-Za-z0-9]+$/},
            {key: 'username', minLength: 6}
        ]
        Validator(formData, rules, (errors) => {
            setErrors(errors)
        })
    }


    return (
        <div className={sc('')}>
            <Form value={formData} errors={errors}
                  fields={fields} buttons={buttons}
                  onChange={(newValue) => {
                      setFormData(newValue)
                  }} onSubmit={submit}/>
        </div>
    )
}

export default FormDemo