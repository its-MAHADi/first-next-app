import Link from 'next/link'
import React from 'react'
import logo from "./Logo.png"
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className=' container mx-auto'>
   <nav className=' flex items-center justify-between  text-white fixed z-10 container mt-2'>
      <Link href= "/">
        <div>
       <Image src={logo}></Image>
        </div>
      </Link>
      <ul className='flex items-center gap-14'>
       <Link href= "/">Home </Link>
       <Link href= "/blog">Blog </Link>
       <Link href= "/foods">Foods </Link>
       <Link href= "/contact">Contact </Link>
       <Link href= "/about">About </Link>
       <Link href= "/earnings">Dashboard </Link>
       <Link href= "/login"> Login </Link>
      </ul>
   </nav>
   </div>
  )
}
