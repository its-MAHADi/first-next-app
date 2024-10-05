import React from 'react'
import Image from 'next/image'
import man1 from "../../../images/man1.jpg.png"
import man2 from "../../../images/man2.jpg.png"
import man3 from "../../../images/man3.jpg.png"
import man4 from "../../../images/man4.jpg.png"
import man5 from "../../../images/man5.jpg.png"
import man6 from "../../../images/man6.jpg.png"
import seemore from "../../../images/seemore.png.png"

export default function Story() {
  return (
    <div className='container'>
      
      <div className='text-center mt-20 h-screen'>
        <h2 className='text-3xl font-semibold'>Recent Stories</h2>
        <p className='mt-3'> We offer a wide range of funeral services and arrangements to</p>
        <p>help you honor and celebrate the life of your loved one.</p>

        <div className='flex gap-3 items-center  mt-12 '>
          <div>
            <Image src={man1}></Image>
          </div>

          <div>
            <Image src={man2}></Image>
          </div>

          <div>
            <Image src={man3}></Image>
          </div>

          <div>
            <Image src={man4}></Image>
          </div>

          <div>
            <Image src={man5}></Image>
          </div>

          <div>
            <Image src={man6}></Image>
          </div>
        </div>
         
         <div className='flex justify-center mt-10'>
          <Image className='w-[120px]' src={seemore}></Image>
         </div>

      </div>


    </div>
  )
}
