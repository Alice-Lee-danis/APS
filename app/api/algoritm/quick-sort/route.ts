import { NextResponse } from "next/server";
import IMethodResponce from '../../../Interfaces/docs/IMethodResponce'

export async function POST(request: Request) {
    const requestBody = await request.json();
    if(requestBody.argument == 'select') {
       return NextResponse.json({
            body:quickSort([5,4,3,1,2])  + ' отсортированный массив',
            status:'valid'
        } as IMethodResponce) 
    }
    return NextResponse.json({
        status:"invalid"
    } as IMethodResponce) 
}

function quickSort(array){
    if(array.length<=1){
        return array
    }
    
    const point = Math.floor((array.length-1)/2)
    const leftArray = [];
    const rightArray = [];
  
    for(let a = 0; a < array.length; a++){
        if(a!=point){
            if(array[a]>=array[point]) 
            {
                rightArray.push(array[a])
            }
            if(array[a]<array[point]) {
                leftArray.push(array[a])
  
                
            }
        }
    }
    return [...quickSort(leftArray), array[point], ...quickSort(rightArray)]
}
