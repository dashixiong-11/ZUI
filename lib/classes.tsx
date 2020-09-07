function scopedClassNameMaker(prefix: string) {
    return function x(classname?: string) {
        return [prefix, classname].filter(Boolean).join('-');
    };
}

export {scopedClassNameMaker}
