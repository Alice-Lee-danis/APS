import { NextResponse } from "next/server";
import IMethodResponce from '../../../Interfaces/docs/IMethodResponce'

export async function POST(request: Request) {
    const requestBody = await request.json();
    const declaredClass = Factory.getClass(requestBody.argument)
    if(declaredClass==null) {
        return NextResponse.json({
            status:"invalid"
        } as IMethodResponce)
    }
    const className = declaredClass.getName()
    
    return NextResponse.json({
        body:className,
        status:'valid'
    } as IMethodResponce)
}

interface IABC  {
    getName:() => string
}

class A implements IABC {
    getName(){
        return 'вызван конструктор A'
    }
}

class B implements IABC {
    getName(){
        return 'вызван конструктор B'
    }
}

class C implements IABC {
    getName(){
        return 'вызван конструктор C'
    }
}

class Factory {
    static getClass (name) {
        switch(name){
            case "A" : return new A();
            case "B" : return new B();
            case "C" : return new C();
            default: return null;
        }
    }
}


