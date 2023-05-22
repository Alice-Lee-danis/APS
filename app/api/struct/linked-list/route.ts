import IMethodResponce from "app/Interfaces/docs/IMethodResponce";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const data = await request.json();
    if(!(data.argument instanceof Object)){
        const list = new LinkedList().add('a').add('b').add('c').add('d').add('f')
        return NextResponse.json({
            body: 'обновленный массив '+ list.add(data.argument).toArray().join(', '),
            status:"valid"
        } as IMethodResponce) 
    }

    return NextResponse.json({
        status:"invalid"
    } as IMethodResponce) 
}



class LinkedList{
    firtsItem=null
    lastItem=null

    add(data){
        const element = {data, next:null}

        if(this.firtsItem==null) {
            this.firtsItem = element
        }
        if(this.lastItem) {
            this.lastItem.next = element
        }

        this.lastItem = element
        return this
    }

    toArray(){

        const array = []

        let lastItem = this.firtsItem

        while(lastItem){
            array.push(lastItem.data)
            lastItem = lastItem.next
        }

        return array

    }
    
}

