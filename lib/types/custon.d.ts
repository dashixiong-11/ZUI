declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: number;
    export default content
}

type apiDoc = {
    name: string, explain: string, type: string, default: string,
}