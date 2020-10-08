import {FormValue} from "./form";

interface FormRule {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: RegExp
}

interface FormError {
    [K: string]: Array<string>
}

const isEmpty = (value: any) => {
    return value === '' || value === undefined || value === null
}

type FormRules = Array<FormRule>
const Validator = (formValue: FormValue, rules: FormRules): FormError => {
    let errors: FormError = {}
    const addError = (key: string, message: string) => {
        if (!errors[key]) {
            errors[key] = []
        }
        errors[key].push(message)
    }
    rules.map(rule => {
        const value = formValue[rule.key]
        if (rule.required && isEmpty(value)) {
            addError(rule.key, '必填')
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError(rule.key, '太短')
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError(rule.key, '太长')
        }
        if(rule.pattern){
            if(!(rule.pattern.test(value))){
                addError(rule.key,'格式不正确')
            }
        }
    })

    return errors
}

export default Validator