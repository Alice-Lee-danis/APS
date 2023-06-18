'use client'

import React, { use, useMemo, useState } from "react";
import IGetDocs from "../../../Interfaces/docs/IGetDocs";
import DocsListItem from "./docsListItem";
import getDocsData from "../../../fetching-functions/getDocsFata";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import HeadComponent from "../head/headComponent";

const DocList:React.FC<{namePath:string}> = ({namePath}) => {
   
    const setPatter = useMemo(()=>{
        return getDocsData(namePath)
    }, [namePath])

    const pattern = use(setPatter)
    return <>
        {pattern.map((item:IGetDocs)=>{
            return <DocsListItem key={item.api} 
            api={item.api} 
            name={item.name} 
            text={item.text} 
            code={item.code} 
            classConstructor={item.classConstructor}
            category={item.category}
            image={item.image}/>
        })}
    </>
}

export default DocList