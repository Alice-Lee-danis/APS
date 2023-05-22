export default async function getDocsData(name:string){
    const res = await fetch(`http://localhost:3000/api/${name}/get-${name}`)
    return res.json()
}