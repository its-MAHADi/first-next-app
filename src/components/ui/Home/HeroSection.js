
import React from 'react'
import Image from 'next/image'
import play from "../../../images/play.jpg.png"
import google from "../../../images/google.jpg.png"
import mobile from "../../../images/mobile.jpg.png"

export default function HeroSection() {
  return (
    <div  className='bg-cover bg-center h-screen flex ' style={{backgroundImage:"url('https://i.ibb.co.com/FJSBWjR/Rectangle-3.png')"}}>
     <div className='grid grid-cols-2 text-6xl items-center text-white container '>

      <div>
         <h2 className='text-2xl font-semibold mt-3'> Welcome to Memorial Moments Magazine </h2>
         <h2 className='text-5xl mt-3'>Unforgettable Moments, Endless Love</h2>
          <p className='text-xl mt-3'>We understand every funeral is different because every person isunique and each family situation is different.</p> 
         <div className='flex mt-10 gap-4'>
         <Image className='w-[120px]' src={play}></Image>
         <Image className='w-[120px]' src={google}></Image>
         </div>
      </div>
        
        <div className='flex items-center mt-10 px-14'>
         { <Image className='w-[350px]' src={mobile}></Image> }
        </div>
       </div>
       </div>
   
  )
}



// <Image src="https://i.ibb.co.com/FJSBWjR/Rectangle-3.png" height={600} width={800} ></Image>