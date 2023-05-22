'use client'

import { Menu, MenuProps } from "antd"
import Link from "next/link"
import React from "react"

const items: MenuProps['items'] = [
  {
    label: (
      <Link href={'algoritm'}>Algoritm</Link>
    ),
    key: 'algoritme',
  },
  {
    label: (
      <Link href={'pattern'}>Pattern</Link>
    ),
    key: 'pattern',
  },
  {
    label: (
      <Link href={'struct'}>Struct</Link>
    ),
    key: 'struct',
  }
]

const NavBar:React.FC = () => {
    return (
        <Menu className="menu" mode="horizontal" items={items}/>
    )
}

export default NavBar