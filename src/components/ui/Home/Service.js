import React from 'react'
import Image from 'next/image'
import service1 from "../../../images/service1.jpg.png"
import service2 from "../../../images/service2.jpg.png"
import service3 from "../../../images/service3.jpg.png"
function Service() {
  return (
    <div  className ="container bg-indigo-50">
       <div className ="text-center h-screen py-10 ">
       <h2  className ="text-3xl font-semibold">Quality Services</h2>
       <p className ="mt-3" >We offer a wide range of funeral Services and arrangements to help your honor </p>
       <p>and celebrate the life of your loved one.</p>

       <div className ="flex gap-3 max-w-screen-md items-center container mt-10">
        <div>
        <Image src={service1} ></Image>
        </div>
        <div>
          <Image src={service2}></Image>
        </div>
        <div>
            <Image src ={service3}></Image>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Service
