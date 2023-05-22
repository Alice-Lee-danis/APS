'use client'

import { Suspense } from "react"
import DocList from "../../component/docs/list/docList"
import Loading from "app/component/loading"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import HeadComponent from "app/component/docs/head/headComponent"

const Pattern = () => {
    
    const path = usePathname().replace('/', "")
   
    return <>
     <section className='docs'>
        <div className="docs__list">
        <HeadComponent pathName={path}/>
        <Suspense fallback={<Loading></Loading>}> 
          <DocList namePath={path}/>
        </Suspense>
      </div></section>
    </>
}

export default Pattern