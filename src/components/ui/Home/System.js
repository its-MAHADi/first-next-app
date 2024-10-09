import Image from 'next/image'
import React from 'react'
import icon1 from "../../../images/icon1.png"
import icon2 from "../../../images/icon2.png"
import mobile1 from "../../../images/Mobile 1.png"

function System() {
  return (
    <div  className ="container grid grid-cols-2 h-screen max-w-screen-md items-center">
       <div  className ="mt-24  ">
        <h1 className ="text-4xl font-semibold ">We are here to  </h1>
         <h1  className ="text-3xl font-semibold"> help you</h1>
        <p  className ="mt-3">The experienced funeral directors at Name Funeral Home will guide you through the aspects of the funeral service with compassion, dignity, and respect.</p>
        <div className =" mt-8 gap-3 flex">
            <Image className ="w-[25px] " src={icon1}></Image>
            <h1 className="text-xl font-semibold "> Pre-planning </h1>
        </div>
       <div  className =" mt-2">
       <p>The best way to spare your loved ones the emotional and financial strain.</p>
       </div>
       <div  className ="flex gap-3 mt-10">
        <Image  className ="w-[25px]" src ={icon2}></Image>
        <h1  className ="text-xl font-semibold">Quality services</h1>
       </div>
       <div  className ="mt-2">
       <p>We offer high-quality services for families to create healing moments after loss.</p>
       </div>
       </div>

        <div className ="mt-16 ">
            <Image className ="w-[400px]" src ={mobile1}></Image>
        </div>
    </div>
  )
}

export default System
