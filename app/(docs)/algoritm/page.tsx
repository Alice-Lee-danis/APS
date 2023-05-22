'use client'

import HeadComponent from "app/component/docs/head/headComponent"
import DocList from "app/component/docs/list/docList"
import Loading from "app/component/loading"
import { usePathname } from "next/navigation"
import { Suspense } from "react"

const Page = () =>{

    const path = usePathname().replace('/', "")

    return  <section className='docs'>
    <div className="docs__list">
        <HeadComponent pathName={path}/>
        <Suspense fallback={<Loading></Loading>}> 
        <DocList namePath={path}/>
        </Suspense>
    </div>
    </section>
}

export default Page