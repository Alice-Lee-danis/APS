import { NextResponse } from "next/server";
import IMethodResponce from '../../../Interfaces/docs/IMethodResponce'

export async function POST(request: Request) {
    const requestBody = await request.json();
    if(requestBody.argument == 'select') {
       return NextResponse.json({
            body:[5,4,3,1,2].sort((a,b)=>a-b)  + ' отсортированный массив',
            status:'valid'
        } as IMethodResponce) 
    }
    return NextResponse.json({
        status:"invalid"
    } as IMethodResponce) 
}
