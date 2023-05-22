
import React from "react"
import NavBar from "./navbar"
import Link from "next/link"

const HeaderComponent:React.FC = () => {
    return (
        <header>
          <div className="header__menu-block">
            <Link href={''}><h1>APC</h1></Link>
            <NavBar/>
          </div>
        </header>
    )
}

export default HeaderComponent