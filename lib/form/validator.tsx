import {FormValue} from "./form";

interface FormRule {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: RegExp,
    validator?: (value: string) => Promise<string>

}

/*
interface FormError {
    [K: string]: Array<string>
}
*/

type OneError = string | Promise<string>

const isEmpty = (value: any) => {
    return value === '' || value === undefined || value === null
}

type FormRules = Array<FormRule>
const Validator = (formValue: FormValue, rules: FormRules, callback?: (errors: any) => void): void => {
    let errors: any = {}
    const addError = (key: string, error: OneError) => {
        if (!errors[key]) {
            errors[key] = []
        }
        errors[key].push(error)
    }
    rules.map(rule => {
        const value = formValue[rule.key]
        if (rule.validator) {
            const promise = rule.validator(value)
            addError(rule.key, promise)
        }
        if (rule.required && isEmpty(value)) {
            addError(rule.key,  'required')
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError(rule.key,  'minLength')
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError(rule.key, 'maxLength')
        }
        if (rule.pattern) {
            if (!(rule.pattern.test(value))) {
                addError(rule.key, 'pattern')
            }
        }
    })

}

/*
const flat = (arr: any[]) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result.push(...arr[i])
        } else {
            result.push(arr[i])
        }

    }
    return result
}
*/

export default Validator