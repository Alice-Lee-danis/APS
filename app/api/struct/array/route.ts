import IMethodResponce from "app/Interfaces/docs/IMethodResponce";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const data = await request.json();
    if(!(data.argument instanceof Object)){
        return NextResponse.json({
            body: 'обновленный массив ' + addArray(['a','b','c','d','f'], data.argument),
            status:"valid"
        } as IMethodResponce) 
    }

    return NextResponse.json({
        status:"invalid"
    } as IMethodResponce) 
}

function addArray(array:Array<any>, argument){
    array.push(argument)
    return array.join(', ')
}