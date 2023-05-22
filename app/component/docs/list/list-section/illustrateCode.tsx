
import React, { use, useMemo, useRef, useState } from "react"
import IMethodResponce from '../../../../Interfaces/docs/IMethodResponce'
import requestCalc from "app/fetching-functions/requestCalc"

const IllustrateCode = ({code, classConstructor, path, api, category}) => {

    const [requestBody, setRequestBody] = useState('')
    const dockCalck = useRef<IMethodResponce>()
    const request = useMemo(()=>{
        if(requestBody!=''){
           return requestCalc(path, api, requestBody)}
    }, [requestBody])

    if(requestBody!=''){
        const callResponce = use(request)
        dockCalck.current = callResponce
    }

    const activeClassResponce = useMemo(()=>{
        if(dockCalck.current!=null) {
           const responceValid = "docs__list__item__illustrate__code__responce"
            switch(dockCalck.current.status){
            case 'valid': return responceValid + "_valid";
            case 'invalid': return responceValid + "_invalid"
        } 
        }
    }, [requestBody])

    return <div className="docs__list__item__illustrate__code">
        {requestBody!='' && <div className={activeClassResponce + ' docs__list__item__illustrate__code__responce'}>
            <p className="docs__list__item__illustrate__code__responce__message">{dockCalck.current.body ? dockCalck.current.body : 'введите валидные данные'}</p>    
        </div>}
        <div className="docs__list__item__illustrate__code__initial">
            {code && code.map((item, index)=><p key={index}>{item}</p>)}
        </div>
        <div className="docs__list__item__illustrate__code__constructor">
            {category == 'dataArgument' && <section>
                <label htmlFor="constructor">
                    <h1>{classConstructor}</h1>
                </label>
                <input onInput={(element:React.ChangeEvent<HTMLInputElement>)=>{
                    const value = element.target.value 
                    setRequestBody(value)
                }}  type="text" id="constructor" maxLength={1}/>
            </section>}
            {category == 'selectArgument' && <button className="docs__list__item__illustrate__code__constructor__button" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{
                e.preventDefault()
                setRequestBody('select')
                const timeout = setTimeout(()=>{
                    setRequestBody('')
                },1000)
                clearTimeout(timeout)
            }}>start</button>}
        </div>
    </div>
}

export default IllustrateCode

