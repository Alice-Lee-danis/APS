import IMethodResponce from "app/Interfaces/docs/IMethodResponce";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const data = await request.json();
    if(!(data.argument instanceof Object)){
        const map:{a:string, b:string,c:string,d:string,f:string, j?:string} = {a:'a', b:'b',c:'c',d:"d",f:"f"}
        map.j = data.argument
        return NextResponse.json({
            body: 'обновленный массив '+ getProperties(map).join(' ,'),
            status:"valid"
        } as IMethodResponce) 
    }

    return NextResponse.json({
        status:"invalid"
    } as IMethodResponce) 
}

function getProperties(object) {
    const array = []

    for(let i in object){
        array.push(object[i])
    }

    return array
}