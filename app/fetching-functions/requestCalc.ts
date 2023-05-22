export default async function requestCalc(path, apiName, httpBody){
    const responce = await fetch(`http://localhost:3000/api/${path}/${apiName}`, {
        method:'POST', 
        body: JSON.stringify({argument: httpBody})
    })
    return responce.json()
}