
function classes(...names:(string|undefined)[]){
    return names.filter(Boolean).join(' ')
}

interface x {
    extra: string | undefined
}

interface ClassToggles {
    [K: string]: boolean
}

function scopedClassNameMaker(prefix: string) {
    return function (name?: string | ClassToggles, options?: x) {
        let name2
        let result
        if (typeof name === 'string' || name === undefined) {
            name2 = name
            result = ['orz', prefix, name2].filter(Boolean).join('-');
        } else {
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0])
            result = name2.map(n =>
                ['orz', prefix, n].filter(Boolean).join('-')
            ).join(' ')
        }

        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ')
        } else {
            return result
        }
    };
}

export {scopedClassNameMaker}
export default classes