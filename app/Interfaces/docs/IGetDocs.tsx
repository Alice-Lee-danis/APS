export default interface IGetDocs {
    name:string,
    text:string,
    code: Array<String>,
    classConstructor: string,
    bigO?: string,
    api:string,
    category: 'dataArgument' | 'selectArgument',
    image?: string
}