'use client'

import Search from "./search"

const HeadComponent:React.FC<{pathName:string}> = ({pathName}) => {
    return (
        <section className="head">
            <div className="head__title">
                <h1>{pathName[0].toUpperCase()+ pathName.slice(1)}</h1>
            </div>
            <Search/>
        </section>
    )
}

export default HeadComponent