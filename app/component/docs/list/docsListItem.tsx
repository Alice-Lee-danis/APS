'use client'

import React from "react"
import IGetDocs from "../../../Interfaces/docs/IGetDocs"
import { usePathname } from "next/navigation"
import IllustrateCode from "./list-section/illustrateCode"

const DocsListItem:React.FC<IGetDocs> = ({name, text, code, classConstructor , bigO, api,category}) => {
    
    const path = usePathname()

    return <>
        <section className="docs__list__item">
            <div className="docs__list__item__illustrate">
                <div className="docs__list__item__illustrate__diagram">
                    <img src="" alt="" />
                </div>
                <IllustrateCode category={category} code={code} classConstructor={classConstructor} path={path} api={api}></IllustrateCode>
            </div>
            <div className="docs__list__item__info">
                <div className="docs__list__item__info__title">{name}</div>
                <div className="docs__list__item__info__info-text">
                    <p>{text}</p>
                </div>
            </div>
        </section>
    </>
}

export default DocsListItem