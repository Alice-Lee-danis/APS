import { NextResponse } from "next/server";
import IMethodResponce from '../../../Interfaces/docs/IMethodResponce'

export async function POST(request: Request) {
    const requestBody = await request.json();
    const convertNumber = parseInt(requestBody.argument)
    if(Number.isInteger(convertNumber)) {
        if(convertNumber <= 5 && convertNumber >= 1) return NextResponse.json({
            body:binarySearch([1,2,3,4,5], convertNumber)  + ' искомое число',
            status:'valid'
        } as IMethodResponce) 
    }
    return NextResponse.json({
        status:"invalid"
    } as IMethodResponce) 
}


function binarySearch(array, searchNumber) {
    const middle = Math.round((array.length-1) /2)

    if(searchNumber !== array[middle]){
        if(searchNumber < array[middle])
            return binarySearch(array.slice(0, middle), searchNumber)
        if(searchNumber > array[middle])
            return binarySearch(array.slice(middle, array.length), searchNumber)
    }
    return array[middle]
}

