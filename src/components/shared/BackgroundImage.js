import React from 'react'
import Image from 'next/image'
import bird from "../shared/Rectangle 3.png"
import Navbar from './Navbar'


export default function BackgroundImage() {
  return ( 
    <div className='bg-cover bg-center h-screen'>
      <Image src={bird}></Image>
    </div>
   
  )
}
