function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

interface x {
    extra: string | undefined
}

interface ClassToggles {
    [K: string]: boolean
}

function scopedClassNameMaker(prefix: string) {

    return (name: string | ClassToggles, options?: x) =>
        Object.entries(
            name instanceof Object ? name : {[name]: name}
        ).filter(kv => kv[1] !== false).map(kv => kv[0]).map(n =>
            ['orz', prefix, n].filter(Boolean).join('-')
        ).concat(options?.extra || []).join(' ')

}

export {scopedClassNameMaker}
export default classes